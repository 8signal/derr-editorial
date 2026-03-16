import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    title: "Book Editing",
    text: "Full manuscript editing for business books and executive nonfiction — developmental, line, and copy editing that sharpens every sentence while preserving your voice. Your book should open doors, not just sit on a shelf.",
    delay: "0.05s",
  },
  {
    title: "Executive Communications",
    text: "Board decks, investor updates, keynote scripts, and high-stakes memos. The writing that defines how your team, your board, and your market see you — polished to match who you actually are.",
    delay: "0.15s",
  },
  {
    title: "Ongoing Editorial Retainer",
    text: "For leaders who need a trusted editor on call. Monthly partnership that gets more valuable over time — because the better I know your voice, the faster and sharper the work becomes.",
    delay: "0.25s",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">What I Do</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-heading">
            Editorial services for leaders who
            <br />
            <em>need to get it right.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            From book manuscripts to board decks, every piece of writing that
            carries your name deserves someone who treats your voice as something
            to protect.
          </p>
        </ScrollReveal>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <ScrollReveal
              key={s.title}
              className="service-card"
              delay={s.delay}
            >
              <div className="service-accent" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
