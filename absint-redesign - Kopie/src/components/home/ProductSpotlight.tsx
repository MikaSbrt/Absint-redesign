import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const bullets = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Worst-Case Execution Time Analyse',
    text: 'Mathematisch bewiesene Obergrenzen für die Ausführungszeit – nicht nur Messungen. Gültig für alle möglichen Eingaben und Systemzustände.',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Zertifizierungsreife Berichte',
    text: 'Vollständige Dokumentation für DO-178C, ISO 26262 und weitere Normen. Direkt verwendbar in Zertifizierungsprozessen ohne Nachbearbeitung.',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Unterstützung moderner Embedded-Prozessoren',
    text: 'Umfassende Prozessor-Modelle für ARM, RISC-V, PowerPC, TriCore, NXP und viele weitere – inklusive Cache- und Pipeline-Effekte.',
  },
]

export default function ProductSpotlight() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Produkt-Spotlight</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: aiT UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Red decorative diamond */}
            <div className="absolute -left-8 -top-8 w-20 h-20 opacity-10 pointer-events-none">
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <polygon points="40,4 76,76 4,76" fill="#C8102E" />
              </svg>
            </div>

            {/* Main UI card */}
            <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              {/* App bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-charcoal">aiT WCET Analyser</span>
                </div>
                <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">
                  Analyse abgeschlossen
                </span>
              </div>

              {/* Analysis result */}
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'WCET-Bound', value: '1.847 µs', color: '#C8102E' },
                    { label: 'Pfade analysiert', value: '2.841', color: '#2563EB' },
                    { label: 'Cache-Misses (max)', value: '12', color: '#059669' },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-lg font-bold mb-0.5" style={{ color: metric.color }}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Call graph visualization */}
                <div className="bg-[#0D0D1A] rounded-xl p-4 mb-4">
                  <div className="text-xs text-gray-400 mb-3 font-mono">Aufrufgraph – kritischer Pfad</div>
                  <svg viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    {/* Nodes */}
                    <rect x="10" y="30" width="80" height="28" rx="6" fill="#1E1E35" stroke="#C8102E" strokeWidth="1.5" />
                    <text x="50" y="48" fill="#C8102E" fontSize="9" fontFamily="monospace" textAnchor="middle">main_ctrl()</text>

                    <rect x="130" y="10" width="80" height="28" rx="6" fill="#1E1E35" stroke="#3B82F6" strokeWidth="1" />
                    <text x="170" y="28" fill="#82AAFF" fontSize="9" fontFamily="monospace" textAnchor="middle">sensor_read()</text>

                    <rect x="130" y="50" width="80" height="28" rx="6" fill="#1E1E35" stroke="#3B82F6" strokeWidth="1" />
                    <text x="170" y="68" fill="#82AAFF" fontSize="9" fontFamily="monospace" textAnchor="middle">compute_pid()</text>

                    <rect x="250" y="30" width="80" height="28" rx="6" fill="#1E1E35" stroke="#22C55E" strokeWidth="1" />
                    <text x="290" y="48" fill="#86EFAC" fontSize="9" fontFamily="monospace" textAnchor="middle">actuate()</text>

                    {/* Edges */}
                    <line x1="90" y1="44" x2="130" y2="24" stroke="#C8102E" strokeWidth="1" opacity="0.6" markerEnd="url(#arrow)" />
                    <line x1="90" y1="44" x2="130" y2="64" stroke="#C8102E" strokeWidth="1" opacity="0.6" />
                    <line x1="210" y1="24" x2="250" y2="44" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
                    <line x1="210" y1="64" x2="250" y2="44" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />

                    {/* WCET annotations */}
                    <text x="108" y="20" fill="#F59E0B" fontSize="7" fontFamily="monospace">342 ns</text>
                    <text x="108" y="72" fill="#F59E0B" fontSize="7" fontFamily="monospace">1.1 µs</text>
                    <text x="226" y="40" fill="#F59E0B" fontSize="7" fontFamily="monospace">405 ns</text>
                  </svg>
                </div>

                {/* Status bar */}
                <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg border border-green-100">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-green-700 font-medium">
                    Alle Deadlines eingehalten · DO-178C Level A Report generiert
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow">Flaggschiff-Produkt</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight mb-6">
              aiT – Die Referenz<br />für WCET-Analyse
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              aiT berechnet garantierte Obergrenzen der Worst-Case Execution Time
              für eingebettete Software – durch abstract interpretation der Maschinen-Code-Semantik,
              nicht durch Messung. Das Ergebnis ist eine formal bewiesene Zeitschranke.
            </p>

            <ul className="space-y-5 mb-10">
              {bullets.map((bullet) => (
                <li key={bullet.title} className="flex gap-4">
                  <div className="w-5 h-5 text-primary flex-shrink-0 mt-0.5">
                    {bullet.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm mb-1">{bullet.title}</div>
                    <div className="text-sm text-muted leading-relaxed">{bullet.text}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link to="/produkte/ait" className="btn-primary">
                aiT im Detail
              </Link>
              <Link to="/kontakt" className="btn-secondary">
                Demo anfragen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
