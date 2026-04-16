function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 ${className}`}>
      <div className="mb-3 h-3 w-24 rounded-full bg-muted animate-pulse" />
      <div className="h-8 w-32 rounded-lg bg-muted animate-pulse" />
    </div>
  );
}

function SkeletonChart({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 ${className}`}>
      <div className="mb-1 h-4 w-36 rounded-full bg-muted animate-pulse" />
      <div className="mb-6 h-3 w-24 rounded-full bg-muted/60 animate-pulse" />
      <div className="h-[260px] w-full rounded-lg bg-muted/40 animate-pulse" />
    </div>
  );
}

function SkeletonInsight() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-4 w-16 rounded-full bg-muted animate-pulse" />
        <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
      </div>
      <div className="mb-2 h-4 w-40 rounded-full bg-muted animate-pulse" />
      <div className="space-y-1.5">
        <div className="h-3 w-full rounded-full bg-muted/60 animate-pulse" />
        <div className="h-3 w-4/5 rounded-full bg-muted/60 animate-pulse" />
        <div className="h-3 w-3/5 rounded-full bg-muted/60 animate-pulse" />
      </div>
    </div>
  );
}

export default function LoadingSkeleton() {
  return (
    <div className="space-y-6 py-8">
      {/* Summary strip */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
      </div>

      {/* Insights */}
      <div>
        <div className="mb-3 h-4 w-24 rounded-full bg-muted animate-pulse" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(5)].map((_, i) => <SkeletonInsight key={i} />)}
        </div>
      </div>

      {/* Chat */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 h-4 w-40 rounded-full bg-muted animate-pulse" />
        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-7 w-36 rounded-full bg-muted animate-pulse" />
          ))}
        </div>
        <div className="h-10 w-full rounded-lg bg-muted/40 animate-pulse" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SkeletonChart />
        <SkeletonChart />
      </div>

      {/* Monthly trend */}
      <SkeletonChart />

      {/* Merchants + Biggest */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SkeletonChart />
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-1 h-4 w-36 rounded-full bg-muted animate-pulse" />
          <div className="mb-6 h-3 w-24 rounded-full bg-muted/60 animate-pulse" />
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                <div className="h-8 w-8 rounded-full bg-muted animate-pulse shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-3 w-32 rounded-full bg-muted animate-pulse" />
                  <div className="h-2.5 w-20 rounded-full bg-muted/60 animate-pulse" />
                </div>
                <div className="h-3 w-16 rounded-full bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
