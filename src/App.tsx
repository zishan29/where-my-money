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

type Insight = {
  type: "warning" | "positive" | "neutral" | "tip";
  title: string;
  body: string;
};

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
  const [insights, setInsights] = useState<Insight[]>([
    {
      "type": "warning",
      "title": "Net savings are minuscule",
      "body": "Over the last three months, your net savings are a paltry ₹7,833.14 on an income of ₹2,34,022.48. That's a savings rate of just 3.3%, which is alarmingly low for building any financial security."
    },
    {
      "type": "warning",
      "title": "Where's the money going?",
      "body": "A staggering 95.3% of your total spending, ₹2,15,572.14, is categorized under \"Financial Services\" and \"Personal Transfer.\" These massive, vague categories completely obscure your true spending habits, making it impossible to analyze your finances properly."
    },
    {
      "type": "warning",
      "title": "February in the red",
      "body": "You significantly overspent in February 2026, with expenses of ₹96,756.59 exceeding your income of ₹86,407.23 by ₹10,349.36. This negative cash flow is a serious red flag and needs immediate attention."
    },
    {
      "type": "neutral",
      "title": "Consistent personal payouts",
      "body": "You're regularly sending money to specific individuals, notably ₹3,308 three times to 'Zuberali Jaffarali S' and ₹100 five times to 'Tabrez Alam.' Understanding the nature of these recurring transfers—whether they're loans, support, or repayments—is crucial."
    },
    {
      "type": "tip",
      "title": "Clarify 'big bucket' spending",
      "body": "Your most urgent task is to break down \"Financial Services\" (₹1,03,014.31) and \"Personal Transfer\" debits (₹1,12,557.83) into precise sub-categories. Without knowing if these are loan EMIs, investments, or family support, you're flying blind with your budget."
    }
  ]);

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

      const insightsRes = await fetch("http://localhost:3000/api/parse/insights", {
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
            <InsightsStrip insights={insights} />
            <ChartsRow expenses={expenses} />
            <MonthlyTrend expenses={expenses} />
            <MerchantsAndTop expenses={expenses} />
            <DailyHeatmap expenses={expenses} />
            <TransactionsTable expenses={expenses} />
          </div>)}
      </main>
    </div>
  );
}
