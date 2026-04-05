import { TrendingDown, TrendingUp, ArrowLeftRight, Receipt } from "lucide-react";
import { type Expense } from "./Navbar";

type Props = { expenses: Expense[] };

export default function SummaryStrip({ expenses }: Props) {
  const debits = expenses.filter(e => e.type === "debit");
  const credits = expenses.filter(e => e.type === "credit");

  const totalSpent = debits.reduce((sum, e) => sum + e.amount, 0);
  const totalIncome = credits.reduce((sum, e) => sum + e.amount, 0);
  const net = totalIncome - totalSpent;

  const fmt = (n: number) => `₹${Math.abs(n).toLocaleString("en-IN")}`;

  const cards = [
    {
      label: "Total Spent",
      value: fmt(totalSpent),
      icon: TrendingDown,
      iconColor: "text-red-400",
      valueColor: "text-red-400",
      borderColor: "border-red-500/20",
    },
    {
      label: "Total Income",
      value: fmt(totalIncome),
      icon: TrendingUp,
      iconColor: "text-emerald-400",
      valueColor: "text-emerald-400",
      borderColor: "border-emerald-500/20",
    },
    {
      label: "Net",
      value: `${net < 0 ? "-" : "+"}${fmt(net)}`,
      icon: ArrowLeftRight,
      iconColor: net < 0 ? "text-red-400" : "text-emerald-400",
      valueColor: net < 0 ? "text-red-400" : "text-emerald-400",
      borderColor: net < 0 ? "border-red-500/20" : "border-emerald-500/20",
    },
    {
      label: "Transactions",
      value: expenses.length.toString(),
      icon: Receipt,
      iconColor: "text-violet-400",
      valueColor: "text-white",
      borderColor: "border-border",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map(({ label, value, icon: Icon, iconColor, valueColor, borderColor }) => (
        <div key={label} className={`rounded-xl border p-5 bg-card ${borderColor}`}>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {label}
            </span>
            <Icon className={`h-4 w-4 ${iconColor}`} />
          </div>
          <p className={`text-2xl font-semibold ${valueColor}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}
