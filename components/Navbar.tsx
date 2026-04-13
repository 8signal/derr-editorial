"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Praise", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Let\u2019s Talk", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="/" className="nav-logo">
        Amber Derr Editorial
      </a>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {links.slice(0, -1).map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta btn-primary">
        <span>Let&rsquo;s Talk</span>
      </a>

      <button
        className={`nav-toggle${menuOpen ? " open" : ""}`}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
