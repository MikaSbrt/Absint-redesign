import { motion } from 'framer-motion'

export default function TechnologyPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="section-eyebrow">Technologie</p>
          <h1 className="section-title text-5xl mb-4">Abstract Interpretation</h1>
          <p className="section-subtitle mb-8">
            Die mathematische Grundlage aller AbsInt-Werkzeuge – formal korrekt, vollständig und beweisbar.
          </p>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-card">
            <h2 className="text-xl font-bold text-charcoal mb-4">Seite in Entwicklung</h2>
            <p className="text-muted">
              Diese Seite wird in einem der nächsten Iterationsschritte mit detaillierten Informationen
              zur abstract interpretation, zur Prozessor-Modellierung und zum wissenschaftlichen Hintergrund
              der AbsInt-Technologie ausgebaut.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
