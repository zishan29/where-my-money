import { AlertTriangle, TrendingUp, Lightbulb, Info } from "lucide-react";

type Insight = {
  type: "warning" | "positive" | "neutral" | "tip";
  title: string;
  body: string;
};

type Props = { insights: Insight[] };

const config = {
  warning: {
    icon: AlertTriangle,
    iconColor: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    badge: "bg-amber-500/10 text-amber-400",
  },
  positive: {
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    badge: "bg-emerald-500/10 text-emerald-400",
  },
  tip: {
    icon: Lightbulb,
    iconColor: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    badge: "bg-violet-500/10 text-violet-400",
  },
  neutral: {
    icon: Info,
    iconColor: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    badge: "bg-blue-500/10 text-blue-400",
  },
};

export default function InsightsStrip({ insights }: Props) {
  if (!insights.length) return null;

  return (
    <div>
      <div className="mb-3 flex items-center gap-2 mt-4">
        <h2 className="text-sm font-semibold text-foreground">AI Insights</h2>
        <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-400">
          Gemini
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight, i) => {
          const { icon: Icon, iconColor, border, bg, badge } = config[insight.type];
          return (
            <div key={i} className={`rounded-xl border p-4 ${border} ${bg}`}>
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${badge}`}>
                  {insight.type}
                </span>
                <Icon className={`h-4 w-4 shrink-0 ${iconColor}`} />
              </div>
              <p className="mb-1 text-sm font-semibold text-foreground">
                {insight.title}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {insight.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
