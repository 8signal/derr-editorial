import ScrollReveal from "./ScrollReveal";

const PROBLEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "The AI Aftertaste",
    text: "Your audience notices when something reads like a machine wrote it — even if they can't name what's off. That subtle flatness erodes credibility before you've said a word.",
    delay: "0.05s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "The Lost Voice",
    text: "You didn't spend years building your philosophy and leadership approach just to have it sanded down into something bland. The fear isn't bad writing — it's losing the voice that makes you distinctly you.",
    delay: "0.15s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "The One-Shot Moment",
    text: "A book isn't a blog post you can fix after publishing. A board deck goes out once. A keynote intro gets one chance. One clunky paragraph can define how an audience sees you.",
    delay: "0.25s",
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">The Stakes</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-heading">
            What keeps leaders up at night <em>isn&apos;t bad writing.</em>
            <br />
            It&apos;s writing that quietly undermines them.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            You&apos;re commanding in a room and electric on a stage. But on the
            page, something gets lost. In a world of AI-generated noise, the gap
            between who you are and how you read has never been more dangerous.
          </p>
        </ScrollReveal>

        <div className="problem-grid">
          {PROBLEMS.map((p) => (
            <ScrollReveal
              key={p.title}
              className="problem-card"
              delay={p.delay}
            >
              <div className="problem-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
