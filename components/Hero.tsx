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
    <section className="hero">
      <div className="hero-orb hero-orb--1" ref={orb1} />
      <div className="hero-orb hero-orb--2" ref={orb2} />

      <div className="hero-inner">
        <p className="hero-eyebrow">Your Editorial Partner</p>

        <h1 className="hero-headline">
          Your Words Should Sound Like
          <br />
          the <em>Sharpest Version</em> of You.
        </h1>

        <p className="hero-sub">
          Executive editing for C-suite leaders who can&rsquo;t afford to sound
          generic. AI catches the errors. I catch what AI creates&mdash;and I
          actually love doing it.
        </p>

        <div className="hero-ctas">
          <a href="#contact" className="btn btn--primary">
            Request a Sample Edit
          </a>
          <a href="#services" className="btn btn--ghost">
            How It Works
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
