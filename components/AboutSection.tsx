import ScrollReveal from "./ScrollReveal";

const traits = [
  "Warm but Exacting",
  "Detail-Obsessed",
  "Voice Preservation",
  "EOS Fluent",
  "AI Detection",
  "Nonfiction Specialist",
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-inner">
        <div className="about-layout">
          <ScrollReveal className="about-image-area">
            <div className="about-video-wrapper is-vertical">
              <iframe
                src="https://www.youtube.com/embed/iZZjqVfT8gY?rel=0&modestbranding=1"
                title="Meet Amber Derr — Amber Derr Editorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="about-accent-line" />
          </ScrollReveal>

          <ScrollReveal className="about-text" delay="0.1s">
            <p className="section-label">Meet Amber</p>
            <h2>
              I got into this because I genuinely{" "}
              <em>love words.</em>
              <br />
              I stayed because I love what they do for people.
            </h2>
            <p>
              I&rsquo;ve spent my career in the margins &mdash; literally.
              Editing manuscripts, marking up decks, leaving notes that I hope
              land like a helpful colleague rather than a red pen. What keeps me
              here isn&rsquo;t the grammar. It&rsquo;s the moment a client reads
              something back and says, &ldquo;Yes &mdash; that&rsquo;s exactly
              what I meant to say.&rdquo;
            </p>
            <p>That&rsquo;s the thing I&rsquo;m chasing on every project.</p>
            <p>
              I believe that choosing the right word, the right structure, and
              the right rhythm is an act of care &mdash; for the reader and for
              the leader whose name is on the work. In a world where AI can
              produce &ldquo;technically correct&rdquo; faster than you can
              blink, the writing that actually moves people is the writing that
              sounds unmistakably human. My job is to make sure yours does.
            </p>
            <p>
              I specialize in business nonfiction, executive communications, and
              the kind of editorial relationship that gets better the longer we
              work together. I&rsquo;m serious about the craft. I&rsquo;m not
              serious about myself. And I genuinely look forward to the projects
              that land in my inbox.
            </p>
            <p>
              If you&rsquo;re working on something that matters to you &mdash; a
              book, a keynote, a communication that has to land right &mdash;
              I&rsquo;d love to hear about it.
            </p>
            <div className="about-traits">
              {traits.map((t) => (
                <span key={t} className="trait-tag">
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
