import ScrollReveal from "./ScrollReveal";

export default function SloganBand() {
  return (
    <div className="slogan-band">
      <ScrollReveal>
        <blockquote>
          AI can draft it.{" "}
          <span className="highlight">Only a human</span> can make it sound
          like you.
        </blockquote>
      </ScrollReveal>
    </div>
  );
}
