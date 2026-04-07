import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '🎯',
    title: 'Bessere Projektergebnisse',
    text: 'Durch klare Zieldefinition, strukturierte Planung und erfahrenes Projektmanagement steigern wir die Erfolgsquote Ihrer IT-Projekte deutlich.',
  },
  {
    icon: '⚡',
    title: 'Erhöhte Effizienz',
    text: 'Wir identifizieren Verschwendung in Ihren Prozessen, optimieren Abläufe und schaffen messbare Effizienzgewinne in kurzer Zeit.',
  },
  {
    icon: '📚',
    title: 'Kompetenztransfer',
    text: 'Wir bauen das Know-how in Ihrem Team auf – damit Sie nach dem Projekt eigenständig handeln können und nicht von uns abhängig bleiben.',
  },
  {
    icon: '💰',
    title: 'Kostenoptimierung',
    text: 'Durch präzise Ressourcenallokation und Vermeidung teurer Fehler senken wir Ihre Projektkosten – ohne Abstriche bei der Qualität.',
  },
]

export default function ConsultingPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="text-sm text-muted hover:text-primary transition-colors mb-6 inline-flex items-center gap-1.5"
            >
              ← Alle Services
            </Link>
            <div className="flex items-center gap-4 mt-4 mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: '#2563EB12' }}
              >
                📋
              </div>
              <div>
                <p className="section-eyebrow mb-0">Service</p>
                <h1 className="text-4xl font-extrabold text-charcoal leading-tight">
                  Projektberatung
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted leading-relaxed max-w-2xl">
              Strukturiertes Projektmanagement für bessere Ergebnisse, höhere Effizienz
              und nachhaltigen Kompetenztransfer in Ihr Unternehmen.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base card-hover flex gap-5"
            >
              <div className="text-3xl flex-shrink-0">{b.icon}</div>
              <div>
                <h3 className="font-bold text-charcoal mb-2">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consulting areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-border rounded-2xl p-8 shadow-card mb-8"
        >
          <h2 className="text-xl font-bold text-charcoal mb-4">Beratungsfelder</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'IT-Projektmanagement (PMI, PRINCE2, agil)',
              'Anforderungsanalyse und Business Analysis',
              'Stakeholder-Management und Kommunikation',
              'Risikomanagement und Qualitätssicherung',
              'Change-Management bei digitalen Transformationen',
              'Vendor- und Partner-Management',
              'Post-Merger IT-Integration',
              'IT-Governance und Compliance',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-primary">
            Beratungsgespräch anfragen
          </Link>
          <Link to="/services" className="btn-secondary">
            Zurück zu allen Services
          </Link>
        </div>
      </div>
    </div>
  )
}
