import { useRef, useState } from "react";
import Navbar, { type Expense } from "./components/Navbar";
import EmptyState from "./components/EmptyState";
import SummaryStrip from "./components/SummaryStrip";
import ChartsRow from "./components/ChartsRow";
import MonthlyTrend from "./components/MonthlyTrend";
import MerchantsAndTop from "./components/MerchantsAndTop";

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      "merchant": "H&M",
      "amount": 2499,
      "currency": "INR",
      "category": "Shopping",
      "date": "2025-12-03",
      "type": "debit"
    },
    {
      "merchant": "Apple Media Services",
      "amount": 79,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2025-12-04",
      "type": "debit"
    },
    {
      "merchant": "Amazon",
      "amount": 587,
      "currency": "INR",
      "category": "Shopping",
      "date": "2025-12-04",
      "type": "debit"
    },
    {
      "merchant": "Airtel",
      "amount": 859,
      "currency": "INR",
      "category": "Utilities",
      "date": "2025-12-04",
      "type": "debit"
    },
    {
      "merchant": "Hungerbox",
      "amount": 111,
      "currency": "INR",
      "category": "Food",
      "date": "2025-12-05",
      "type": "debit"
    },
    {
      "merchant": "Swiggy",
      "amount": 227,
      "currency": "INR",
      "category": "Food",
      "date": "2025-12-05",
      "type": "debit"
    },
    {
      "merchant": "PayPro Global",
      "amount": 1362.25,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2025-12-05",
      "type": "debit"
    },
    {
      "merchant": "Spotify",
      "amount": 99,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2025-12-06",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 200,
      "currency": "INR",
      "category": "Transport",
      "date": "2025-12-09",
      "type": "debit"
    },
    {
      "merchant": "YesPay",
      "amount": 1362.25,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-09",
      "type": "credit"
    },
    {
      "merchant": "Indian Railways UTS",
      "amount": 660,
      "currency": "INR",
      "category": "Transport",
      "date": "2025-12-09",
      "type": "debit"
    },
    {
      "merchant": "Hungerbox",
      "amount": 86,
      "currency": "INR",
      "category": "Food",
      "date": "2025-12-10",
      "type": "debit"
    },
    {
      "merchant": "Apple Media Services",
      "amount": 75,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2025-12-11",
      "type": "debit"
    },
    {
      "merchant": "Hungerbox",
      "amount": 49,
      "currency": "INR",
      "category": "Food",
      "date": "2025-12-12",
      "type": "debit"
    },
    {
      "merchant": "Tabrez Alam",
      "amount": 100,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-12",
      "type": "debit"
    },
    {
      "merchant": "Nakhye Foods",
      "amount": 100,
      "currency": "INR",
      "category": "Food",
      "date": "2025-12-13",
      "type": "debit"
    },
    {
      "merchant": "Zishan Ali Zuber Ali",
      "amount": 600,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-14",
      "type": "credit"
    },
    {
      "merchant": "PhonePe",
      "amount": 17500,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-14",
      "type": "credit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 18959,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2025-12-14",
      "type": "debit"
    },
    {
      "merchant": "PhonePe",
      "amount": 23000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-17",
      "type": "credit"
    },
    {
      "merchant": "PhonePe",
      "amount": 500,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-17",
      "type": "credit"
    },
    {
      "merchant": "PhonePe",
      "amount": 23752.5,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-17",
      "type": "debit"
    },
    {
      "merchant": "Amazon",
      "amount": 125,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2025-12-18",
      "type": "debit"
    },
    {
      "merchant": "Zishan Ali Zuber Ali",
      "amount": 18,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-20",
      "type": "credit"
    },
    {
      "merchant": "Shaikh Zuberali Raheem",
      "amount": 1105,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2025-12-26",
      "type": "credit"
    },
    {
      "merchant": "Lenskart",
      "amount": 49,
      "currency": "INR",
      "category": "Shopping",
      "date": "2025-12-26",
      "type": "debit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 1000,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2025-12-26",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 20,
      "currency": "INR",
      "category": "Transport",
      "date": "2025-12-29",
      "type": "debit"
    },
    {
      "merchant": "TATA Consultancy Services Limited",
      "amount": 26142,
      "currency": "INR",
      "category": "Salary",
      "date": "2025-12-31",
      "type": "credit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 15200,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2025-12-31",
      "type": "debit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 500,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2025-12-31",
      "type": "debit"
    },
    {
      "merchant": "Sanjay General Store",
      "amount": 29,
      "currency": "INR",
      "category": "Food",
      "date": "2025-12-31",
      "type": "debit"
    },
    {
      "merchant": "Zepto",
      "amount": 311,
      "currency": "INR",
      "category": "Food",
      "date": "2025-12-31",
      "type": "debit"
    },
    {
      "merchant": "Bank Interest",
      "amount": 16,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2026-01-01",
      "type": "credit"
    },
    {
      "merchant": "Zuberali Jaffarali S",
      "amount": 3308,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-01",
      "type": "debit"
    },
    {
      "merchant": "Tabrez Alam",
      "amount": 100,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-02",
      "type": "debit"
    },
    {
      "merchant": "Indian Railways UTS",
      "amount": 90,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-01-04",
      "type": "debit"
    },
    {
      "merchant": "Indian Railways UTS",
      "amount": 10,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-01-04",
      "type": "debit"
    },
    {
      "merchant": "Mrs Vilakeesa Vilak",
      "amount": 100,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-04",
      "type": "debit"
    },
    {
      "merchant": "Excel Frangrances",
      "amount": 200,
      "currency": "INR",
      "category": "Shopping",
      "date": "2026-01-04",
      "type": "debit"
    },
    {
      "merchant": "Furqan Ruknuddin Kha",
      "amount": 450,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-04",
      "type": "debit"
    },
    {
      "merchant": "Mo Tajammul Khan",
      "amount": 1000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-04",
      "type": "debit"
    },
    {
      "merchant": "Royal Garments",
      "amount": 700,
      "currency": "INR",
      "category": "Shopping",
      "date": "2026-01-04",
      "type": "debit"
    },
    {
      "merchant": "Spotify",
      "amount": 99,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2026-01-06",
      "type": "debit"
    },
    {
      "merchant": "Zepto",
      "amount": 148,
      "currency": "INR",
      "category": "Food",
      "date": "2026-01-06",
      "type": "debit"
    },
    {
      "merchant": "Swiggy",
      "amount": 337,
      "currency": "INR",
      "category": "Food",
      "date": "2026-01-06",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 200,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-01-07",
      "type": "debit"
    },
    {
      "merchant": "Apple Media Services",
      "amount": 75,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2026-01-10",
      "type": "debit"
    },
    {
      "merchant": "Indian Railways UTS",
      "amount": 660,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-01-11",
      "type": "debit"
    },
    {
      "merchant": "Hungerbox",
      "amount": 91,
      "currency": "INR",
      "category": "Food",
      "date": "2026-01-12",
      "type": "debit"
    },
    {
      "merchant": "Rama Rachappa Bhore",
      "amount": 35,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-14",
      "type": "debit"
    },
    {
      "merchant": "Hungerbox",
      "amount": 68,
      "currency": "INR",
      "category": "Food",
      "date": "2026-01-16",
      "type": "debit"
    },
    {
      "merchant": "Tabrez Alam",
      "amount": 100,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-16",
      "type": "debit"
    },
    {
      "merchant": "PhonePe",
      "amount": 34000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-16",
      "type": "credit"
    },
    {
      "merchant": "PhonePe",
      "amount": 28073,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-16",
      "type": "debit"
    },
    {
      "merchant": "PhonePe",
      "amount": 2000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-16",
      "type": "credit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 10245,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2026-01-16",
      "type": "debit"
    },
    {
      "merchant": "Zuberali Jaffarali S",
      "amount": 1105,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-26",
      "type": "credit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 1000,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2026-01-26",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 100,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-01-27",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-01-28",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-01-28",
      "type": "debit"
    },
    {
      "merchant": "Shaikh Zuberali Raheem",
      "amount": 10000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-28",
      "type": "credit"
    },
    {
      "merchant": "TATA Consultancy Services Limited",
      "amount": 28267,
      "currency": "INR",
      "category": "Salary",
      "date": "2026-01-30",
      "type": "credit"
    },
    {
      "merchant": "Tabrez Alam",
      "amount": 100,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-30",
      "type": "debit"
    },
    {
      "merchant": "Zepto",
      "amount": 172,
      "currency": "INR",
      "category": "Food",
      "date": "2026-01-30",
      "type": "debit"
    },
    {
      "merchant": "PhonePe",
      "amount": 2000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-01-31",
      "type": "credit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 14903,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2026-01-31",
      "type": "debit"
    },
    {
      "merchant": "Zuberali Jaffarali S",
      "amount": 3308,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-01",
      "type": "debit"
    },
    {
      "merchant": "Amazon",
      "amount": 404,
      "currency": "INR",
      "category": "Shopping",
      "date": "2026-02-02",
      "type": "debit"
    },
    {
      "merchant": "Fatima Shaikh",
      "amount": 404,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-03",
      "type": "credit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 100,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-03",
      "type": "debit"
    },
    {
      "merchant": "Spotify",
      "amount": 99,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2026-02-06",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 20,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-06",
      "type": "debit"
    },
    {
      "merchant": "Tabrez Alam",
      "amount": 100,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-06",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 20,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-06",
      "type": "debit"
    },
    {
      "merchant": "Jeet Lal Verma",
      "amount": 870,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-07",
      "type": "debit"
    },
    {
      "merchant": "Apple Media Services",
      "amount": 75,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2026-02-10",
      "type": "debit"
    },
    {
      "merchant": "Indian Railways UTS",
      "amount": 640.2,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-12",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-12",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-12",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-13",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 20,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-13",
      "type": "debit"
    },
    {
      "merchant": "PhonePe",
      "amount": 6000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-14",
      "type": "credit"
    },
    {
      "merchant": "Abdul Rehman Abdul S",
      "amount": 25000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-14",
      "type": "debit"
    },
    {
      "merchant": "Shaikh Zuberali Raheem",
      "amount": 15000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-15",
      "type": "credit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-16",
      "type": "debit"
    },
    {
      "merchant": "Cash Deposit",
      "amount": 10000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-16",
      "type": "credit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 25000,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2026-02-16",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-16",
      "type": "debit"
    },
    {
      "merchant": "PhonePe",
      "amount": 22000,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-17",
      "type": "credit"
    },
    {
      "merchant": "PhonePe",
      "amount": 22353.33,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-17",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 20,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-18",
      "type": "debit"
    },
    {
      "merchant": "Faizabi Zuberali Sha",
      "amount": 400,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-18",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 20,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-19",
      "type": "debit"
    },
    {
      "merchant": "Chalo Mobility",
      "amount": 15,
      "currency": "INR",
      "category": "Transport",
      "date": "2026-02-19",
      "type": "debit"
    },
    {
      "merchant": "Groww",
      "amount": 6936.23,
      "currency": "INR",
      "category": "Investment",
      "date": "2026-02-24",
      "type": "credit"
    },
    {
      "merchant": "PhonePe",
      "amount": 100,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-26",
      "type": "debit"
    },
    {
      "merchant": "TATA Consultancy Services Limited",
      "amount": 26067,
      "currency": "INR",
      "category": "Salary",
      "date": "2026-02-27",
      "type": "credit"
    },
    {
      "merchant": "IB Billpay",
      "amount": 14720.06,
      "currency": "INR",
      "category": "Financial Services",
      "date": "2026-02-27",
      "type": "debit"
    },
    {
      "merchant": "Zuberali Jaffarali S",
      "amount": 3308,
      "currency": "INR",
      "category": "Personal Transfer",
      "date": "2026-02-28",
      "type": "debit"
    },
    {
      "merchant": "YouTube",
      "amount": 89,
      "currency": "INR",
      "category": "Entertainment",
      "date": "2026-02-28",
      "type": "debit"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    const formData = new FormData();
    formData.append("statement", file);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/parse/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setExpenses(data.raw);
    } finally {
      setLoading(false);
    }
  }

  function triggerUpload() {
    fileRef.current?.click();
  }

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] ?? 0) + e.amount;
    return acc;
  }, {} as Record<string, number>);

  // const chartData = Object.entries(categoryTotals)
  //   .map(([name, value]) => ({ name, value }))
  //   .sort((a, b) => b.value - a.value);
  //
  // const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Single hidden file input, owned by App */}
      <input
        ref={fileRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = ""; // reset so same file can be re-uploaded
        }}
      />

      <Navbar
        onUploadClick={triggerUpload}
        hasData={expenses.length > 0}
        loading={loading}
      />

      <main className="mx-auto max-w-7xl px-6 pt-24">
        {expenses.length === 0 ? (
          <EmptyState onUploadClick={triggerUpload} />
        ) : (
          <div>
            <SummaryStrip expenses={expenses} />
            <ChartsRow expenses={expenses} />
            <MonthlyTrend expenses={expenses} />
            <MerchantsAndTop expenses={expenses} />
          </div>)}
      </main>
    </div>
  );
}
