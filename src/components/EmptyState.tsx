import { Upload } from "lucide-react";

export default function EmptyState({ onUploadClick }: { onUploadClick: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card">
        <span className="text-4xl">₹</span>
      </div>
      <h2 className="mb-2 text-2xl font-semibold">
        No statement uploaded
      </h2>
      <p className="mb-8 max-w-sm text-sm text-muted-foreground">
        Upload your bank statement PDF and get an instant breakdown of where
        your money went — categories, trends, top merchants and more.
      </p>
      <button
        onClick={onUploadClick}
        className="flex items-center gap-2 rounded-lg border border-dashed border-primary/50 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
      >
        <Upload className="h-4 w-4" />
        Upload your statement to get started
      </button>
      <p className="mt-4 text-xs text-muted-foreground/50">
        Your data never leaves your session. No account required.
      </p>
    </div>
  );
}
