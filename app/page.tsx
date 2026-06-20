const capabilities = [
  {
    number: "01",
    title: "Data delivery",
    copy: "Turning complex portfolios into predictable outcomes—with governance that enables teams instead of slowing them down.",
  },
  {
    number: "02",
    title: "Transformation",
    copy: "Modernising platforms, operating models, and ways of working while keeping business value firmly in view.",
  },
  {
    number: "03",
    title: "People leadership",
    copy: "Building accountable, inclusive teams where talented people can do the best work of their careers.",
  },
];

const principles = [
  ["Clarity over noise", "Make the outcome visible. Make ownership obvious. Make progress measurable."],
  ["Trust at scale", "Create strong guardrails, then give teams the space and context to move."],
  ["Value in motion", "Ship meaningful increments, learn from reality, and keep momentum compounding."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Home">
          <span>DL</span>
          <strong>DATA / LEAD</strong>
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#connect">Connect</a>
        </div>
        <a className="nav-cta" href="mailto:hello@yourdomain.com">Let&apos;s talk <ArrowIcon /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> DATA DELIVERY LEADER · 19 YEARS</p>
          <h1>Turning data<br />ambition into<br /><em>lasting impact.</em></h1>
          <p className="hero-intro">
            I lead people, platforms, and programmes through complexity—creating the clarity and momentum that turns bold data strategies into business outcomes.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#expertise">Explore my work <ArrowIcon /></a>
            <a className="text-link" href="#approach">How I lead <span>↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Nineteen years of data leadership">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="data-node node-one" />
          <div className="data-node node-two" />
          <div className="data-node node-three" />
          <div className="experience-disc">
            <span className="disc-label">YEARS OF</span>
            <strong>19</strong>
            <span>LEADERSHIP</span>
          </div>
          <p className="visual-note">Strategy <i /> Delivery <i /> Change</p>
        </div>

        <div className="hero-proof">
          <span>Built for the space between</span>
          <strong>the boardroom</strong>
          <strong>&amp; the build room.</strong>
        </div>
      </section>

      <section className="expertise section" id="expertise">
        <div className="section-heading">
          <p className="eyebrow dark"><span /> WHAT I BRING</p>
          <h2>Leadership that makes<br /><em>complexity move.</em></h2>
          <p>I connect strategy to execution across the full data delivery landscape.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <div className="card-icon" aria-hidden="true"><span /><span /><span /></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="approach-lead">
          <p className="eyebrow"><span /> MY APPROACH</p>
          <blockquote>“Great delivery is not about controlling every move. It&apos;s about creating the conditions for the right moves to happen.”</blockquote>
          <p className="signature">— YOUR NAME <span>Data Delivery Leader</span></p>
        </div>
        <div className="principles">
          {principles.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="connect section" id="connect">
        <p className="eyebrow dark"><span /> LET&apos;S CREATE MOMENTUM</p>
        <h2>Have a complex data<br />challenge to move?</h2>
        <a className="button button-dark" href="mailto:hello@yourdomain.com">Start a conversation <ArrowIcon /></a>
        <div className="connect-meta">
          <span>AVAILABLE FOR</span>
          <p>Data leadership · Transformation · Advisory</p>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span>DL</span><strong>DATA / LEAD</strong></a>
        <p>© 2026 YOUR NAME. Built with clarity.</p>
        <div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:hello@yourdomain.com">Email ↗</a></div>
      </footer>
    </main>
  );
}
