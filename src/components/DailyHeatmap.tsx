import { type Expense } from "./Navbar";

type Props = { expenses: Expense[] };

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DailyHeatmap({ expenses }: Props) {
  const dailyMap = expenses
    .filter((e) => e.type === "debit" && e.date)
    .reduce((acc, e) => {
      acc[e.date!] = (acc[e.date!] ?? 0) + e.amount;
      return acc;
    }, {} as Record<string, number>);

  const dates = Object.keys(dailyMap).sort();
  if (dates.length === 0) return null;

  const start = new Date(dates[0]);
  const end = new Date(dates[dates.length - 1]);

  // Align start to Sunday
  const alignedStart = new Date(start);
  alignedStart.setDate(start.getDate() - start.getDay());

  // Align end to Saturday
  const alignedEnd = new Date(end);
  alignedEnd.setDate(end.getDate() + (6 - end.getDay()));

  // Build weeks
  const weeks: Date[][] = [];
  const cur = new Date(alignedStart);
  while (cur <= alignedEnd) {
    const week: Date[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }

  const maxAmount = Math.max(...Object.values(dailyMap));
  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  function getIntensity(amount: number) {
    if (!amount) return 0;
    return Math.ceil((amount / maxAmount) * 4);
  }

  function getCellClass(intensity: number) {
    switch (intensity) {
      case 1: return "bg-chart-1/20";
      case 2: return "bg-chart-1/40";
      case 3: return "bg-chart-1/70";
      case 4: return "bg-chart-1";
      default: return "bg-muted/40";
    }
  }

  function formatDate(date: Date) {
    return date.toISOString().split("T")[0];
  }

  // Build month labels — only show when month changes, track which week column
  const monthLabels: Record<number, string> = {};
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    // Use the first day of the week that's within our data range
    const repDay = week.find(d => d >= start && d <= end) ?? week[0];
    const month = repDay.getMonth();
    if (month !== lastMonth) {
      monthLabels[i] = repDay.toLocaleDateString("en-IN", { month: "short" });
      lastMonth = month;
    }
  });

  return (
    <div className="rounded-xl border border-border bg-card p-6 mt-4">
      <h3 className="mb-1 text-sm font-semibold text-foreground">
        Daily Spending Heatmap
      </h3>
      <p className="mb-6 text-xs text-muted-foreground">
        Spending intensity by day — darker means more spent
      </p>

      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-[3px]">
          {/* Month labels */}
          <div className="flex gap-[3px] pl-8 mb-1 h-4 relative">
            {weeks.map((_, i) => (
              <div key={i} className="w-[14px] shrink-0 relative">
                {monthLabels[i] && (
                  <span className="absolute left-0 text-[10px] text-muted-foreground whitespace-nowrap">
                    {monthLabels[i]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {DAYS.map((day, dayIndex) => (
            <div key={day} className="flex items-center gap-[3px]">
              <span className="w-7 shrink-0 text-[10px] text-muted-foreground text-right pr-1">
                {dayIndex % 2 === 1 ? day : ""}
              </span>
              {weeks.map((week, wi) => {
                const date = week[dayIndex];
                const dateStr = formatDate(date);
                const amount = dailyMap[dateStr] ?? 0;
                const isInRange = date >= start && date <= end;

                return (
                  <div
                    key={wi}
                    className={`w-[14px] h-[14px] shrink-0 rounded-[3px] transition-opacity hover:opacity-70 ${isInRange ? getCellClass(getIntensity(amount)) : "bg-muted/10"
                      }`}
                    title={isInRange && amount ? `${dateStr}: ${fmt(amount)}` : dateStr}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[10px] text-muted-foreground">Less</span>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-[14px] h-[14px] rounded-[3px] ${getCellClass(i)}`} />
        ))}
        <span className="text-[10px] text-muted-foreground">More</span>
      </div>
    </div>
  );
}
