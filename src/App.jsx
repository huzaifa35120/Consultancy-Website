import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import WhyHire from './pages/WhyHire'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LeadStrip from './components/LeadStrip'

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <LeadStrip />
        <Navigation />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-hire" element={<WhyHire />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
