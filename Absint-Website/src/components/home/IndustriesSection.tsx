import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Automotive',
    icon: '🚗',
    standards: 'ISO 26262',
    description:
      'WCET- und Stack-Analyse für AUTOSAR-Systeme, ADAS und autonomes Fahren. Unterstützung bis ASIL D.',
    image: 'https://placehold.co/640x360/1A1A2E/FFFFFF?text=Automotive',
    color: '#C8102E',
  },
  {
    name: 'Aerospace',
    icon: '✈️',
    standards: 'DO-178C',
    description:
      'Verifikationswerkzeuge für avionische Software nach DO-178C, DO-254 und EUROCAE. Zertifizierungsreife Ergebnisse.',
    image: 'https://placehold.co/640x360/1A1A2E/FFFFFF?text=Aerospace',
    color: '#2563EB',
  },
  {
    name: 'Bahn',
    icon: '🚂',
    standards: 'EN 50128',
    description:
      'Statische Analyse und Timing-Verifikation für sicherheitskritische Bahnsysteme nach EN 50128 bis SIL 4.',
    image: 'https://placehold.co/640x360/1A1A2E/FFFFFF?text=Bahn',
    color: '#059669',
  },
  {
    name: 'Medizintechnik',
    icon: '🏥',
    standards: 'IEC 62304',
    description:
      'Werkzeuge für medizinische Geräte – von implantierbaren Systemen bis zu diagnostischen Geräten nach IEC 62304.',
    image: 'https://placehold.co/640x360/1A1A2E/FFFFFF?text=Medizin',
    color: '#7C3AED',
  },
  {
    name: 'Industrieautomation',
    icon: '⚙️',
    standards: 'IEC 61508',
    description:
      'Software-Verifikation für industrielle Steuerungssysteme und PLCs nach IEC 61508 bis SIL 3.',
    image: 'https://placehold.co/640x360/1A1A2E/FFFFFF?text=Industrie',
    color: '#D97706',
  },
]

export default function IndustriesSection() {
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
          <p className="section-eyebrow">Branchen</p>
          <h2 className="section-title">Sicherheit ohne Kompromisse – in jeder Branche</h2>
          <p className="section-subtitle mx-auto">
            AbsInt-Werkzeuge sind branchenunabhängig – überall dort, wo eingebettete
            Software Leben schützen muss.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to="/branchen" className="group block h-full">
                <div className="h-full bg-card border border-border rounded-2xl overflow-hidden shadow-card card-hover">
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute bottom-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: industry.color }}
                    >
                      {industry.standards}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{industry.icon}</span>
                      <h3 className="font-bold text-charcoal">{industry.name}</h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{industry.description}</p>
                    <div
                      className="mt-4 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                      style={{ color: industry.color }}
                    >
                      Mehr erfahren →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
