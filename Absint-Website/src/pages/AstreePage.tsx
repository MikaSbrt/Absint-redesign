import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AstreePage() {
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
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mt-4" style={{ background: '#05996914', color: '#059669' }}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="section-eyebrow">Produkt</p>
          <h1 className="text-5xl font-extrabold text-charcoal mb-4">Astrée</h1>
          <p className="text-xl text-muted mb-8 leading-relaxed">
            Statische Analyse zur Erkennung von Laufzeitfehlern in sicherheitskritischer eingebetteter C-Software – ohne False Negatives.
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
