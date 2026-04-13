"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "We used Amber on several projects to make sure we got a human touch on copy we needed to connect with visitors. Fantastic communication and turn around times. Will continue to use her as much as we can!",
    name: "David Gibson",
    role: "Marketing & Sales Alignment | Smarter Systems",
  },
  {
    quote:
      "Amber is an exceptional copy editor and an absolute joy to work with. She has a sharp editorial eye, catches details others miss, and always meets or beats deadlines. She collaborates beautifully with writers and leadership.",
    name: "Ryan Togliatti",
    role: "Digital Alchemist | Transforming Brands Through Digital Marketing",
  },
  {
    quote:
      "Amber\u2019s not only an excellent editor but a trusted collaborator. The combination of her grammatical prowess and editing experience keeps me honest. She\u2019s helped me become a better writer, and I couldn\u2019t recommend her enough.",
    name: "Grant Bosch",
    role: "Copywriting & SEO Strategist",
  },
  {
    quote:
      "Amber made editing my book easy and painless. With her skillful eye, she reviewed, edited, and questioned certain parts of my book bringing insight, understanding, and clarity. I highly recommend Amber Derr Editorial.",
    name: "Dr. Cicone Prince",
    role: "TEDx Speaker | International Impact Book Awards Winner",
  },
  {
    quote:
      "One of the things an author is concerned about is maintaining authenticity of voice. Amber leaves me alone with the way I want to say things. She ensures that the voice I\u2019ve been given is not weakened or diminished.",
    name: "Donna Renee Larsen",
    role: "Executive Assistant \u00b7 CEO \u00b7 Author",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartRef = useRef(0);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((c) => (c + 1) % testimonials.length);
      } else {
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
      }
      resetTimer();
    }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label" style={{ textAlign: "center" }}>
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
              {testimonials.map((t) => (
                <div className="testimonial-slide" key={t.name}>
                  <div className="testimonial-content">
                    <p className="testimonial-quote">{t.quote}</p>
                    <p className="testimonial-author">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-controls">
              {testimonials.map((_, i) => (
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
