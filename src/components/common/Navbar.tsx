"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Trainers", href: "/Trainers" },
  { name: "Gallery", href: "/Gallery" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Corner: Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-red-600 text-white group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase">
              ONE LIFE <span className="text-red-600">FITNESS</span>
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    isActive
                      ? "text-red-600 font-semibold"
                      : "text-neutral-600 dark:text-neutral-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Corner: Theme Toggle & Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/Contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-red-600 hover:bg-red-700 text-white transition-all shadow-md hover:shadow-red-600/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-red-600 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/Contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}