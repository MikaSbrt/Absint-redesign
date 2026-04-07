import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const stats = [
  { value: '30+', label: 'Jahre Erfahrung', sub: 'Gegründet 1994' },
  { value: '500+', label: 'Kunden weltweit', sub: 'Aerospace, Auto, Industrie' },
  { value: '100+', label: 'Prozessor-Modelle', sub: 'ARM, RISC-V, PowerPC & mehr' },
  { value: '15+', label: 'Sicherheitsnormen', sub: 'DO-178C, ISO 26262, IEC 61508' },
]

export default function CompanySection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">Über AbsInt</p>
            <h2 className="text-4xl font-extrabold text-charcoal leading-tight mb-6">
              Deutsches Software&shy;unternehmen mit globaler Wirkung
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              AbsInt Angewandte Informatik GmbH wurde 1994 in Saarbrücken gegründet und ist
              aus dem Forschungsumfeld der Universität des Saarlandes entstanden. Seitdem
              entwickeln wir kommerzielle Werkzeuge auf Basis formal fundierter Methoden –
              insbesondere der abstract interpretation.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Unsere Kunden kommen aus den sicherheitskritischsten Branchen weltweit:
              Luft- und Raumfahrt, Automotive, Bahn, Medizintechnik und Industrieautomation.
              Was uns auszeichnet: Wir verkaufen keine Heuristiken, sondern formal bewiesene Ergebnisse.
            </p>
            <Link to="/unternehmen" className="btn-secondary">
              Mehr über AbsInt
            </Link>
          </motion.div>

          {/* RIGHT: Stats grid + illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Abstract tech illustration */}
            <div className="relative mb-8">
              <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
                <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <defs>
                    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F7F7F8" />
                      <stop offset="100%" stopColor="#F0F0F5" />
                    </linearGradient>
                  </defs>
                  <rect width="560" height="220" fill="url(#bgGrad)" />

                  {/* Abstract circuit/tech lines */}
                  <line x1="80" y1="40" x2="480" y2="40" stroke="#E5E7EB" strokeWidth="1" />
                  <line x1="80" y1="80" x2="480" y2="80" stroke="#E5E7EB" strokeWidth="1" />
                  <line x1="80" y1="120" x2="480" y2="120" stroke="#E5E7EB" strokeWidth="1" />
                  <line x1="80" y1="160" x2="480" y2="160" stroke="#E5E7EB" strokeWidth="1" />
                  <line x1="80" y1="200" x2="480" y2="200" stroke="#E5E7EB" strokeWidth="1" />

                  {/* AbsInt city silhouette (Saarbrücken abstract) */}
                  <rect x="100" y="140" width="30" height="60" fill="#E5E7EB" rx="2" />
                  <rect x="140" y="120" width="25" height="80" fill="#D1D5DB" rx="2" />
                  <rect x="175" y="100" width="40" height="100" fill="#C8102E" opacity="0.15" rx="2" />
                  <rect x="225" y="130" width="30" height="70" fill="#E5E7EB" rx="2" />
                  <rect x="265" y="110" width="20" height="90" fill="#D1D5DB" rx="2" />
                  <rect x="295" y="90" width="50" height="110" fill="#C8102E" opacity="0.2" rx="2" />
                  <rect x="355" y="120" width="35" height="80" fill="#E5E7EB" rx="2" />
                  <rect x="400" y="140" width="25" height="60" fill="#D1D5DB" rx="2" />
                  <rect x="435" y="115" width="30" height="85" fill="#E5E7EB" rx="2" />

                  {/* Geometric decoration */}
                  <polygon points="490,20 530,80 450,80" fill="#C8102E" opacity="0.12" />
                  <polygon points="50,80 90,160 10,160" fill="#C8102E" opacity="0.07" />

                  {/* AbsInt label */}
                  <text x="215" y="88" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="#1A1A2E" textAnchor="middle">
                    Saarbrücken · gegründet 1994
                  </text>
                </svg>
              </div>
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
                  className="bg-white border border-border rounded-xl p-5 shadow-card text-center"
                >
                  <div className="text-2xl font-extrabold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-charcoal">{stat.label}</div>
                  <div className="text-xs text-muted mt-0.5">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
