import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const advantages = [
  {
    icon: '📈',
    title: 'Skalierbarkeit',
    text: 'Infrastruktur flexibel an Ihre Geschäftsanforderungen anpassen – nach oben wie nach unten, ohne teure Vorausinvestitionen.',
  },
  {
    icon: '💰',
    title: 'Wirtschaftlichkeit',
    text: 'Pay-as-you-use: Sie zahlen nur für das, was Sie tatsächlich nutzen. Keine ungenutzten Server, kein verschwendetes Budget.',
  },
  {
    icon: '🤝',
    title: 'Erhöhte Zusammenarbeit',
    text: 'Ortsunabhängiger Zugriff auf geteilte Ressourcen – Ihre Teams in Hamburg, Hyderabad und Austin arbeiten nahtlos zusammen.',
  },
  {
    icon: '🔒',
    title: 'Sicherheit & Compliance',
    text: 'Enterprise-Grade-Sicherheit mit Verschlüsselung, Zugriffskontrollen und Compliance nach DSGVO und ISO 27001.',
  },
  {
    icon: '🔄',
    title: 'Business Continuity',
    text: 'Automatisierte Backups und Disaster-Recovery-Pläne sichern Ihre Daten – für minimale Ausfallzeiten im Ernstfall.',
  },
  {
    icon: '🚀',
    title: 'Schnelle Bereitstellung',
    text: 'Neue Dienste und Umgebungen in Minuten statt Wochen – Ihre IT-Abteilung reagiert so schnell wie Ihr Business.',
  },
]

const platforms = ['AWS', 'Microsoft Azure', 'Google Cloud', 'SAP BTP', 'Private Cloud']

export default function CloudPage() {
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
                style={{ background: '#05996912' }}
              >
                ☁️
              </div>
              <div>
                <p className="section-eyebrow mb-0">Service</p>
                <h1 className="text-4xl font-extrabold text-charcoal leading-tight">
                  Cloud-Infrastruktur
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted leading-relaxed max-w-2xl">
              Skalierbare, sichere und wirtschaftliche Cloud-Lösungen für Ihr Unternehmen –
              von der Strategie über die Migration bis zum laufenden Betrieb.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Advantages */}
        <h2 className="text-2xl font-bold text-charcoal mb-8">Ihre Vorteile</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-base card-hover"
            >
              <div className="text-2xl mb-3">{adv.icon}</div>
              <h3 className="font-bold text-charcoal text-sm mb-2">{adv.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{adv.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-border rounded-2xl p-8 shadow-card mb-8"
        >
          <h2 className="text-xl font-bold text-charcoal mb-4">Unterstützte Plattformen</h2>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p) => (
              <span
                key={p}
                className="px-4 py-2 bg-gray-50 border border-border rounded-lg text-sm font-semibold text-charcoal"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-primary">
            Cloud-Beratung anfragen
          </Link>
          <Link to="/services" className="btn-secondary">
            Zurück zu allen Services
          </Link>
        </div>
      </div>
    </div>
  )
}
