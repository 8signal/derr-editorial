import ScrollReveal from "./ScrollReveal";

const DIFFS = [
  {
    num: "01",
    title: "Human AI-Detection Instinct",
    text: "I catch the subconscious tells that mark AI-assisted content — before your audience does. As AI writing becomes the default, truly human communication becomes a luxury.",
    delay: "0.05s",
  },
  {
    num: "02",
    title: "Executive Voice Preservation",
    text: "Most editors fix what's broken. I protect what's strong — your rhythm, your distinctions, the way you phrase an idea that no one else would. Polished but never sanitized.",
    delay: "0.12s",
  },
  {
    num: "03",
    title: "EOS & Operator Fluency",
    text: "I understand how business leaders communicate, what a strong executive voice sounds like, and why certain choices land differently in a boardroom than a classroom.",
    delay: "0.19s",
  },
  {
    num: "04",
    title: "A Partnership, Not a Transaction",
    text: "The second year of working together is worth more than the first. I learn your voice, your standards, and your world — and I get better at serving you over time.",
    delay: "0.26s",
  },
];

export default function DifferentiatorSection() {
  return (
    <section className="diff-section" id="results">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">The Difference</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-heading">
            Where other editors fix what&apos;s wrong,
            <br />
            <em>I protect what&apos;s right.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            Your authority, your cadence, and the distinct way you think on the
            page. There&apos;s a difference between an editor who improves your
            writing and one who makes it more you.
          </p>
        </ScrollReveal>

        <div className="diff-grid">
          {DIFFS.map((d) => (
            <ScrollReveal key={d.num} className="diff-item" delay={d.delay}>
              <span className="diff-number">{d.num}</span>
              <div>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
