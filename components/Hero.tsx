"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (orb1.current) orb1.current.style.transform = `translateY(${y * 0.15}px)`;
      if (orb2.current) orb2.current.style.transform = `translateY(${y * -0.1}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-orb orb-1" ref={orb1} />
      <div className="hero-bg-orb orb-2" ref={orb2} />

      <div className="hero-content">
        <p className="hero-eyebrow">Your Editorial Partner</p>
        <p className="hero-tagline">&ldquo;We used em dashes before AI was a thing&rdquo;&nbsp;&nbsp;<span className="hero-tagline-aside">(IFYKYK)</span></p>

        <h1>
          <span className="hero-line">Your Words Should Sound Like</span>
          <span className="hero-line">
            the <em>Sharpest Version</em> of You.
          </span>
        </h1>

        <p className="hero-sub">
          Executive editing for C-suite leaders who can&rsquo;t afford to sound
          generic. AI catches the errors. I catch what AI creates&mdash;and I
          actually love doing it.
        </p>

        <div className="hero-cta-group">
          <a href="#contact" className="btn-primary">
            <span>Let&rsquo;s Talk</span>
          </a>
          <a href="#services" className="btn-secondary">
            How It Works
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
