import ScrollReveal from "./ScrollReveal";

const TRAITS = [
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
            <div className="about-image-placeholder">
              <span>Photo of Amber</span>
            </div>
            <div className="about-accent-line" />
          </ScrollReveal>

          <ScrollReveal className="about-text" delay="0.1s">
            <p className="section-label">Meet Amber</p>
            <h2>
              Precision is a form of <em>respect.</em>
            </h2>
            <p>
              I believe that choosing the right word, the right structure, and
              the right rhythm is an act of care — for the reader and for the
              leader whose name appears on the work.
            </p>
            <p>
              In a world of commoditized content, executives who communicate
              with genuine distinctiveness hold a competitive advantage no one
              can easily replicate. My job is to protect and amplify what&apos;s
              already strong — never to impose my own style on someone
              else&apos;s voice.
            </p>
            <p>
              I specialize in business nonfiction, executive communications, and
              the kind of editorial partnership that gets better the longer we
              work together. The best editorial relationships are invisible: the
              editor&apos;s role is to make the client look better — never to be
              seen in the work itself.
            </p>
            <div className="about-traits">
              {TRAITS.map((trait) => (
                <span key={trait} className="trait-tag">
                  {trait}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
