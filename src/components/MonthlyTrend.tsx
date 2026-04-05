import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { type Expense } from "./Navbar";

type Props = { expenses: Expense[] };

export default function MonthlyTrend({ expenses }: Props) {
  const monthlyMap = expenses.reduce((acc, e) => {
    const month = e.date?.slice(0, 7) ?? "Unknown";
    if (!acc[month]) acc[month] = { month, spent: 0, income: 0 };
    if (e.type === "debit") acc[month].spent += e.amount;
    else acc[month].income += e.amount;
    return acc;
  }, {} as Record<string, { month: string; spent: number; income: number }>);

  const data = Object.values(monthlyMap).sort((a, b) =>
    a.month.localeCompare(b.month)
  );

  const chartConfig = {
    spent: {
      label: "Spent",
      color: "var(--color-chart-1)",
    },
    income: {
      label: "Income",
      color: "var(--color-chart-2)",
    },
  };

  // In MonthlyTrend.tsx, before the return:
  if (data.length < 2) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 mt-4">
        <h3 className="mb-1 text-sm font-semibold text-foreground">Monthly Trend</h3>
        <p className="mb-6 text-xs text-muted-foreground">Income and spending over time</p>
        <div className="flex h-[260px] items-center justify-center">
          <p className="text-sm text-muted-foreground">
            Upload statements with 2+ months of data to see trends
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 mt-4">
      <h3 className="mb-1 text-sm font-semibold text-foreground">
        Monthly Trend
      </h3>
      <p className="mb-6 text-xs text-muted-foreground">
        Income and spending over time
      </p>
      <ChartContainer config={chartConfig} className="h-[260px] w-full">
        <LineChart data={data} margin={{ left: 10, right: 10, bottom: 10 }}>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value) =>
                  `₹${Number(value).toLocaleString("en-IN")}`
                }
              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="spent"
            stroke="var(--color-chart-1)"
            strokeWidth={2}
            dot={{ r: 4, fill: "var(--color-chart-1)" }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="var(--color-chart-2)"
            strokeWidth={2}
            dot={{ r: 4, fill: "var(--color-chart-2)" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
