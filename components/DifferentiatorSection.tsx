import ScrollReveal from "./ScrollReveal";

const differentiators = [
  {
    num: "01",
    title: "Human AI-Detection Instinct",
    body: "I catch the subconscious tells that mark AI-assisted content \u2014 the flat rhythm, the hedged phrasing, the sentence that\u2019s technically correct but somehow too even. Before your audience notices, I already have.",
  },
  {
    num: "02",
    title: "Voice Preservation, Not Voice Replacement",
    body: "Most editors fix what\u2019s broken. My job is to protect what\u2019s strong \u2014 your rhythm, your distinctions, the way you phrase an idea that no one else would. Polished but never sanitized. Better, but still unmistakably you.",
  },
  {
    num: "03",
    title: "EOS & Operator Fluency",
    body: "I understand how business leaders communicate, what a strong executive voice sounds like in a boardroom versus a keynote, and why the writing that works in your world is different from everything else out there. I\u2019ve learned this world. I like it here.",
  },
  {
    num: "04",
    title: "A Partnership, Not a Transaction",
    body: "The second year of working together is worth more than the first \u2014 because I\u2019ve learned your voice, your standards, and how you think. This isn\u2019t a cleanup service. It\u2019s the kind of working relationship that gets better every time.",
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
            Where other editors fix what&rsquo;s wrong,
            <br />
            <em>I protect what&rsquo;s right.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            Your authority, your cadence, the distinct way you think on the
            page. There&rsquo;s a difference between an editor who improves your
            writing and one who makes it more you.
          </p>
        </ScrollReveal>

        <div className="diff-grid">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.num} className="diff-item" delay={`${(i * 0.07 + 0.05).toFixed(2)}s`}>
              <span className="diff-number">{d.num}</span>
              <div>
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
