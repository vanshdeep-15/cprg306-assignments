import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link href="/week-2" className="text-blue-600 hover:text-blue-800 underline">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-600 hover:text-blue-800 underline">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-4" className="text-blue-600 hover:text-blue-800 underline">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-blue-600 hover:text-blue-800 underline">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-6" className="text-blue-600 hover:text-blue-800 underline">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-7" className="text-blue-600 hover:text-blue-800 underline">
            Week 7 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-8" className="text-blue-600 hover:text-blue-800 underline">
            Week 8 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-9" className="text-blue-600 hover:text-blue-800 underline">
            Week 9 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-10" className="text-blue-600 hover:text-blue-800 underline">
            Week 10 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}