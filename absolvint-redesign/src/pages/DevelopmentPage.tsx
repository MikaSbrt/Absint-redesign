import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const capabilities = [
  {
    title: 'Custom Application Development',
    description:
      'Wir entwickeln Software, die exakt auf Ihre Geschäftsprozesse zugeschnitten ist – keine teuren Kompromisse mit Standardlösungen.',
    icon: '🖥️',
  },
  {
    title: 'Cloud-basierte Infrastrukturlösungen',
    description:
      'Skalierbare, sichere Cloud-Architekturen auf AWS, Azure oder Google Cloud – für maximale Verfügbarkeit und minimale Kosten.',
    icon: '☁️',
  },
  {
    title: 'Datenanalyse und Visualisierung',
    description:
      'Verwandeln Sie Ihre Rohdaten in aussagekräftige Dashboards und Business-Intelligence-Lösungen für bessere Entscheidungen.',
    icon: '📊',
  },
  {
    title: 'Cybersecurity und Bedrohungsschutz',
    description:
      'Schutz sensibler Unternehmensdaten durch moderne Sicherheitsarchitekturen, Penetrationstests und Compliance-Beratung.',
    icon: '🔒',
  },
  {
    title: 'Mobile App-Entwicklung',
    description:
      'Native und Cross-Platform Apps für iOS und Android – von der UX-Konzeption bis zum App-Store-Launch.',
    icon: '📱',
  },
  {
    title: 'System-Integration',
    description:
      'Nahtlose Integration neuer Software in Ihre bestehende IT-Landschaft – APIs, Middleware und Daten-Migration inklusive.',
    icon: '🔗',
  },
]

export default function DevelopmentPage() {
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
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-2xl">
                &lt;/&gt;
              </div>
              <div>
                <p className="section-eyebrow mb-0">Service</p>
                <h1 className="text-4xl font-extrabold text-charcoal leading-tight">
                  Softwareentwicklung
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted leading-relaxed max-w-2xl">
              Kundenspezifische Softwareentwicklung für einzigartige Geschäftsprozesse –
              mit Integration in bestehende Systeme, höchsten Sicherheitsstandards und
              nachhaltiger Architektur.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Capabilities grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-8">Unsere Leistungsbereiche</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="card-base card-hover"
              >
                <div className="text-2xl mb-3">{cap.icon}</div>
                <h3 className="font-bold text-charcoal text-sm mb-2">{cap.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-border rounded-2xl p-8 shadow-card mb-8"
        >
          <h2 className="text-xl font-bold text-charcoal mb-6">Unser Entwicklungsprozess</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Analyse', text: 'Anforderungen verstehen, Ziele definieren' },
              { step: '02', label: 'Design', text: 'Architektur, UX und technisches Konzept' },
              { step: '03', label: 'Entwicklung', text: 'Agile Entwicklung mit regelmäßigen Reviews' },
              { step: '04', label: 'Betrieb', text: 'Deployment, Testing und laufender Support' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-10 h-10 bg-primary-50 text-primary rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {p.step}
                </div>
                <div className="font-bold text-charcoal text-sm mb-1">{p.label}</div>
                <div className="text-xs text-muted">{p.text}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-primary">
            Projekt besprechen
          </Link>
          <Link to="/services" className="btn-secondary">
            Zurück zu allen Services
          </Link>
        </div>
      </div>
    </div>
  )
}
