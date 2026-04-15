"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const interests = [
    "Write a book",
    "Finish a book",
    "Business communications",
  ];

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(value)
        ? prev.interest.filter((v) => v !== value)
        : [...prev.interest, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Something went wrong. Please try again or email amber@theeditderr.com directly."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="cta-section" id="contact">
      <ScrollReveal>
        <h2>
          Let&rsquo;s <em>talk.</em>
        </h2>
      </ScrollReveal>

      {submitted ? (
        <ScrollReveal delay="0.1s">
          <div className="cta-confirmation">
            <p className="cta-confirmation-heading">Got it. I&rsquo;ll be in touch soon.</p>
            <p className="cta-confirmation-sub">
              In the meantime, feel free to start pulling together the piece
              you&rsquo;d like me to look at.
            </p>
          </div>
        </ScrollReveal>
      ) : (
        <>
          <ScrollReveal delay="0.1s">
            <p>
              Tell me a little about what you&rsquo;re working on and
              I&rsquo;ll follow up to find a time that works.
            </p>
          </ScrollReveal>

          <ScrollReveal delay="0.2s">
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="cta-form-fields">
                <div className="cta-field">
                  <label htmlFor="cta-name">Name</label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                  />
                </div>

                <div className="cta-field">
                  <label htmlFor="cta-email">Email</label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                  />
                </div>

                <div className="cta-field">
                  <label htmlFor="cta-phone">Phone <span className="cta-optional">(optional)</span></label>
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                  />
                </div>
              </div>

              <fieldset className="cta-checkboxes">
                <legend>What are you looking for?</legend>
                <div className="cta-checkbox-group">
                  {interests.map((item) => (
                    <label key={item} className="cta-checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(item)}
                        onChange={() => handleCheckbox(item)}
                      />
                      <span className="cta-checkbox-custom" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="btn-primary cta-submit"
                disabled={submitting}
              >
                <span>{submitting ? "Sending\u2026" : "Let\u2019s Talk"}</span>
              </button>

              {error && (
                <p className="cta-error" role="alert">
                  {error}
                </p>
              )}

              <p className="cta-trust-line">
                Trusted by TEDx speakers, published authors, and executive teams.
              </p>
            </form>
          </ScrollReveal>
        </>
      )}
    </section>
  );
}
