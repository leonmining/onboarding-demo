"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const branches = [
  { name: "Tandarts", href: "/branche/tandarts" },
  { name: "Fysiotherapeut", href: "/branche/fysiotherapeut" },
  { name: "Huisarts", href: "/branche/huisarts" },
  { name: "Psycholoog", href: "/branche/psycholoog" },
  { name: "Orthodontist", href: "/branche/orthodontist" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brancheOpen, setBrancheOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L3 7v6c0 5.25 3.81 10.13 9 11.25C17.19 23.13 21 18.25 21 13V7l-9-5z" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-[var(--color-primary)]">Medi</span>
              <span className="text-xl font-bold text-[var(--color-secondary)]">Collect</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              Home
            </Link>
            <Link href="/over" className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              Over ons
            </Link>

            {/* Branches dropdown */}
            <div className="relative" onMouseEnter={() => setBrancheOpen(true)} onMouseLeave={() => setBrancheOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
                Branches <ChevronDown className="w-4 h-4" />
              </button>
              {brancheOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-[var(--color-border)] py-2">
                  {branches.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className="block px-4 py-2.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/werkwijze" className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              Werkwijze
            </Link>
            <Link href="/faq" className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Contact opnemen
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)]">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-[var(--color-accent)]" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/over" className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-[var(--color-accent)]" onClick={() => setMobileOpen(false)}>
              Over ons
            </Link>
            <div className="px-3 py-2 text-xs font-semibold text-[var(--color-text-light)] uppercase tracking-wider">
              Branches
            </div>
            {branches.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="block pl-6 pr-3 py-2.5 text-sm font-medium rounded-lg hover:bg-[var(--color-accent)]"
                onClick={() => setMobileOpen(false)}
              >
                {b.name}
              </Link>
            ))}
            <Link href="/werkwijze" className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-[var(--color-accent)]" onClick={() => setMobileOpen(false)}>
              Werkwijze
            </Link>
            <Link href="/faq" className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-[var(--color-accent)]" onClick={() => setMobileOpen(false)}>
              FAQ
            </Link>
            <Link href="/blog" className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-[var(--color-accent)]" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2.5 mt-2 text-sm font-semibold text-center bg-[var(--color-primary)] text-white rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Contact opnemen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
