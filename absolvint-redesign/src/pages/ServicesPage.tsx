import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Softwareentwicklung',
    tagline: 'Maßgeschneiderte Lösungen für Ihre Geschäftsprozesse',
    href: '/services/development',
    color: '#E8193C',
    emoji: '</>',
    items: [
      'Custom Application Development',
      'Cloud-basierte Infrastrukturlösungen',
      'Datenanalyse und Visualisierung',
      'Cybersecurity und Bedrohungsschutz',
      'Mobile App-Entwicklung',
    ],
  },
  {
    name: 'Projektberatung',
    tagline: 'Strukturiertes Consulting für bessere Projektergebnisse',
    href: '/services/consulting',
    color: '#2563EB',
    emoji: '📋',
    items: [
      'Klärung von Umfang und Zielen',
      'Ressourcenplanung und -allokation',
      'Prozessoptimierung',
      'Verschwendungsreduzierung',
      'Kompetenztransfer',
    ],
  },
  {
    name: 'Cloud-Infrastruktur',
    tagline: 'Skalierbar, sicher und wirtschaftlich',
    href: '/services/cloud',
    color: '#059669',
    emoji: '☁️',
    items: [
      'Flexible Skalierbarkeit',
      'Pay-as-you-use Modell',
      'Ortsunabhängige Zusammenarbeit',
      'Automatisierte Backups',
      'Disaster Recovery',
    ],
  },
  {
    name: 'Schulungen',
    tagline: 'SAP und IT-Training für Ihr Team',
    href: '/services/training',
    color: '#7C3AED',
    emoji: '🎓',
    items: [
      'SAP-Schulungen (alle Module)',
      'Effizienzsteigerung durch bessere Nutzung',
      'Neue Technologien verständlich erklärt',
      'Erhöhte Sicherheit durch geschulte Teams',
      'Team-Zertifizierungen',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="section-eyebrow">Leistungen</p>
          <h1 className="section-title text-5xl">Unsere Services</h1>
          <p className="section-subtitle">
            Von der Softwareentwicklung über Beratung bis zu Schulungen –
            Absolvint begleitet Sie auf dem gesamten Weg der digitalen Transformation.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={s.href} className="group block h-full">
                <div className="h-full card-base card-hover flex flex-col" style={{ borderTopColor: s.color, borderTopWidth: 3 }}>
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                      style={{ background: `${s.color}12`, color: s.color }}
                    >
                      {s.emoji}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-charcoal">{s.name}</h2>
                      <p className="text-sm text-muted">{s.tagline}</p>
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2 flex-1">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div
                    className="mt-6 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200"
                    style={{ color: s.color }}
                  >
                    Details ansehen →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 bg-white border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card"
        >
          <div>
            <h3 className="text-xl font-bold text-charcoal mb-1">
              Nicht sicher, welcher Service der richtige ist?
            </h3>
            <p className="text-muted text-sm">
              Kontaktieren Sie uns – wir beraten Sie kostenlos und unverbindlich.
            </p>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">
            Jetzt beraten lassen
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
