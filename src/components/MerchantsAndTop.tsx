import { TrendingDown } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { type Expense } from "./Navbar";

type Props = { expenses: Expense[] };

export default function MerchantsAndTop({ expenses }: Props) {
  // Top merchants by spend
  const merchantMap = expenses
    .filter((e) => e.type === "debit")
    .reduce((acc, e) => {
      acc[e.merchant] = (acc[e.merchant] ?? 0) + e.amount;
      return acc;
    }, {} as Record<string, number>);

  const topMerchants = Object.entries(merchantMap)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);

  // Biggest single transactions
  const biggestTx = [...expenses]
    .filter((e) => e.type === "debit")
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6);

  const chartConfig = {
    value: {
      label: "Spent",
      color: "var(--color-chart-1)",
    },
  };

  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4">
      {/* Top Merchants */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-1 text-sm font-semibold text-foreground">
          Top Merchants
        </h3>
        <p className="mb-6 text-xs text-muted-foreground">
          Where you spent the most
        </p>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart
            data={topMerchants}
            layout="vertical"
            margin={{ left: 0, right: 24, top: 0, bottom: 0 }}
          >
            <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
            <XAxis
              type="number"
              tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={110}
              tickFormatter={(v) =>
                v.length > 14 ? v.slice(0, 14) + "…" : v
              }
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => fmt(Number(value))}
                />
              }
            />
            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={[0, 4, 4, 0]}
              maxBarSize={24}
            />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Biggest Transactions */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-1 text-sm font-semibold text-foreground">
          Biggest Transactions
        </h3>
        <p className="mb-6 text-xs text-muted-foreground">
          Your largest single spends
        </p>
        <div className="space-y-3">
          {biggestTx.map((e, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {e.merchant.length > 20
                      ? e.merchant.slice(0, 20) + "…"
                      : e.merchant}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {e.category} · {e.date ?? "—"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-red-400">
                <TrendingDown className="h-3.5 w-3.5" />
                {fmt(e.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
