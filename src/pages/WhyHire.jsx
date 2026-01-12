const benefits = [
  {
    title: 'We represent you',
    body: 'We advocate solely for the homeowner. Builders know we expect transparency on allowances, exclusions, and timelines.',
  },
  {
    title: 'Save money on variations',
    body: 'Clear scopes and comparison tables highlight gaps that often become costly surprises.',
  },
  {
    title: 'Builder quality checked',
    body: 'We introduce only vetted builders with relevant project experience and verified references.',
  },
  {
    title: 'Reduce disputes',
    body: 'We educate you on contract risk, PC/PS items, liquidated damages, and progress claims.',
  },
]

const safeguards = [
  'Quote comparisons with notes on inclusions, exclusions, and provisional sums',
  'Contract review checklist highlighting risk clauses',
  'Pre-construction and mid-build quality inspections',
  'Site meeting attendance with action summaries',
  'Variation tracking and budget vs. progress snapshots',
]

function WhyHire() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="hero-card surface">
            <div className="eyebrow">Why hire us</div>
            <h1>Built on advocacy, transparency, and reliable builders.</h1>
            <p className="subhead">
              We operate like an independent advisor and builder broker. You get
              decision-ready information, vetted builder options, and a partner
              watching your interests at every milestone.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/contact#book">
                Talk with an advisor
              </a>
              <a className="btn btn-secondary" href="/services">
                See service lineup
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card">
              <div className="tag">Benefit</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="strip">
            <div className="tag">Trust signals</div>
            <h3>Independent consultant – we represent you.</h3>
            <p className="muted">
              Referral fees are disclosed and only paid by vetted builders after
              a contract is executed. Oversight and advice stay unbiased.
            </p>
            <div className="badge">
              <span>✔</span> Pre-assessed builders for quality & reliability
            </div>
            <div className="badge">
              <span>✔</span> Focus on minimising delays and disputes
            </div>
          </div>
          <div className="surface card">
            <h3>Safeguards we put in place</h3>
            <ul className="list">
              {safeguards.map((item) => (
                <li key={item}>
                  <span className="tick">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyHire
