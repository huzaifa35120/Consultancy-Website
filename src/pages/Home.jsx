const quickServices = [
  {
    title: 'Initial Consultation & Brief',
    body: 'Clarify goals, budget, and site constraints so you start with a confident plan.',
  },
  {
    title: 'Builder Shortlist & Tender',
    body: 'Like-for-like scopes, vetted builders, and quote comparison you can trust.',
  },
  {
    title: 'On-site Supervision',
    body: 'Quality checks, meeting attendance, and progress reports to keep builders accountable.',
  },
]

const steps = [
  {
    title: 'Discovery call',
    detail: '15-min discovery to map goals, risks, and timelines.',
  },
  {
    title: 'Plan & approvals',
    detail: 'Scope, documentation, and DA/CDC coordination.',
  },
  {
    title: 'Builder tender',
    detail: 'Shortlist, interviews, and like-for-like quote comparison.',
  },
  {
    title: 'Contracts',
    detail: 'Risk education, contract review, and variation control.',
  },
  {
    title: 'On-site oversight',
    detail: 'Meetings, quality checks, and handover support.',
  },
]

const testimonials = [
  {
    name: 'Emily, Dee Why',
    quote:
      'We avoided a $22k variation because of the scope review and tender comparison Target prepared.',
  },
  {
    name: 'Raj & Priya, Castle Hill',
    quote:
      'They found us a builder in 3 weeks and stayed on as our eyes and ears during construction.',
  },
]

const faqs = [
  {
    q: 'Do you get paid by the builder?',
    a: 'We work for you. We do accept a referral fee only after a contract is executed with a vetted builder, and we disclose this upfront.',
  },
  {
    q: 'Can you help with DA/CDC?',
    a: 'Yes. We coordinate with architects, draftspeople, engineers, and certifiers to keep documentation moving.',
  },
  {
    q: 'Is site supervision mandatory?',
    a: 'It is optional. You choose the level of oversight you need, from milestone inspections to full coordination.',
  },
]

const categories = [
  { label: 'Custom builds', meta: 'Scoped + tender ready', icon: '🏠' },
  { label: 'Renovations', meta: 'Kitchen, bath, extensions', icon: '🧱' },
  { label: 'Knockdown/rebuild', meta: 'DA/CDC guidance', icon: '🏗️' },
  { label: 'Duplex / multi', meta: 'Investors & families', icon: '🏘️' },
  { label: 'Rural builds', meta: 'Regional NSW', icon: '🌿' },
  { label: 'Luxury homes', meta: 'High-spec oversight', icon: '✨' },
  { label: 'Apartments', meta: 'Fit-outs & refurb', icon: '🏢' },
  { label: 'Warehouses', meta: 'Commercial light', icon: '🏭' },
]

function Home() {
  return (
    <div>
      <section
        className="hero"
        style={{
          background:
            'linear-gradient(115deg, rgba(12,18,32,0.88) 0%, rgba(12,18,32,0.8) 55%, rgba(12,18,32,0.55) 100%), url(https://images.pexels.com/photos/7031403/pexels-photo-7031403.jpeg?auto=compress&cs=tinysrgb&w=1600) center/cover no-repeat',
        }}
      >
        <div className="container">
          <div className="hero-grid">
            <div className="hero-card surface">
              <div className="eyebrow">Independent home building advisor</div>
              <h1>
                Real support, trusted referrals, and clear decisions for your
                home build.
              </h1>
              <p className="subhead">
                We represent you — not the builder. Save money, reduce risk, and
                move through approvals, design, tendering, and construction with
                confidence.
              </p>
              <div className="pill-list">
                <span className="pill">Save money</span>
                <span className="pill">Reduce risk</span>
                <span className="pill">Expert guidance</span>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="/contact#book">
                  Book a free consultation
                </a>
                <a className="btn btn-secondary" href="/services">
                  View services
                </a>
              </div>
            </div>
            <div className="hero-meta">
              <div className="hero-visual">
                <img
                  src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern Australian home exterior"
                />
                <div className="hero-visual-caption">
                  <div className="hero-visual-pill">
                    From first brief to handover — with someone on your side.
                  </div>
                  <div className="hero-visual-metric">
                    <div>Avg. 3 vetted builders</div>
                    <div>per project shortlist</div>
                  </div>
                </div>
              </div>
              <div className="meta-card">
                <strong>Builder matchmaking</strong>
                Vetted, reliable builders matched to your budget and project
                type. We prepare the scope so quotes are comparable.
              </div>
              <div className="meta-card">
                <strong>Client advocacy</strong>
                We review contracts, watch risk items, and keep variations under
                control to protect your budget.
              </div>
              <div className="meta-card">
                <strong>Time saved</strong>
                We coordinate architects, engineers, certifiers, and builders so
                you can focus on decisions, not admin.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container categories">
          <div className="categories-inner">
            <div className="categories-left">
              <div className="tag">Categories</div>
              <div className="zig" />
              <h3>Explore our project categories</h3>
              <p className="muted">
                From duplexes to luxury homes, we tailor scopes, vet builders, and
                keep your brief tight so quotes stay comparable.
              </p>
              <div className="pill-list">
                <span className="pill">Sydney & NSW</span>
                <span className="pill">Vetted builders</span>
                <span className="pill">Scope-first approach</span>
              </div>
            </div>
            <div className="categories-grid">
              {categories.map((cat) => (
                <div key={cat.label} className="category-card">
                  <div className="category-icon" aria-hidden="true">
                    {cat.icon}
                  </div>
                  <div className="category-title">{cat.label}</div>
                  <div className="category-meta">{cat.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Where we create value</h2>
          <p className="section-sub">
            Advisory, tender management, and on-site support built for Australian
            homeowners.
          </p>
          <div className="grid three">
            {quickServices.map((item) => (
              <div key={item.title} className="card">
                <div className="tag">Included</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="list">
                  <li>
                    <span className="tick">•</span> Practical templates and
                    checklists
                  </li>
                  <li>
                    <span className="tick">•</span> Independent advice
                  </li>
                  <li>
                    <span className="tick">•</span> Clear next steps
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="strip">
            <div className="tag">Builder referral program</div>
            <h3>We maintain a vetted builder bench and act as your broker.</h3>
            <p className="muted">
              You get a shortlist, quote comparison report, and interview
              summaries. Builders receive qualified leads; you receive advocate
              support and transparency.
            </p>
            <a className="btn btn-primary" href="/services">
              See how tendering works
            </a>
          </div>
            <div className="surface card">
            <h3>How we work together</h3>
            <div className="steps">
                {steps.map((step, idx) => (
                  <div key={step.title} className="step">
                    <span>0{idx + 1}</span>
                    <strong>{step.title}</strong>
                    <div>{step.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Results homeowners care about</h2>
          <p className="section-sub">
            Transparent reporting keeps you in control — from scope to handover.
          </p>
          <div className="grid two">
            {testimonials.map((item) => (
              <div key={item.name} className="card">
                <div className="tag">Case study</div>
                <p>"{item.quote}"</p>
                <strong>{item.name}</strong>
              </div>
            ))}
            <div className="card">
              <div className="tag">Why it works</div>
              <ul className="list">
                <li>
                  <span className="tick">•</span> We benchmark quotes apples-to-apples.
                </li>
                <li>
                  <span className="tick">•</span> We educate you on risk items in the contract.
                </li>
                <li>
                  <span className="tick">•</span> We attend site meetings and issue summary notes.
                </li>
              </ul>
              <a className="btn btn-secondary" href="/why-hire">
                Why homeowners trust us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Frequently asked</h2>
          <div className="grid two">
            {faqs.map((item) => (
              <div key={item.q} className="card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
          <div className="strip" style={{ marginTop: '16px' }}>
            <div>
              Need a template? Grab our checklist “10 Questions to Ask Your
              Builder.”
            </div>
            <a className="btn btn-secondary" href="/contact#download">
              Get the checklist
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
