"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Brands", dropdown: "brands" },
  { label: "Trending", href: "/explore?sort=trending" },
  { label: "Men", href: "/explore?cat=men" },
  { label: "Women", href: "/explore?cat=women" },
  { label: "Sneakers", href: "/explore?cat=sneakers" },
  { label: "Apparel", href: "/explore?cat=apparel" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  // Giả lập trạng thái đăng nhập. Trong ứng dụng thực tế, bạn sẽ lấy trạng thái này
  // từ context, Redux, hoặc một hook xác thực (ví dụ: useUser()).
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="w-full border-b border-gray-800 bg-black text-white relative">
      {/* top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          Weepe
        </Link>

        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for brand, color, etc."
            className="w-full rounded-md px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {isLoggedIn ? (
          // Giao diện khi đã đăng nhập
          <div className="flex items-center space-x-6">
            <Link
              href="/sell"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Sell
            </Link>
            <Link href="/orders" className="text-sm hover:text-green-400">
              My Orders
            </Link>
            <button className="relative hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button>
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop"
                alt="User avatar"
              />
            </button>
          </div>
        ) : (
          // Giao diện khi chưa đăng nhập
          <div className="space-x-4">
            <Link
              href="/sign-in"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* nav */}
      <nav className="mx-auto flex max-w-7xl gap-6 px-6 py-2 text-sm relative">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setActiveMenu(item.dropdown || null)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href || "#"}
              className="hover:text-green-400 transition-colors"
            >
              {item.label}
            </Link>

            {/* vùng đệm chống mất hover */}
            {item.dropdown && (
              <div className="absolute left-0 top-full h-3 w-full bg-transparent" />
            )}

            {/* dropdown */}
            {item.dropdown === "brands" && activeMenu === "brands" && (
              <div
                className="absolute left-0 top-[calc(100%+0.5rem)] w-[900px] bg-gray-900 text-white shadow-lg p-8 grid grid-cols-4 gap-6 z-50 rounded-md transition-all duration-200"
                onMouseEnter={() => setActiveMenu("brands")} // giữ mở khi hover menu
              >
                {/* cột 1 */}
                <div>
                  <h3 className="font-bold mb-2 text-gray-300">Top 40 Lists</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="#">Top 40 Sneakers</Link></li>
                    <li><Link href="#">Top 40 Shoes</Link></li>
                    <li><Link href="#">Top 40 Collectibles</Link></li>
                    <li><Link href="#">Top 40 Apparel</Link></li>
                    <li><Link href="#">Top 40 Accessories</Link></li>
                  </ul>
                </div>

                {/* cột 2 */}
                <div>
                  <h3 className="font-bold mb-2 text-gray-300">Trending Brands</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="#">Nike</Link></li>
                    <li><Link href="#">Jordan</Link></li>
                    <li><Link href="#">adidas</Link></li>
                    <li><Link href="#">ASICS</Link></li>
                    <li><Link href="#">New Balance</Link></li>
                  </ul>
                </div>

                {/* cột 3 */}
                <div>
                  <h3 className="font-bold mb-2 text-gray-300">More Trending</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="#">Pop Mart</Link></li>
                    <li><Link href="#">Fear of God</Link></li>
                    <li><Link href="#">UGG</Link></li>
                    <li><Link href="#">Crocs</Link></li>
                    <li><Link href="#">Pokemon</Link></li>
                  </ul>
                </div>

                {/* cột 4 */}
                <div>
                  <h3 className="font-bold mb-2 text-gray-300">Brands to Watch</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="#">Maison Mihara Yasuhiro</Link></li>
                    <li><Link href="#">Louis Vuitton</Link></li>
                    <li><Link href="#">Gucci</Link></li>
                    <li><Link href="#">BAPE</Link></li>
                    <li><Link href="#">Canon</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
