import { motion } from 'framer-motion'

const features = [
  {
    icon: '⭐',
    title: '25 Jahre Erfahrung',
    description:
      'Seit einem Vierteljahrhundert unterstützen wir Unternehmen bei ihrer digitalen Transformation – mit fundiertem Know-how und bewährten Methoden.',
    color: '#E8193C',
  },
  {
    icon: '🌍',
    title: 'Globale Präsenz',
    description:
      'Mit Standorten in Deutschland, Indien, den USA und Afrika sind wir nah an Ihren Märkten – und verstehen internationale Anforderungen.',
    color: '#2563EB',
  },
  {
    icon: '🎯',
    title: 'Individuelle Lösungen',
    description:
      'Keine Standardlösungen – wir entwickeln genau das, was Ihr Unternehmen braucht. Jedes Projekt, jede Anforderung wird individuell gedacht.',
    color: '#059669',
  },
  {
    icon: '🔄',
    title: 'Ganzheitlicher Ansatz',
    description:
      'Von der Entwicklung über Beratung bis zum Betrieb – alles aus einer Hand. Absolvint ist Ihr einziger Ansprechpartner für alle IT-Themen.',
    color: '#7C3AED',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Warum Absolvint</p>
          <h2 className="section-title">Warum Unternehmen uns vertrauen</h2>
          <p className="section-subtitle mx-auto">
            Wir verbinden technische Exzellenz mit echtem Verständnis für Ihre Geschäftsprozesse.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-base card-hover h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                  style={{ background: `${f.color}10` }}
                >
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-charcoal mb-3">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 w-8 rounded-full opacity-40"
                  style={{ background: f.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
