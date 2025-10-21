import Link from 'next/link';

// This is the main landing page for my assignment repository.
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-900 text-white">
      {/* My personal information and course title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">CPRG 306: Web Development 2</h1>
        <p className="text-lg text-gray-300">Vanshdeep Singh</p>
        <Link href="https://github.com/vanshdeep-15" className="text-cyan-400 hover:underline">
          My GitHub Repository
        </Link>
      </div>

      {/* A new section for the list of my assignments */}
      <div className="mt-12 text-center">
         <h2 className="text-2xl font-semibold mb-4">My Assignments</h2>
         <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="/week-2" className="text-cyan-400 hover:underline">
                Week 2 Assignment
              </Link>
            </li>
            {/* This is the new link for Week 3 */}
            <li>
              <Link href="/week-3" className="text-cyan-400 hover:underline">
                Week 3 Assignment
              </Link>
            </li>
          </ul>
      </div>
    </main>
  );
}

