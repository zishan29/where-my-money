import { useRef, useState } from "react";
import Navbar, { type Expense } from "./components/Navbar";
import EmptyState from "./components/EmptyState";
import SummaryStrip from "./components/SummaryStrip";
import ChartsRow from "./components/ChartsRow";
import MonthlyTrend from "./components/MonthlyTrend";
import MerchantsAndTop from "./components/MerchantsAndTop";
import DailyHeatmap from "./components/DailyHeatmap";
import TransactionsTable from "./components/TransactionsTable";
import InsightsStrip from "./components/InsightsStrip";
import ChatQA from "./components/ChatQA";
import LoadingSkeleton from "./components/LoadingSkeleton";

type Insight = {
  type: "warning" | "positive" | "neutral" | "tip";
  title: string;
  body: string;
};

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [insights, setInsights] = useState<Insight[]>([]);

  async function handleFile(file: File) {
    const formData = new FormData();
    formData.append("statement", file);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setExpenses(data.raw);

      const insightsRes = await fetch(`${API_URL}/insights`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expenses: data.raw }),
      });
      const insightsData = await insightsRes.json();
      setInsights(insightsData.insights);
    } finally {
      setLoading(false);
    }
  }

  function triggerUpload() {
    fileRef.current?.click();
  }

  // const categoryTotals = expenses.reduce((acc, e) => {
  //   acc[e.category] = (acc[e.category] ?? 0) + e.amount;
  //   return acc;
  // }, {} as Record<string, number>);

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
        {loading ? (
          <LoadingSkeleton />
        ) : expenses.length === 0 ? (
          <EmptyState onUploadClick={triggerUpload} />
        ) : (
          <div className="space-y-6 py-8">
            <SummaryStrip expenses={expenses} />
            <InsightsStrip insights={insights} />
            <ChatQA expenses={expenses} />
            <ChartsRow expenses={expenses} />
            <MonthlyTrend expenses={expenses} />
            <MerchantsAndTop expenses={expenses} />
            <DailyHeatmap expenses={expenses} />
            <TransactionsTable expenses={expenses} />
          </div>
        )}
      </main>
    </div>
  );
}
