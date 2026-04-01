import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <ScrollReveal>
        <h2>
          Your book deserves someone who
          <br />
          <em>actually cares</em> how it lands.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay="0.1s">
        <p>
          Start with a no-commitment sample edit. Send me one page or one
          chapter, and I&rsquo;ll show you what I do &mdash; annotated with my
          thinking, not just tracked changes. No sales call required.
        </p>
      </ScrollReveal>
      <ScrollReveal delay="0.2s">
        <a
          href="mailto:amber@amberderreditorial.com"
          className="btn-primary"
        >
          <span>Request Your Sample Edit</span>
        </a>
      </ScrollReveal>
    </section>
  );
}
