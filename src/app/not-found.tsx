import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col overflow-hidden items-center justify-start min-h-[100dvh]  py-10 px-4 md:px-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-7xl font-bold tracking-tighter">Coming Soon!</h1>
        <div className="text-gray-500 dark:text-gray-400 text-lg">
          Feature verification pending. Please check back later.
        </div>
      </div>
      <Link
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="/dashboard"
      >
        Go back home
      </Link>
    </div>
  )
}