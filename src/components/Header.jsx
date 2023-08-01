import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky px-2">
      <div className="max-w-4xl mx-auto py-3 flex justify-between">
        <h1 className="font-bold text-2xl">mude-dev</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/"
                className="text-cyan-200 hover:text-cyan-500 align-middle"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/game"
                className="text-cyan-200 hover:text-cyan-500 align-middle"
              >
                Game
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
