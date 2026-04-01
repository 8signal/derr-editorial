import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Book Editing",
    body: "Full manuscript editing for business books and executive nonfiction \u2014 developmental, line, and copy editing that sharpens every sentence while keeping your voice intact. Your book should open doors, spark conversations, and make the right people sit up. Let\u2019s make sure it does all three.",
  },
  {
    title: "Executive Communications",
    body: "Board decks, investor updates, keynote scripts, and high-stakes memos. The writing that defines how your team, your board, and your market see you \u2014 edited to match who you actually are in a room. The version that goes out should sound like your best day, not your average Tuesday.",
  },
  {
    title: "Ongoing Editorial Retainer",
    body: "For leaders who want a trusted editor on call \u2014 not just for the book, but for everything that follows. Monthly partnership built on knowing your voice well enough that the turnaround gets faster and the quality gets higher the longer we work together.",
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
            Editorial services for leaders who{" "}
            <em>need to get it right.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            From book manuscripts to board decks, every piece of writing that
            carries your name deserves someone who treats your voice as
            something to protect.
          </p>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} className="service-card" delay={`${(i * 0.1 + 0.05).toFixed(2)}s`}>
              <div className="service-accent" />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
