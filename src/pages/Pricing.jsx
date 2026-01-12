const packages = [
  {
    name: 'Free discovery',
    price: '$0',
    desc: '15-min introduction to map your project and recommend next steps.',
    includes: ['Clarity on goals and risks', 'Timeline guidance', 'Service fit recommendation'],
  },
  {
    name: 'Planning & Brief Prep',
    price: 'Fixed fee',
    desc: 'Define scope, budget ranges, and documentation path.',
    includes: ['Project brief + budget guide', 'Risk register', 'DA/CDC roadmap'],
  },
  {
    name: 'Builder Shortlist & Tender',
    price: 'Fixed fee + referral fee',
    desc: 'Vetted builders, tender pack, interviews, and comparison report.',
    includes: ['Scope of works + tender pack', 'Shortlist & introductions', 'Quote comparison report'],
  },
  {
    name: 'On-site Advisory',
    price: 'Hourly or milestone',
    desc: 'Site supervision, meeting attendance, and quality reporting.',
    includes: ['Site meeting notes', 'Defect and issue log', 'Budget vs progress snapshot'],
  },
]

const notes = [
  'Referral fee from builders is only paid after contract execution and disclosed to you.',
  'Site supervision can be milestone-based (e.g., slab, frame, lockup, pre-handover).',
  'Contracts, PC/PS items, and inclusions are explained in plain language before you sign.',
]

function Pricing() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="hero-card surface">
            <div className="eyebrow">Pricing</div>
            <h1>Clear, flexible pricing. Start with a free call.</h1>
            <p className="subhead">
              Choose a single module or bundle. We balance fixed-fee deliverables
              with hourly advisory so you only pay for what you need.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/contact#book">
                Book free intro call
              </a>
              <a className="btn btn-secondary" href="/services">
                See service detail
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          {packages.map((pack) => (
            <div key={pack.name} className="card">
              <div className="tag">Package</div>
              <h3>{pack.name}</h3>
              <p className="muted">{pack.price}</p>
              <p>{pack.desc}</p>
              <ul className="list">
                {pack.includes.map((item) => (
                  <li key={item}>
                    <span className="tick">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="strip">
            <div className="tag">Referral transparency</div>
            <h3>Referral fees keep builders committed to service quality.</h3>
            <p className="muted">
              Builders pay only after contract execution. Your interests stay
              first: we advocate for you, not them.
            </p>
            <a className="btn btn-secondary" href="/why-hire">
              See how we protect clients
            </a>
          </div>
          <div className="surface card">
            <h3>Notes</h3>
            <ul className="list">
              {notes.map((note) => (
                <li key={note}>
                  <span className="tick">•</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
