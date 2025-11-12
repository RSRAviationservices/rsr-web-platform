import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export default function CareerNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-900">Career Not Found</h1>
        <p className="mt-4 text-lg text-zinc-600">
          The career position you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/careers">
          <Button size="lg" className="mt-8">
            View All Careers
          </Button>
        </Link>
      </div>
    </div>
  );
}
