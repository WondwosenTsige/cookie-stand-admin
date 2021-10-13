import Link from "next/link";
import { useAuth } from "../contexts/auth";

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky w-full h-auto px-8 bg-green-500 sm:px-0">
      <div className="container flex justify-between py-5 mx-auto">
        <label className="text-3xl font-light text-green-800">
          <Link href="/">
            <a className="transition hover:text-blue-600 font-bold">
              CookieStand<span className="font-bold"> Admin</span>
            </a>
          </Link>
        </label>
        <ul className="flex items-center text-green-800">
          <li className="mr-6 font-semibold uppercase">
            <Link href="/overview">
              <a className="transition hover:text-blue-600">Overview</a>
            </Link>
          </li>
          {user && (
            <li className="mr-6 font-semibold text-green-800 uppercase transition border border-green-800 rounded-md hover:text-green-200 hover:bg-green-600">
              <a className="block px-4 py-1" onClick={logout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
