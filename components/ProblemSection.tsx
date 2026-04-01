import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    title: "The AI Aftertaste",
    body: "Your audience can feel when something reads like a machine wrote it \u2014 even if they can\u2019t put their finger on what\u2019s off. That subtle flatness is doing real damage to your credibility before you\u2019ve said a word. You didn\u2019t work this hard to sound like everyone else.",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "The Lost Voice",
    body: "You didn\u2019t spend years building your philosophy and leadership point of view just to have it sanded down into something generic. The fear isn\u2019t bad writing \u2014 it\u2019s losing the voice that makes you distinctly you. An editor who \u201cfixes\u201d that out of your work isn\u2019t helping. They\u2019re taking something.",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "The One-Shot Moment",
    body: "A book isn\u2019t a blog post you can quietly fix after publishing. A board deck goes out once. A keynote intro gets one chance to land. When the stakes are that high, \u201cpretty good\u201d isn\u2019t good enough \u2014 and you know it.",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
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
            What keeps leaders up at night <em>isn&rsquo;t bad writing.</em>
            <br />
            It&rsquo;s writing that quietly undermines them.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            You&rsquo;re commanding in a room. On stage, you&rsquo;re electric.
            But somewhere between your brain and the page, something gets lost.
            And in a world flooded with AI-generated noise, that gap has never
            had higher stakes.
          </p>
        </ScrollReveal>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <ScrollReveal key={p.title} className="problem-card" delay={`${(i * 0.1 + 0.05).toFixed(2)}s`}>
              <div className="problem-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
