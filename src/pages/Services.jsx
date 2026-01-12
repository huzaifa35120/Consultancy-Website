const services = [
  {
    title: 'Initial Consultation & Project Planning',
    detail:
      'Free or paid sessions to define vision, budget, site constraints, and next steps.',
    outputs: ['Project brief', 'Budget guide', 'Risk register'],
  },
  {
    title: 'Design & Documentation Management',
    detail:
      'Coordinate architects, draftspeople, engineers, certifiers, and DA/CDC submissions.',
    outputs: ['Concept plan support', 'DA/CDC pack', 'Coordination schedule'],
  },
  {
    title: 'Builder Selection & Tender Management',
    detail:
      'Prepare detailed scopes, shortlist vetted builders, run tender, and compare quotes like-for-like.',
    outputs: [
      'Builder shortlist',
      'Quote comparison report',
      'Interview summaries',
    ],
  },
  {
    title: 'Project Supervision & Management',
    detail:
      'Optional but powerful: site meetings, quality checks, and coordination with trades to stay on time and budget.',
    outputs: ['Site reports', 'Issue log', 'Budget vs. progress tracking'],
  },
  {
    title: 'Building Inspection & Reporting',
    detail:
      'Pre-construction site review, mid-build inspections, and pre-handover reports to catch issues early.',
    outputs: ['Defect lists', 'Photographic reports', 'Remediation follow-up'],
  },
  {
    title: 'Contract & Compliance Support',
    detail:
      'Contract review, risk education, and guidance on inclusions/exclusions to avoid costly surprises.',
    outputs: ['Contract review notes', 'Risk guide', 'Variation guardrails'],
  },
  {
    title: 'Referral & Matchmaking Service',
    detail:
      'We keep a vetted builder database matched to your project type, budget, and location.',
    outputs: ['Builder matches', 'Introductions', 'Referral transparency'],
  },
]

const deliverables = [
  'Scope of works with allowances and exclusions clarified',
  'Tender pack ready for like-for-like pricing',
  'Comparison tables to see hidden contingencies',
  'Meeting notes and action lists after site visits',
  'Compliance and risk checkpoints for peace of mind',
]

function Services() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="hero-card surface">
            <div className="eyebrow">Services</div>
            <h1>Consulting built for homeowners — not builders.</h1>
            <p className="subhead">
              Engage us for a single module or a full journey from first idea to
              handover. We adapt to your confidence level and budget.
            </p>
            <div className="pill-list">
              <span className="pill">Planning & approvals</span>
              <span className="pill">Tender & builder selection</span>
              <span className="pill">On-site supervision</span>
              <span className="pill">Contract support</span>
            </div>
            <div className="cta-row">
              <a className="btn btn-primary" href="/contact#book">
                Book a consult
              </a>
              <a className="btn btn-secondary" href="/pricing">
                View pricing options
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="tag">Core service</div>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <ul className="list">
                {service.outputs.map((item) => (
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
          <div className="surface card">
            <h3>What you receive</h3>
            <ul className="list">
              {deliverables.map((item) => (
                <li key={item}>
                  <span className="tick">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="strip">
            <div className="tag">Tender & selection</div>
            <h3>Builder broker support that protects your interests.</h3>
            <p className="muted">
              We run the process transparently, so you know who is quoting, how
              they were vetted, and how the numbers compare.
            </p>
            <a className="btn btn-secondary" href="/why-hire">
              Why our process reduces risk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
