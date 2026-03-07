'use client'

import Link from 'next/link'

export default function ArchonEngineeringComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">
        Archon Engineering Coming Soon
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        We're building something structural for you.
      </p>

      <div className="flex gap-4">
        <button className="px-5 py-2 bg-black text-white rounded-md">
          Notify Me
        </button>

        <Link href="/" className="px-5 py-2 border rounded-md">
          Back to Home
        </Link>
      </div>
    </div>
  )
}