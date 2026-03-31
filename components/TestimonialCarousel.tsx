"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "We used Amber on several projects to make sure we got a human touch on copy we needed to connect with visitors. Fantastic communication and turn around times. Will continue to use her as much as we can!",
    name: "David Gibson",
    title: "Marketing & Sales Alignment | Smarter Systems",
  },
  {
    quote:
      "Amber is an exceptional copy editor and an absolute joy to work with. She has a sharp editorial eye, catches details others miss, and always meets or beats deadlines. She collaborates beautifully with writers and leadership.",
    name: "Ryan Togliatti",
    title: "Digital Alchemist | Transforming Brands Through Digital Marketing",
  },
  {
    quote:
      "Amber\u2019s not only an excellent editor but a trusted collaborator. The combination of her grammatical prowess and editing experience keeps me honest. She\u2019s helped me become a better writer, and I couldn\u2019t recommend her enough.",
    name: "Grant Bosch",
    title: "Copywriting & SEO Strategist",
  },
  {
    quote:
      "Amber made editing my book easy and painless. With her skillful eye, she reviewed, edited, and questioned certain parts of my book bringing insight, understanding, and clarity. I highly recommend Amber Derr Editorial.",
    name: "Dr. Cicone Prince",
    title: "TEDx Speaker | International Impact Book Awards Winner",
  },
  {
    quote:
      "One of the things an author is concerned about is maintaining authenticity of voice. Amber leaves me alone with the way I want to say things. She ensures that the voice I\u2019ve been given is not weakened or diminished.",
    name: "Donna Renee Larsen",
    title: "Executive Assistant \u00b7 CEO \u00b7 Author",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <p className="section-eyebrow">What They Say</p>
        <h2 className="section-headline">
          Trusted by executives, authors, and{" "}
          <em>business leaders.</em>
        </h2>

        <div className="carousel">
          <div className="carousel-quote" key={active}>
            <blockquote className="carousel-text">{t.quote}</blockquote>
            <div className="carousel-attr">
              <strong className="carousel-name">{t.name}</strong>
              <span className="carousel-title">{t.title}</span>
            </div>
          </div>

          <div className="carousel-dots" role="tablist" aria-label="Testimonials">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
                className={`carousel-dot${i === active ? " carousel-dot--active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
