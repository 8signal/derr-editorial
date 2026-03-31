import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    title: "The AI Aftertaste",
    body: "Your audience can feel when something reads like a machine wrote it — even if they can\u2019t put their finger on what\u2019s off. That subtle flatness is doing real damage to your credibility before you\u2019ve said a word. You didn\u2019t work this hard to sound like everyone else.",
  },
  {
    title: "The Lost Voice",
    body: "You didn\u2019t spend years building your philosophy and leadership point of view just to have it sanded down into something generic. The fear isn\u2019t bad writing \u2014 it\u2019s losing the voice that makes you distinctly you. An editor who \u201cfixes\u201d that out of your work isn\u2019t helping. They\u2019re taking something.",
  },
  {
    title: "The One-Shot Moment",
    body: "A book isn\u2019t a blog post you can quietly fix after publishing. A board deck goes out once. A keynote intro gets one chance to land. When the stakes are that high, \u201cpretty good\u201d isn\u2019t good enough \u2014 and you know it.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section section--alt" id="problem">
      <div className="container">
        <ScrollReveal>
          <p className="section-eyebrow">The Stakes</p>
          <h2 className="section-headline">
            What keeps leaders up at night{" "}
            <em>isn&rsquo;t bad writing.</em>
            <br />
            It&rsquo;s writing that quietly undermines them.
          </h2>
          <p className="section-intro">
            You&rsquo;re commanding in a room. On stage, you&rsquo;re electric.
            But somewhere between your brain and the page, something gets lost.
            And in a world flooded with AI-generated noise, that gap has never
            had higher stakes.
          </p>
        </ScrollReveal>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={`${(i * 0.1 + 0.05).toFixed(2)}s`}>
              <div className="problem-card">
                <h3 className="problem-card__title">{p.title}</h3>
                <p className="problem-card__body">{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
