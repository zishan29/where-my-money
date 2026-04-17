import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../components/ui/chart";
import { type Expense } from "./Navbar";

type Props = {
  expenses: Expense[],
  onCategoryClick: (category: string) => void;
  selectedCategory: string | null;
};

const CHART_COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

export default function ChartsRow({ expenses, onCategoryClick, selectedCategory }: Props) {
  // Category totals (debits only)
  const categoryMap = expenses
    .filter((e) => e.type === "debit")
    .reduce((acc, e) => {
      acc[e.category] = (acc[e.category] ?? 0) + e.amount;
      return acc;
    }, {} as Record<string, number>);

  const categoryData = Object.entries(categoryMap)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // Monthly income vs expense
  const monthlyMap = expenses.reduce((acc, e) => {
    const month = e.date?.slice(0, 7) ?? "Unknown";
    if (!acc[month]) acc[month] = { month, spent: 0, income: 0 };
    if (e.type === "debit") acc[month].spent += e.amount;
    else acc[month].income += e.amount;
    return acc;
  }, {} as Record<string, { month: string; spent: number; income: number }>);

  const monthlyData = Object.values(monthlyMap).sort((a, b) =>
    a.month.localeCompare(b.month)
  );

  const categoryConfig = {
    value: {
      label: "Spent",
      color: "hsl(var(--chart-1))",
    },
  };

  const monthlyConfig = {
    income: {
      label: "Income",
      color: "hsl(var(--chart-2))",
    },
    spent: {
      label: "Spent",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Spending by Category */}
      <div className="rounded-xl border mt-4 border-border bg-card p-6">
        <h3 className="mb-1 text-sm font-semibold text-white">
          Spending by Category
        </h3>
        <p className="mb-6 text-xs text-muted-foreground">
          Where your money went</p>
        <ChartContainer config={categoryConfig} className="h-[260px] w-full">
          <BarChart
            data={categoryData}
            margin={{ left: 10, right: 10, bottom: 40 }}
          >
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11 }}
              angle={-35}
              textAnchor="end"
              interval={0}
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
            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={48}
              onClick={(data) => onCategoryClick(data.name as string)}
              cursor="pointer">
              {categoryData.map((entry, i) => (
                <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]}
                  opacity={selectedCategory && selectedCategory !== entry.name ? 0.3 : 1} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>

      {/* Income vs Expenses */}
      <div className="rounded-xl border mt-4 p-6 bg-card">
        <h3 className="mb-1 text-sm font-semibold text-white">
          Income vs Expenses
        </h3>
        <p className="mb-6 text-xs text-gray-500">Monthly comparison</p>
        <ChartContainer config={monthlyConfig} className="h-[260px] w-full">
          <BarChart
            data={monthlyData}
            margin={{ left: 10, right: 10, bottom: 10 }}
          >
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
            <Bar
              dataKey="income"
              fill="var(--color-income)"
              radius={[4, 4, 0, 0]}
              maxBarSize={36}
            />
            <Bar dataKey="spent" radius={[4, 4, 0, 0]} maxBarSize={36}>
              {monthlyData.map((_, i) => (
                <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
