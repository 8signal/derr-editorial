import ScrollReveal from "./ScrollReveal";

const before = [
  { label: "Chaotic Drafts", body: "Messy AI drafts, a chaotic brain-dump of a manuscript, and memos that cause internal confusion." },
  { label: "Lingering Doubt", body: "Low-grade anxiety about sending or publishing something that exposes the gap between who you are and how you write." },
  { label: "Trapped Brilliance", body: "Great ideas trapped in your head or diluted by AI into something flat and forgettable." },
];

const after = [
  { label: "Ready to Send", body: "A publication-ready manuscript and crystal-clear communications that drive immediate action." },
  { label: "Quiet Confidence", body: "Quiet confidence \u2014 the kind that comes from knowing the work represents you well. Done means done." },
  { label: "Doors Opening", body: "Writing as sharp as your ideas. A book that opens conversations you never could have started cold." },
];

export default function TransformSection() {
  return (
    <section className="transform-section">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">The Transformation</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-heading">
            From second-guessing <em>to sending with confidence.</em>
          </h2>
        </ScrollReveal>

<<<<<<< HEAD
        <ScrollReveal>
          <div className="transform-grid">
            <div className="transform-col before">
              <h4>Before</h4>
              {before.map((item, i) => (
                <div key={item.label} className="transform-item">
                  <div className="label">{item.label}</div>
=======
        <div className="transform-grid">
          <div className="transform-col">
            <p className="transform-col__label transform-col__label--before">
              Before
            </p>
            {before.map((item, i) => (
              <ScrollReveal key={i} delay={`${(i * 0.08).toFixed(2)}s`}>
                <div className="transform-card transform-card--before">
                  <strong className="transform-card__heading">
                    {item.label}
                  </strong>
>>>>>>> c9ce0ebb3fe8a7caf8593dcbdd56e0308d70d153
                  <p>{item.body}</p>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="transform-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className="transform-col after">
              <h4>After</h4>
              {after.map((item, i) => (
                <div key={item.label} className="transform-item">
                  <div className="label">{item.label}</div>
=======
          <div className="transform-col">
            <p className="transform-col__label transform-col__label--after">
              After
            </p>
            {after.map((item, i) => (
              <ScrollReveal key={i} delay={`${(i * 0.08).toFixed(2)}s`}>
                <div className="transform-card transform-card--after">
                  <strong className="transform-card__heading">
                    {item.label}
                  </strong>
>>>>>>> c9ce0ebb3fe8a7caf8593dcbdd56e0308d70d153
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
