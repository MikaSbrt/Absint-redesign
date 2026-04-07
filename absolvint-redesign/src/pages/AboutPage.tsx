import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import InfinityMark from '../components/InfinityMark'

const values = [
  {
    icon: '🎯',
    title: 'Leidenschaft für Technologie',
    text: 'Wir glauben daran, dass Technologie echte Probleme löst – und setzen uns täglich dafür ein, das Potenzial digitaler Lösungen für unsere Kunden zu heben.',
  },
  {
    icon: '🤝',
    title: 'Partnerschaft auf Augenhöhe',
    text: 'Wir verstehen uns als langfristige Partner, nicht als Dienstleister. Ihre Herausforderungen sind unsere Herausforderungen.',
  },
  {
    icon: '💡',
    title: 'Innovation mit Pragmatismus',
    text: 'Wir setzen auf bewährte Methoden und innovative Ansätze gleichermaßen – immer mit dem Ziel, das Beste für Ihr Unternehmen zu erreichen.',
  },
  {
    icon: '🌍',
    title: 'Globales Denken, lokales Handeln',
    text: 'Mit Standorten auf 4 Kontinenten denken wir global – handeln aber immer im Kontext Ihrer lokalen Märkte und Anforderungen.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-white border-b border-border overflow-hidden relative">
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center pr-10">
          <InfinityMark className="w-64 h-44" opacity={0.07} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="section-eyebrow">Über uns</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-charcoal mb-5 leading-tight">
              Technologie mit<br />
              <span className="text-primary">Leidenschaft</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Bei der Absolvint GmbH setzen wir uns leidenschaftlich dafür ein,
              die Kraft der Technologie zu nutzen, um Unternehmen dabei zu helfen,
              in einer sich ständig verändernden digitalen Landschaft erfolgreich zu sein.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-border rounded-2xl p-8 lg:p-12 shadow-card mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-l-2xl" />
          <div className="pl-4">
            <p className="text-lg lg:text-xl text-charcoal leading-relaxed font-medium italic">
              „Mit einem Team von Experten und Innovatoren entwickeln wir hochmoderne
              Softwarelösungen, die komplexe Probleme vereinfachen, das Wachstum
              vorantreiben und das Kundenerlebnis verbessern."
            </p>
            <p className="mt-4 text-sm text-muted">
              — Absolvint GmbH, Hamburg
            </p>
          </div>
        </motion.div>

        {/* Timeline / Geschichte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-8">Unsere Geschichte</h2>
          <div className="relative pl-8 border-l-2 border-gray-200 space-y-8">
            {[
              {
                year: '~1999',
                title: 'Gründung in Hamburg',
                text: 'Absolvint wird in Hamburg gegründet – mit der Überzeugung, dass IT-Kompetenz und persönliches Engagement Unternehmen weiterbringen.',
              },
              {
                year: '2005+',
                title: 'Expansion nach Indien',
                text: 'Eröffnung der Entwicklungszentren in Hyderabad und Bangalore – Zugang zu weltklasse IT-Talenten und 24/7-Entwicklungskapazität.',
              },
              {
                year: '2010+',
                title: 'US-Markteintritt',
                text: 'Absolvint eröffnet Büros in Tampa und Austin – um amerikanische Kunden direkt vor Ort zu betreuen.',
              },
              {
                year: '2015+',
                title: 'Afrika-Expansion',
                text: 'Pionierarbeit in aufstrebenden Märkten: Standorte in Addis Abeba und Durban erschließen das enorme Potenzial des afrikanischen Kontinents.',
              },
              {
                year: 'Heute',
                title: '25 Jahre – 8 Standorte',
                text: 'Absolvint ist ein globaler IT-Partner mit 25 Jahren Erfahrung, 8 Standorten auf 4 Kontinenten und hunderten erfolgreich umgesetzten Projekten.',
              },
            ].map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary border-2 border-white shadow" />
                <div className="text-xs font-bold text-primary mb-1">{item.year}</div>
                <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-8">Unsere Werte</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="card-base card-hover flex gap-4"
              >
                <div className="text-2xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1.5">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legal info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-border rounded-2xl p-8 shadow-card mb-8"
        >
          <h2 className="text-xl font-bold text-charcoal mb-4">Unternehmensdaten</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Firma', value: 'Absolvint GmbH' },
              { label: 'Sitz', value: 'Hamburg, Deutschland' },
              { label: 'Adresse', value: 'Sülldorfer Kirchenweg 139, 22589 Hamburg' },
              { label: 'Handelsregister', value: 'HRB 120442 · Amtsgericht Hamburg' },
              { label: 'USt-IDNr.', value: 'DE273054887' },
              { label: 'Gegründet', value: 'ca. 1999' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="text-muted w-36 flex-shrink-0">{item.label}:</span>
                <span className="text-charcoal font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <Link to="/contact" className="btn-primary">
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  )
}
