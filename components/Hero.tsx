"use client";

import { useEffect, useRef, useCallback } from "react";

export default function Hero() {
  const orbsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        orbsRef.current.forEach((orb, i) => {
          if (!orb) return;
          const speed = i === 0 ? 0.15 : 0.08;
          orb.style.transform = `translateY(${y * speed}px)`;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div
        className="hero-bg-orb orb-1"
        ref={(el) => { if (el) orbsRef.current[0] = el; }}
      />
      <div
        className="hero-bg-orb orb-2"
        ref={(el) => { if (el) orbsRef.current[1] = el; }}
      />

      <div className="hero-content">
        <p className="hero-eyebrow">Executive Editorial Partner</p>
        <h1>
          <span className="hero-line">Your Words Should Sound Like</span>
          <span className="hero-line">
            the <em>Sharpest Version</em> of You.
          </span>
        </h1>
        <p className="hero-sub">
          Executive editing for C-suite leaders who can&apos;t afford to sound
          generic. AI catches the errors. I catch what AI creates.
        </p>
        <div className="hero-cta-group">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => scrollTo(e, "#contact")}
          >
            <span>Request a Sample Edit</span>
          </a>
          <a
            href="#services"
            className="btn-secondary"
            onClick={(e) => scrollTo(e, "#services")}
          >
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
