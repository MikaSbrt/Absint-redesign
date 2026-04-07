import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface Product {
  name: string
  tagline: string
  description: string
  href: string
  icon: React.ReactNode
  color: string
}

const products: Product[] = [
  {
    name: 'aiT',
    tagline: 'WCET-Analyse',
    description:
      'Worst-Case Execution Time Analyse für eingebettete Prozessoren. Liefert garantierte Obergrenzen für die Ausführungszeit sicherheitskritischer Software.',
    href: '/produkte/ait',
    color: '#C8102E',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: 'StackAnalyzer',
    tagline: 'Stack-Nutzungsanalyse',
    description:
      'Präzise statische Analyse des maximalen Stack-Verbrauchs. Verhindert Stack-Überläufe in sicherheitskritischen eingebetteten Systemen.',
    href: '/produkte/stackanalyzer',
    color: '#2563EB',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Astrée',
    tagline: 'Statische Analyse',
    description:
      'Erkennt Laufzeitfehler (Null-Dereferenzen, Division durch Null, Pufferüberläufe) ohne False Positives in sicherheitskritischem C-Code.',
    href: '/produkte/astree',
    color: '#059669',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'CompCert',
    tagline: 'Verifizierter Compiler',
    description:
      'Formal verifizierter C-Compiler mit mathematisch beweisbarer Korrektheit der Code-Generierung. Keine unerwarteten Optimierungseffekte.',
    href: '/produkte/compcert',
    color: '#7C3AED',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: 'TimeWeaver',
    tagline: 'Systemweite Timing-Analyse',
    description:
      'Analysiert Timing-Verhalten in komplexen eingebetteten Systemen mit mehreren Verarbeitungseinheiten, Caches und Bussystemen.',
    href: '/produkte',
    color: '#D97706',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M3 12h2m14 0h2m-3.343-5.657l-1.414 1.414M7.757 16.243l-1.414 1.414m0-11.314l1.414 1.414M16.243 16.243l1.414 1.414" />
      </svg>
    ),
  },
  {
    name: 'WCET Tools',
    tagline: 'Timing-Werkzeug-Suite',
    description:
      'Umfassende Suite weiterer Timing-Analysewerkzeuge für spezifische Prozessor-Architekturen und Anwendungsfälle in der eingebetteten Systementwicklung.',
    href: '/produkte',
    color: '#0891B2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Produktportfolio</p>
          <h2 className="section-title text-4xl lg:text-5xl">Unsere Produkte</h2>
          <p className="section-subtitle mx-auto">
            Von WCET-Analyse über statische Fehlersuche bis zum verifizierten Compiler –
            AbsInt liefert das komplette Werkzeug-Spektrum für sicherheitskritische Software.
          </p>
        </motion.div>

        {/* Products grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {products.map((product) => (
            <motion.div key={product.name} variants={cardVariants}>
              <Link to={product.href} className="group block h-full">
                <div
                  className="h-full card-base card-hover gradient-border flex flex-col rounded-2xl transition-all duration-300"
                  style={{ '--tw-ring-color': product.color } as React.CSSProperties}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: `${product.color}14`, color: product.color }}
                  >
                    {product.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-charcoal">{product.name}</h3>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${product.color}14`, color: product.color }}
                      >
                        {product.tagline}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{product.description}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-200" style={{ color: product.color }}>
                    Mehr erfahren
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* All products CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/produkte" className="btn-secondary inline-flex">
            Alle Produkte anzeigen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
