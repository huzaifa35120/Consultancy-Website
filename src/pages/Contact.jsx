import { useState } from 'react'

// Replace this with your own Formspree form ID, e.g. https://formspree.io/f/abcd1234
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykkybkp'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    projectDetails: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          projectLocation: '',
          projectType: '',
          budgetRange: '',
          timeline: '',
          projectDetails: '',
        })
        alert('Thank you! We will contact you within 24 hours.')
      } else {
        alert(
          'Something went wrong sending your message. Please try again or email ftargethomes@gmail.com.'
        )
      }
    } catch (error) {
      console.error('Formspree error:', error)
      alert(
        'Network error sending your message. Please try again or email ftargethomes@gmail.com.'
      )
    }
  }

  return (
    <div>
      <section className="section contact-hero">
        <div className="container">
          <div className="hero-card surface">
            <div className="eyebrow">Contact</div>
            <h1>Request a free consultation</h1>
            <p className="subhead">
              Get expert guidance for your home building project. We respond within
              24 hours during business days.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-layout">
            {/* Left Column - Contact Information */}
            <div className="contact-info-panel">
              <h2>
                CONTACT <span>INFORMATION</span>
              </h2>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div className="contact-label">PHONE</div>
                  <div className="contact-value">
                    <a href="tel:0424870667">0424 870 667</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <div className="contact-label">EMAIL</div>
                  <div className="contact-value">
                    <a href="mailto:ftargethomes@gmail.com">
                      ftargethomes@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-label">SERVICE AREAS</div>
                  <div className="contact-value">Sydney, NSW</div>
                </div>
              </div>

              <div className="contact-divider"></div>

              <div className="contact-info-block">
                <h3>Free Initial Consultation:</h3>
                <p>
                  We offer a complimentary 15-minute call to discuss your project
                  and how we can help.
                </p>
              </div>

              <div className="contact-info-block">
                <h3>Response Time:</h3>
                <p>
                  We aim to respond to all inquiries within 24 hours during business
                  days.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-form-panel">
              <h2>
                REQUEST A FREE <span>CONSULTATION</span>
              </h2>

              <form onSubmit={handleSubmit} className="consultation-form">
                <div className="form-group">
                  <label htmlFor="fullName">
                    FULL NAME <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    EMAIL <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    PHONE NUMBER <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectLocation">
                    PROJECT LOCATION <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    placeholder="City, State"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">
                    PROJECT TYPE <span className="required">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="custom-build">Custom Build</option>
                    <option value="renovation">Renovation</option>
                    <option value="knockdown-rebuild">Knockdown/Rebuild</option>
                    <option value="duplex">Duplex / Multi</option>
                    <option value="luxury-home">Luxury Home</option>
                    <option value="apartment">Apartment</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budgetRange">
                    BUDGET RANGE <span className="required">*</span>
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select budget</option>
                    <option value="under-300k">Under $300k</option>
                    <option value="300k-500k">$300k - $500k</option>
                    <option value="500k-750k">$500k - $750k</option>
                    <option value="750k-1m">$750k - $1M</option>
                    <option value="1m-1.5m">$1M - $1.5M</option>
                    <option value="1.5m-2m">$1.5M - $2M</option>
                    <option value="over-2m">Over $2M</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">
                    TIMELINE <span className="required">*</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">When to start</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="planning-stage">Still planning</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="projectDetails">
                    TELL US ABOUT YOUR PROJECT <span className="required">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Share details about your project goals, challenges, or questions..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <span>✈️</span> SUBMIT CONSULTATION REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
