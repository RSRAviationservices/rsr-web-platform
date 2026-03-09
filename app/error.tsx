'use client'

import { useEffect } from 'react'
import { Button } from './components/ui/button'
import { AlertCircle, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled Server Error:', error)
  }, [error])

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-red-50 p-6">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-md">
          {error.message || "An unexpected error occurred while loading this page. Please try refreshing or contact support if the problem persists."}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()} size="lg" className="gap-2">
            <RefreshCcw className="h-4 w-4" />
            Try again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
