"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "We used Amber on several projects to make sure we got a human touch on copy we needed to connect with visitors. Fantastic communication and turn around times. Will continue to use her as much as we can!",
    author: "David Gibson",
    role: "Marketing & Sales Alignment | Smarter Systems",
  },
  {
    quote:
      "Amber is an exceptional copy editor and an absolute joy to work with. She has a sharp editorial eye, catches details others miss, and always meets or beats deadlines. She collaborates beautifully with writers and leadership.",
    author: "Ryan Togliatti",
    role: "Digital Alchemist | Transforming Brands Through Digital Marketing",
  },
  {
    quote:
      "Amber's not only an excellent editor but a trusted collaborator. The combination of her grammatical prowess and editing experience keeps me honest. She's helped me become a better writer, and I couldn't recommend her enough.",
    author: "Grant Bosch",
    role: "Copywriting & SEO Strategist",
  },
  {
    quote:
      "Amber made editing my book easy and painless. With her skillful eye, she reviewed, edited, and questioned certain parts of my book bringing insight, understanding, and clarity. I highly recommend The Edit Derr.",
    author: "Dr. Cicone Prince",
    role: "TEDx Speaker | International Impact Book Awards Winner",
  },
  {
    quote:
      "One of the things an author is concerned about is maintaining authenticity of voice. Amber leaves me alone with the way I want to say things. She ensures that the voice I've been given is not weakened or diminished.",
    author: "Donna Renee Larsen",
    role: "Executive Assistant · CEO · Author",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((c) => (c + 1) % TESTIMONIALS.length);
      } else {
        setCurrent(
          (c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        );
      }
    }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-inner">
        <ScrollReveal style={{ justifyContent: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>
            What They Say
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="section-heading"
            style={{
              textAlign: "center",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Trusted by executives, authors,
            <br />
            and <em>business leaders.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="testimonial-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div className="testimonial-slide" key={t.author}>
                  <div className="testimonial-content">
                    <p className="testimonial-quote">{t.quote}</p>
                    <p className="testimonial-author">{t.author}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-controls">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === current ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
