import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="p-4 bg-green-500 text-black-100 flex justify-between">
      <h1 className="text-3xl font-extrabold">
        <Link href="/">
          <a>Cookie Stand Admin</a>
        </Link>
      </h1>
      <Link href="/overview">
        <a>Overview</a>
      </Link>
    </header>
  );
}

export default Header;
