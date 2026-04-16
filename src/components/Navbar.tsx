import { Upload, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type NavbarProps = {
  onUploadClick: () => void;
  hasData: boolean;
  loading: boolean;
};

export type Expense = {
  merchant: string;
  amount: number;
  currency: string;
  category: string;
  date: string | null;
  type: "debit" | "credit";
};

export default function Navbar({ onUploadClick, hasData, loading }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">₹</span>
          </div>
          <span className="text-sm font-semibold tracking-tight ">
            where did my money go<span className="text-primary">?</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-primary">Dashboard</span>
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            Insights
            <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
              soon
            </span>          </span>
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            History
            <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
              soon
            </span>            </span>
        </div>
        {loading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm text-muted-foreground">Analyzing...</span>
          </div>
        ) : (
          <Button
            onClick={onUploadClick}
            disabled={loading}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            {loading ? "Analyzing..." : hasData ? "Upload New" : "Upload Statement"}
          </Button>
        )}
      </div>
    </nav>
  );
}
