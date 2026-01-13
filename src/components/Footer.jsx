function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand" style={{ color: '#f9fafb' }}>
              Target <span>Home Solutions</span>
            </div>
            <p className="muted">
              Independent home build advisors guiding you from first idea to
              handover. We advocate for homeowners and match you with vetted
              builders.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Consult & project planning</li>
              <li>Design & documentation</li>
              <li>Builder tender & selection</li>
              <li>Site supervision & reporting</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:ftargethomes@gmail.com">
                  ftargethomes@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0424870667">0424 870 667</a>
              </li>
              <li>Sydney, NSW</li>
            </ul>
          </div>
          <div>
            <h4>Book</h4>
            <ul>
              <li>
                <a href="/contact#book">Free 15-min consult</a>
              </li>
              <li>
                <a href="/contact">Project discovery call</a>
              </li>
              <li>
                <a href="/services">Service menu</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Target Home Solutions</div>
          <div className="muted">
            We receive referral fees from vetted builders once a contract is
            executed. Your interests stay first.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
