import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CompCertPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <Link to="/produkte" className="text-sm text-muted hover:text-primary transition-colors mb-6 inline-flex items-center gap-1.5">
            ← Alle Produkte
          </Link>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mt-4" style={{ background: '#7C3AED14', color: '#7C3AED' }}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <p className="section-eyebrow">Produkt</p>
          <h1 className="text-5xl font-extrabold text-charcoal mb-4">CompCert</h1>
          <p className="text-xl text-muted mb-8 leading-relaxed">
            Formal verifizierter C-Compiler mit mathematisch garantierter Korrektheit der Codegenerierung.
          </p>
          <div className="bg-white border border-border rounded-2xl p-8 shadow-card mb-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">Seite in Entwicklung</h2>
            <p className="text-muted mb-6">
              Diese Detailseite wird in einem der nächsten Iterationsschritte vollständig ausgebaut.
            </p>
            <Link to="/kontakt" className="btn-primary">Demo anfragen</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
