"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeButton from "./ThemeButton";
import { Cancel, Menu } from "iconoir-react";

export default function Header() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const handleToggleHamburger = () => setToggleHamburger(!toggleHamburger);

  return (
    <header className="w-full sticky px-2">
      <div className="max-w-4xl mx-auto py-3 flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl">mude-dev</h1>
        </Link>

        <div className="flex gap-5">
          <ThemeButton />

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
            className="z-50 space-y-1 md:hidden"
            onClick={handleToggleHamburger}
          >
            {toggleHamburger ? <Cancel /> : <Menu />}
          </button>
        </div>
      </div>

      {/* SP-Menu */}
      <nav className="md:hidden">
        <ul className={toggleHamburger ? "visible px-1 bg-gray-800" : "hidden"}>
          <li>
            <Link
              href="/"
              className="block align-middle py-3"
              onClick={handleToggleHamburger}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="block align-middle py-3"
              onClick={handleToggleHamburger}
            >
              Game
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
