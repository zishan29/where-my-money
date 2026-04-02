import { useEffect, useState } from 'react'
import './App.css'

type Expense = {
  merchant: string;
  amount: number;
  currency: string;
  category: string;
  date: string | null;
}

function App() {
  const [text, setText] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setExpenses(data.expenses);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("statement", file); // must match upload.single("statement")

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/parse/upload", {
        method: "POST",
        body: formData,
        // DO NOT set Content-Type header — browser sets it automatically with boundary
      });
      const data = await res.json();
      setExpenses(data.raw); // your backend returns { raw: [...] }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(expenses);
  }, [expenses])

  return (
    <>
      <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Where Did My Money Go?</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <button onClick={handleUpload} disabled={!file || loading}>
          {loading ? "Analyzing..." : "Upload Statement"}
        </button>

        {expenses.length > 0 && (
          <table style={{ width: "100%", marginTop: "2rem", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Merchant", "Currency", "Amount", "Category", "Date"].map(h => (
                  <th key={h} style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "8px" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expenses.map((e, i) => (
                <tr key={i}>
                  <td style={{ padding: "8px" }}>{e.merchant}</td>
                  <td style={{ padding: "8px" }}>{e.currency}</td>
                  <td style={{ padding: "8px" }}>₹{e.amount}</td>
                  <td style={{ padding: "8px" }}>{e.category}</td>
                  <td style={{ padding: "8px" }}>{e.date ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>

  )
}

export default App
