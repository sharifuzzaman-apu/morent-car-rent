"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/cars?query=${search}`);
    }
  };

  return (
    <header className="bg-white shadow-l">
      <div className=" bg-white  container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MORENT
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-1 max-w-md mx-6"
        >
          <input
            type="text"
            placeholder="Search cars or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          <Link href="/cars" className="text-sm text-gray-600 hover:text-black">
            Cars
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-black">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
