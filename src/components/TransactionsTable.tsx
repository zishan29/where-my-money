import { useState } from "react";
import { ArrowUpDown, TrendingDown, TrendingUp } from "lucide-react";
import { type Expense } from "./Navbar";

type Props = { expenses: Expense[] };

const CATEGORIES = ["All", "Food", "Transport", "Shopping", "Entertainment",
  "Utilities", "Healthcare", "Education", "Investment",
  "Salary", "Personal Transfer", "Financial Services"];

export default function TransactionsTable({ expenses }: Props) {
  const [filter, setFilter] = useState("All");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [sortKey, setSortKey] = useState<"amount" | "date">("date");

  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  const filtered = expenses
    .filter((e) => filter === "All" || e.category === filter)
    .sort((a, b) => {
      if (sortKey === "amount") {
        return sortDir === "desc" ? b.amount - a.amount : a.amount - b.amount;
      }
      const da = a.date ?? "";
      const db = b.date ?? "";
      return sortDir === "desc" ? db.localeCompare(da) : da.localeCompare(db);
    });

  function toggleSort(key: "amount" | "date") {
    if (sortKey === key) setSortDir(d => d === "desc" ? "asc" : "desc");
    else { setSortKey(key); setSortDir("desc"); }
  }

  // Only show categories that exist in data
  const activeCategories = ["All", ...Array.from(new Set(expenses.map(e => e.category))).sort()];

  return (
    <div className="rounded-xl border border-border bg-card p-6 mt-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Transactions</h3>
          <p className="text-xs text-muted-foreground">{filtered.length} of {expenses.length} transactions</p>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="mb-4 flex flex-wrap gap-2">
        {activeCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${filter === cat
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">
                Merchant
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">
                Category
              </th>
              <th
                className="pb-3 text-left text-xs font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => toggleSort("date")}
              >
                <span className="flex items-center gap-1">
                  Date <ArrowUpDown className="h-3 w-3" />
                </span>
              </th>
              <th
                className="pb-3 text-right text-xs font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => toggleSort("amount")}
              >
                <span className="flex items-center justify-end gap-1">
                  Amount <ArrowUpDown className="h-3 w-3" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e, i) => (
              <tr
                key={i}
                className="border-b border-border/50 transition-colors hover:bg-muted/20"
              >
                <td className="py-3 font-medium text-foreground">
                  {e.merchant.length > 24 ? e.merchant.slice(0, 24) + "…" : e.merchant}
                </td>
                <td className="py-3">
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {e.category}
                  </span>
                </td>
                <td className="py-3 text-muted-foreground text-xs">
                  {e.date ?? "—"}
                </td>
                <td className="py-3 text-right">
                  <span className={`flex items-center justify-end gap-1 font-medium ${e.type === "credit" ? "text-emerald-400" : "text-foreground"
                    }`}>
                    {e.type === "credit"
                      ? <TrendingUp className="h-3 w-3" />
                      : <TrendingDown className="h-3 w-3 text-red-400/70" />
                    }
                    {fmt(e.amount)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
