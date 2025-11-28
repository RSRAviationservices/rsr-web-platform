import { FileSearch, RefreshCw } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function EmptyState({ error = false }: { error?: boolean }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center border rounded-2xl border-dashed border-zinc-200 bg-zinc-50/50">
            <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                {error ? (
                    <RefreshCw className="h-10 w-10 text-red-700" />
                ) : (
                    <FileSearch className="h-10 w-10 text-red-700" />
                )}
            </div>

            <h3 className="text-2xl font-bold text-zinc-900">
                {error ? "System Maintenance" : "Insights Coming Soon"}
            </h3>

            <p className="mt-2 max-w-md text-zinc-600">
                {error
                    ? "We are having trouble loading the articles. Please try again later."
                    : "Our editorial team is curating the latest aerospace trends. While you wait, explore our certified inventory."}
            </p>

            <div className="mt-8 flex gap-4">
                {!error && (
                    <Button asChild variant="default" className="bg-red-900 hover:bg-red-800">
                        <Link href="/products">Browse Inventory</Link>
                    </Button>
                )}
                <Button asChild variant="outline">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    );
}