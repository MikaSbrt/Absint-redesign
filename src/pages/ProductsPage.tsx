import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const products = [
  { name: 'aiT',           href: '/produkte/ait',           tagline: 'WCET-Analyse',          color: '#C8102E' },
  { name: 'StackAnalyzer', href: '/produkte/stackanalyzer', tagline: 'Stack-Nutzungsanalyse', color: '#2563EB' },
  { name: 'Astrée',        href: '/produkte/astree',        tagline: 'Statische Analyse',     color: '#059669' },
  { name: 'CompCert',      href: '/produkte/compcert',      tagline: 'Verifizierter Compiler', color: '#7C3AED' },
]

export default function ProductsPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Produktportfolio</p>
          <h1 className="section-title text-5xl mb-4">Alle Produkte</h1>
          <p className="section-subtitle mb-12">
            Das vollständige Werkzeug-Spektrum für statische Analyse und Timing-Verifikation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={p.href}
                className="block card-base card-hover group"
                style={{ borderTopColor: p.color, borderTopWidth: 3 }}
              >
                <h2 className="text-2xl font-bold mb-1" style={{ color: p.color }}>{p.name}</h2>
                <p className="text-sm text-muted mb-4">{p.tagline}</p>
                <span className="text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all" style={{ color: p.color }}>
                  Produktseite öffnen →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
