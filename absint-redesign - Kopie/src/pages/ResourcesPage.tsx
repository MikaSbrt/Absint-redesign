import { motion } from 'framer-motion'

const resources = [
  { type: 'Whitepaper',          color: '#C8102E', title: 'WCET-Analyse in sicherheitskritischen Systemen',                          date: 'März 2025' },
  { type: 'Technischer Artikel', color: '#2563EB', title: 'Abstract Interpretation – Grundlagen und Anwendungen',                      date: 'Feb. 2025' },
  { type: 'Konferenz',           color: '#059669', title: 'AbsInt auf der Embedded World 2025',                                        date: 'Apr. 2025' },
  { type: 'Whitepaper',          color: '#C8102E', title: 'Stack-Overflow-Prävention in AUTOSAR-Systemen',                            date: 'Jan. 2025' },
  { type: 'Technischer Artikel', color: '#2563EB', title: 'CompCert: Warum verifizierte Compiler wichtig sind',                        date: 'Dez. 2024' },
  { type: 'Konferenz',           color: '#059669', title: 'WCET Workshop 2024 – Vortrag: Multicore Timing Analysis',                   date: 'Nov. 2024' },
]

export default function ResourcesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Ressourcen</p>
          <h1 className="section-title text-5xl mb-4">Wissen & Ressourcen</h1>
          <p className="section-subtitle mb-12">
            Whitepapers, technische Artikel und Veranstaltungen rund um statische Analyse und Timing-Verifikation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-base card-hover flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${r.color}12`, color: r.color }}>
                  {r.type}
                </span>
                <span className="text-xs text-muted">{r.date}</span>
              </div>
              <h3 className="font-bold text-charcoal text-sm leading-snug flex-1 mb-4">{r.title}</h3>
              <a href="#" className="text-xs font-semibold flex items-center gap-1 transition-all" style={{ color: r.color }}>
                Mehr lesen →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
