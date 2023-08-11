"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <header className="w-full sticky px-2">
      <div className="max-w-4xl mx-auto py-3 flex justify-between">
        <h1 className="font-bold text-2xl">mude-dev</h1>
        <nav className="max-md:hidden">
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="align-middle">
                Home
              </Link>
            </li>
            <li>
              <Link href="/game" className=" align-middle">
                Game
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setToggleHamburger(!toggleHamburger)}
        >
          {toggleHamburger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
