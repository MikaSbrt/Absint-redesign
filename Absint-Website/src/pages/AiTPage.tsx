import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AiTPage() {
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
          <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 mt-4">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
          </div>
          <p className="section-eyebrow">Produkt</p>
          <h1 className="text-5xl font-extrabold text-charcoal mb-4">aiT</h1>
          <p className="text-xl text-muted mb-8 leading-relaxed">
            Worst-Case Execution Time (WCET) Analyse für eingebettete Prozessoren.
            Mathematisch bewiesene Zeitgrenzen – nicht nur Messungen.
          </p>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-card mb-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">Seite in Entwicklung</h2>
            <p className="text-muted mb-6">
              Diese Detailseite wird in einem der nächsten Iterationsschritte vollständig ausgebaut.
              Hier werden detaillierte Produktinformationen, technische Spezifikationen,
              unterstützte Prozessoren und Anwendungsfälle präsentiert.
            </p>
            <Link to="/kontakt" className="btn-primary">Demo anfragen</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
