import { Card, CardContent } from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

export default function QuoteCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-4 flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-64" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}
