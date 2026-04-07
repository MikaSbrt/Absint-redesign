import { motion } from 'framer-motion'

const industries = [
  { name: 'Automotive',          standard: 'ISO 26262',   color: '#C8102E', icon: '🚗' },
  { name: 'Aerospace',           standard: 'DO-178C',     color: '#2563EB', icon: '✈️' },
  { name: 'Bahn',                standard: 'EN 50128',    color: '#059669', icon: '🚂' },
  { name: 'Medizintechnik',      standard: 'IEC 62304',   color: '#7C3AED', icon: '🏥' },
  { name: 'Industrieautomation', standard: 'IEC 61508',   color: '#D97706', icon: '⚙️' },
]

export default function IndustriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Branchen</p>
          <h1 className="section-title text-5xl mb-4">Sicherheit in jeder Branche</h1>
          <p className="section-subtitle mb-12">
            AbsInt-Werkzeuge sind branchenübergreifend – überall dort, wo eingebettete Software Leben schützen muss.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base card-hover"
              style={{ borderTopColor: ind.color, borderTopWidth: 3 }}
            >
              <div className="text-3xl mb-4">{ind.icon}</div>
              <h2 className="text-xl font-bold text-charcoal mb-2">{ind.name}</h2>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-3"
                style={{ background: `${ind.color}12`, color: ind.color }}>
                {ind.standard}
              </span>
              <p className="text-sm text-muted">
                Detailinformationen zu dieser Branche werden in einem der nächsten Iterationsschritte ausgebaut.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
