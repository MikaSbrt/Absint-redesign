import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const resources = [
  {
    type: 'Whitepaper',
    typeColor: '#C8102E',
    title: 'WCET-Analyse in sicherheitskritischen Systemen',
    description:
      'Ein umfassender Überblick über Methoden und Werkzeuge zur Worst-Case Execution Time Analyse für eingebettete Systeme nach DO-178C und ISO 26262.',
    image: 'https://placehold.co/640x360/F7F7F8/1A1A2E?text=Whitepaper',
    readTime: '12 Min. Lesezeit',
  },
  {
    type: 'Technischer Artikel',
    typeColor: '#2563EB',
    title: 'Abstract Interpretation: Die mathematische Grundlage hinter AbsInt',
    description:
      'Wie abstract interpretation als formale Methode funktioniert und warum sie die zuverlässigste Grundlage für statische Code-Analyse ist.',
    image: 'https://placehold.co/640x360/F7F7F8/1A1A2E?text=Tech+Artikel',
    readTime: '8 Min. Lesezeit',
  },
  {
    type: 'Konferenzen & Events',
    typeColor: '#059669',
    title: 'AbsInt auf der EMBEDDED WORLD 2025',
    description:
      'Erfahren Sie, welche Workshops, Vorträge und Live-Demos AbsInt auf der Embedded World 2025 in Nürnberg präsentiert.',
    image: 'https://placehold.co/640x360/F7F7F8/1A1A2E?text=Events',
    readTime: 'Event-Details',
  },
]

export default function ResourcesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-eyebrow">Ressourcen</p>
            <h2 className="section-title">Wissen für Experten</h2>
            <p className="section-subtitle max-w-xl">
              Whitepapers, technische Artikel und Veranstaltungen rund um
              statische Analyse und Timing-Verifikation.
            </p>
          </div>
          <Link to="/ressourcen" className="btn-secondary flex-shrink-0">
            Alle Ressourcen →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to="/ressourcen" className="group block h-full">
                <div className="h-full card-base card-hover flex flex-col p-0 overflow-hidden">
                  {/* Image */}
                  <div className="h-44 overflow-hidden">
                    <img
                      src={res.image}
                      alt={res.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${res.typeColor}12`, color: res.typeColor }}
                      >
                        {res.type}
                      </span>
                      <span className="text-xs text-muted">{res.readTime}</span>
                    </div>
                    <h3 className="font-bold text-charcoal text-sm mb-3 leading-snug flex-1">{res.title}</h3>
                    <p className="text-xs text-muted leading-relaxed mb-4">{res.description}</p>
                    <div
                      className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                      style={{ color: res.typeColor }}
                    >
                      Mehr lesen →
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
