import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import InfinityMark from '../InfinityMark'

const stats = [
  { value: '25',  unit: 'Jahre', label: 'IT-Erfahrung', color: '#E8193C' },
  { value: '4',   unit: 'Kontinente', label: 'Globale Präsenz', color: '#2563EB' },
  { value: '8',   unit: 'Standorte', label: 'Weltweit', color: '#059669' },
  { value: '347+', unit: 'Projekte', label: 'Erfolgreich umgesetzt', color: '#7C3AED' },
]

export default function MissionSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Mission text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">Unsere Mission</p>
            <h2 className="text-4xl font-extrabold text-charcoal leading-tight mb-6">
              Technologie mit Leidenschaft
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              „Bei der Absolvint GmbH setzen wir uns leidenschaftlich dafür ein, die Kraft der
              Technologie zu nutzen, um Unternehmen dabei zu helfen, in einer sich ständig
              verändernden digitalen Landschaft erfolgreich zu sein."
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Mit einem Team von Experten und Innovatoren entwickeln wir hochmoderne
              Softwarelösungen, die komplexe Probleme vereinfachen, das Wachstum vorantreiben
              und das Kundenerlebnis verbessern.
            </p>

            {/* Checkmarks */}
            <ul className="space-y-3 mb-8">
              {[
                'Maßgeschneiderte Lösungen statt Einheitssoftware',
                'Transparente Kommunikation auf Augenhöhe',
                'Langfristige Partnerschaft – nicht nur einmalige Projekte',
                'Internationale Expertise mit lokalem Verständnis',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-secondary">
              Mehr über uns
            </Link>
          </motion.div>

          {/* RIGHT: Stats + InfinityMark deco */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* InfinityMark hero */}
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <InfinityMark className="w-64 h-44" opacity={0.85} />
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="bg-background border border-border rounded-xl p-5 text-center shadow-card"
                >
                  <div className="text-2xl font-extrabold leading-none" style={{ color: stat.color }}>
                    {stat.value}
                    <span className="text-sm font-semibold ml-1 opacity-80">{stat.unit}</span>
                  </div>
                  <div className="text-xs text-muted mt-1.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
