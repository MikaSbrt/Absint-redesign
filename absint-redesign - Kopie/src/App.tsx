import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AiTPage from './pages/AiTPage'
import StackAnalyzerPage from './pages/StackAnalyzerPage'
import AstreePage from './pages/AstreePage'
import CompCertPage from './pages/CompCertPage'
import IndustriesPage from './pages/IndustriesPage'
import TechnologyPage from './pages/TechnologyPage'
import CompanyPage from './pages/CompanyPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/"                       element={<HomePage />} />
            <Route path="/produkte"               element={<ProductsPage />} />
            <Route path="/produkte/ait"            element={<AiTPage />} />
            <Route path="/produkte/stackanalyzer"  element={<StackAnalyzerPage />} />
            <Route path="/produkte/astree"         element={<AstreePage />} />
            <Route path="/produkte/compcert"       element={<CompCertPage />} />
            <Route path="/branchen"               element={<IndustriesPage />} />
            <Route path="/technologie"            element={<TechnologyPage />} />
            <Route path="/unternehmen"            element={<CompanyPage />} />
            <Route path="/ressourcen"             element={<ResourcesPage />} />
            <Route path="/kontakt"                element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
