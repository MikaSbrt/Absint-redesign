import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header          from './components/layout/Header'
import Footer          from './components/layout/Footer'
import HomePage        from './pages/HomePage'
import ServicesPage    from './pages/ServicesPage'
import DevelopmentPage from './pages/DevelopmentPage'
import ConsultingPage  from './pages/ConsultingPage'
import CloudPage       from './pages/CloudPage'
import TrainingPage    from './pages/TrainingPage'
import LocationsPage   from './pages/LocationsPage'
import AboutPage       from './pages/AboutPage'
import ContactPage     from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/"                     element={<HomePage />} />
            <Route path="/services"             element={<ServicesPage />} />
            <Route path="/services/development" element={<DevelopmentPage />} />
            <Route path="/services/consulting"  element={<ConsultingPage />} />
            <Route path="/services/cloud"       element={<CloudPage />} />
            <Route path="/services/training"    element={<TrainingPage />} />
            <Route path="/locations"            element={<LocationsPage />} />
            <Route path="/about"                element={<AboutPage />} />
            <Route path="/contact"              element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
