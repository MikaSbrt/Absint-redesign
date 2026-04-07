import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    emoji: '</>',
    name: 'Softwareentwicklung',
    tagline: 'Maßgeschneiderte Lösungen',
    description:
      'Maßgeschneiderte Softwarelösungen für Ihre individuellen Geschäftsprozesse – von der ersten Idee bis zum Go-live.',
    href: '/services/development',
    color: '#E8193C',
    bullets: ['Custom Application Development', 'Cloud-Infrastruktur', 'Mobile Apps', 'Cybersecurity'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7l2 2 4-4" />
      </svg>
    ),
    emoji: '📋',
    name: 'Projektberatung',
    tagline: 'Strategisches Consulting',
    description:
      'Strukturiertes Projektmanagement für bessere Ergebnisse, höhere Effizienz und Kompetenztransfer in Ihr Team.',
    href: '/services/consulting',
    color: '#2563EB',
    bullets: ['Umfangs-Klärung', 'Prozessoptimierung', 'Ressourcenplanung', 'Know-how Transfer'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    emoji: '☁️',
    name: 'Cloud-Infrastruktur',
    tagline: 'Skalierbar & sicher',
    description:
      'Skalierbare, sichere und wirtschaftliche Cloud-Lösungen für Ihr Unternehmen – flexibel an Ihre Anforderungen angepasst.',
    href: '/services/cloud',
    color: '#059669',
    bullets: ['Skalierbarkeit', 'Pay-as-you-use', 'Ortsunabhängig', 'Disaster Recovery'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    emoji: '🎓',
    name: 'Schulungen',
    tagline: 'SAP & IT-Training',
    description:
      'SAP-Schulungen und IT-Trainings für Ihr Team – praxisnah, effektiv und direkt anwendbar im Arbeitsalltag.',
    href: '/services/training',
    color: '#7C3AED',
    bullets: ['SAP-Schulungen', 'Effizienzsteigerung', 'Neue Technologien', 'Team-Zertifizierung'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
}

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Unsere Leistungen</p>
          <h2 className="section-title text-4xl lg:text-5xl">Was wir für Sie tun</h2>
          <p className="section-subtitle mx-auto">
            Von der individuellen Softwareentwicklung bis zur SAP-Schulung –
            wir begleiten Sie auf dem gesamten Weg der digitalen Transformation.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={cardVariants}>
              <Link to={service.href} className="group block h-full">
                <div className="h-full bg-card border border-border rounded-2xl shadow-card overflow-hidden card-hover flex flex-col">
                  {/* Top color bar */}
                  <div className="h-1 w-full" style={{ background: service.color }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                      style={{ background: `${service.color}12`, color: service.color }}
                    >
                      {service.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-charcoal mb-1">{service.name}</h3>
                    <p
                      className="text-xs font-semibold mb-3"
                      style={{ color: service.color }}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-sm text-muted leading-relaxed flex-1">{service.description}</p>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-muted">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div
                      className="mt-5 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200"
                      style={{ color: service.color }}
                    >
                      Mehr erfahren
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/services" className="btn-secondary inline-flex">
            Alle Services ansehen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
