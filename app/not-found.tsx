import Link from 'next/link'
import { Button } from './components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-zinc-100 p-6">
          <FileQuestion className="h-12 w-12 text-zinc-400" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/">Go Back Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
