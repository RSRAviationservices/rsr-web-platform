import { Badge } from "@/app/components/ui/badge";
import { QuoteStatus } from "@/app/api/quote/types";

export const StatusBadge = ({ status }: { status: QuoteStatus }) => {
  const statusStyles: Record<QuoteStatus, string> = {
    [QuoteStatus.PENDING]: "bg-amber-100 text-amber-800 border-amber-200",
    [QuoteStatus.APPROVED]: "bg-blue-100 text-blue-800 border-blue-200",
    [QuoteStatus.FULFILLED]: "bg-green-100 text-green-800 border-green-200",
    [QuoteStatus.REJECTED]: "bg-red-100 text-red-800 border-red-200",
  };
  return (
    <Badge
      variant="outline"
      className={`capitalize ${statusStyles[status] || "border-zinc-200"}`}
    >
      {status}
    </Badge>
  );
};
