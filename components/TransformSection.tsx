import ScrollReveal from "./ScrollReveal";

const before = [
  {
    label: "Chaotic Drafts",
    body: "Messy AI drafts, a chaotic brain-dump of a manuscript, and memos that cause internal confusion.",
  },
  {
    label: "Lingering Doubt",
    body: "Low-grade anxiety about sending or publishing something that exposes the gap between who you are and how you write.",
  },
  {
    label: "Trapped Brilliance",
    body: "Great ideas trapped in your head or diluted by AI into something flat and forgettable.",
  },
];

const after = [
  {
    label: "Ready to Send",
    body: "A publication-ready manuscript and crystal-clear communications that drive immediate action.",
  },
  {
    label: "Quiet Confidence",
    body: "Quiet confidence \u2014 the kind that comes from knowing the work represents you well. Done means done.",
  },
  {
    label: "Doors Opening",
    body: "Writing as sharp as your ideas. A book that opens conversations you never could have started cold.",
  },
];

export default function TransformSection() {
  return (
    <section className="section" id="results">
      <div className="container">
        <ScrollReveal>
          <p className="section-eyebrow">The Transformation</p>
          <h2 className="section-headline">
            From second-guessing <em>to sending with confidence.</em>
          </h2>
        </ScrollReveal>

        <div className="transform-grid">
          <div className="transform-col">
            <p className="transform-col__label transform-col__label--before">
              Before
            </p>
            {before.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="transform-card transform-card--before">
                  <strong className="transform-card__heading">
                    {item.label}
                  </strong>
                  <p>{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="transform-col">
            <p className="transform-col__label transform-col__label--after">
              After
            </p>
            {after.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="transform-card transform-card--after">
                  <strong className="transform-card__heading">
                    {item.label}
                  </strong>
                  <p>{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
