import ScrollReveal from "./ScrollReveal";

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

        <ScrollReveal>
          <div className="transform-grid">
            <div className="transform-col before">
              <h4>Before</h4>
              <div className="transform-item">
                <div className="label">Chaotic Drafts</div>
                <p>
                  Messy AI drafts, a chaotic brain-dump of a manuscript, and
                  memos that cause internal confusion.
                </p>
              </div>
              <div className="transform-item">
                <div className="label">Lingering Doubt</div>
                <p>
                  Low-grade anxiety about sending or publishing something that
                  exposes the gap between who you are and how you write.
                </p>
              </div>
              <div className="transform-item">
                <div className="label">Trapped Brilliance</div>
                <p>
                  Great ideas trapped in your head or diluted by AI into
                  something flat and forgettable.
                </p>
              </div>
            </div>

            <div className="transform-arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className="transform-col after">
              <h4>After</h4>
              <div className="transform-item">
                <div className="label">Ready to Send</div>
                <p>
                  A publication-ready manuscript and crystal-clear
                  communications that drive immediate action.
                </p>
              </div>
              <div className="transform-item">
                <div className="label">Quiet Confidence</div>
                <p>
                  Quiet confidence — the kind that comes from knowing the work
                  represents you well. Done means done.
                </p>
              </div>
              <div className="transform-item">
                <div className="label">Doors Opening</div>
                <p>
                  Writing as sharp as your ideas. A book that opens
                  conversations you never could have started cold.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
