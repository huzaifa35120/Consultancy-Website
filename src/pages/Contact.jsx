const contactOptions = [
  {
    title: 'Free 15-min consult',
    id: 'book',
    detail: 'Rapid assessment of goals, risks, and recommended next steps.',
    link: 'https://calendly.com/',
    cta: 'Schedule now',
  },
  {
    title: 'Project discovery (paid)',
    detail: 'Deep-dive session with budget guidance, scope sketch, and risk notes.',
    link: 'mailto:hello@targethomesolutions.com',
    cta: 'Email to book',
  },
  {
    title: 'Builder ready? Send plans',
    detail: 'We can run tendering or a quote comparison review for you.',
    link: 'mailto:hello@targethomesolutions.com',
    cta: 'Share your plans',
  },
]

function Contact() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="hero-card surface">
            <div className="eyebrow">Contact</div>
            <h1>Book a consultation and get homeowner-focused advice.</h1>
            <p className="subhead">
              Sydney & regional NSW. Independent consultant and builder broker
              model with disclosed referral fees only after contracts are
              executed.
            </p>
            <div className="pill-list">
              <span className="pill">15-min intro</span>
              <span className="pill">Detailed discovery</span>
              <span className="pill">On-site support</span>
            </div>
            <div className="cta-row">
              <a className="btn btn-primary" href="#book">
                Book intro call
              </a>
              <a className="btn btn-secondary" href="#download">
                Get the checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {contactOptions.map((item) => (
            <div key={item.title} className="card" id={item.id}>
              <div className="tag">Consult</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a className="btn btn-primary" href={item.link} target="_blank" rel="noreferrer">
                {item.cta}
              </a>
            </div>
          ))}
          <div className="card" id="download">
            <div className="tag">Lead capture</div>
            <h3>Download: 10 Questions to Ask Your Builder</h3>
            <p className="muted">
              Receive the checklist via email and get a brief follow-up with a
              real advisor.
            </p>
            <a className="btn btn-secondary" href="mailto:hello@targethomesolutions.com?subject=Checklist%20request">
              Request the checklist
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="strip">
            <div className="tag">Phone & email</div>
            <h3>Prefer to call?</h3>
            <p className="muted">Phone: 1300 123 456</p>
            <p className="muted">Email: hello@targethomesolutions.com</p>
            <a className="btn btn-primary" href="tel:+611300123456">
              Call now
            </a>
          </div>
          <div className="surface card">
            <h3>What to bring to the call</h3>
            <ul className="list">
              <li>
                <span className="tick">•</span> Your project location and budget
              </li>
              <li>
                <span className="tick">•</span> Any sketches, plans, or DA/CDC status
              </li>
              <li>
                <span className="tick">•</span> Timeline and preferred start date
              </li>
              <li>
                <span className="tick">•</span> Concerns about builder selection or contracts
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
