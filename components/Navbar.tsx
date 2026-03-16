"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#problem", label: "The Problem" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Praise" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link href="/" className="nav-logo">
        The Edit <span>Derr</span>
      </Link>

      <button
        className={`nav-toggle ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            <span>Work With Me</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
