import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#3b82f6", "#8b5cf6", "#ec4899"];

type Expense = {
  merchant: string;
  amount: number;
  currency: string;
  category: string;
  date: string | null;
};

const Charts = ({ expenses }: { expenses: Expense[] }) => {
  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] ?? 0) + e.amount;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(categoryTotals)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  return <>
    <div style={{ marginTop: "2rem", marginBottom: "2rem", padding: "1rem", background: "#f3f4f6", borderRadius: "8px" }}>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>Total Spent</p>
      <p style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>₹{totalSpent.toLocaleString("en-IN")}</p>
    </div>

    <h2>Spending by Category</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 20 }}>
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(v) => `₹${v}`} />
        <Tooltip formatter={(value: number) => `₹${value.toLocaleString("en-IN")}`} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {chartData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>

  </>
};

export default Charts;
