"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Praise", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Work With Me", href: "#contact" },
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
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          Amber Derr Editorial
        </a>

        <nav className="navbar-links" aria-label="Primary navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary navbar-cta">
          Work With Me
        </a>

        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar-mobile" aria-label="Mobile navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
