type AvailabilityStatus = "in-stock" | "lead-time" | "limited" | "quote-only";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
}

export function AvailabilityBadge({ status }: AvailabilityBadgeProps) {
  const statusMap: Record<AvailabilityStatus, string> = {
    "in-stock": "bg-green-100 text-green-800",
    "lead-time": "bg-amber-100 text-amber-800",
    limited: "bg-yellow-100 text-yellow-800",
    "quote-only": "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize ${
        statusMap[status] || "bg-zinc-100 text-zinc-800"
      }`}
    >
      {status.replace("-", " ")}
    </span>
  );
}
