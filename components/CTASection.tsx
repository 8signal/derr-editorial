import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-headline cta-headline">
            Your book deserves someone who{" "}
            <em>actually cares</em> how it lands.
          </h2>
          <p className="cta-body">
            Start with a no-commitment sample edit. Send me one page or one
            chapter and I&rsquo;ll show you what I do &mdash; annotated with my
            thinking, not just tracked changes. No sales call required.
          </p>
          <a
            href="mailto:amber@amberderreditorial.com"
            className="btn btn--primary btn--large"
          >
            Request Your Sample Edit
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
