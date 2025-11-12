import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

export default function AccountSettingsSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Profile Information Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          <Skeleton className="h-10 w-24" />
        </CardFooter>
      </Card>

      {/* Login & Security Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-2/3 mt-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          <Skeleton className="h-10 w-32" />
        </CardFooter>
      </Card>
    </div>
  );
}
