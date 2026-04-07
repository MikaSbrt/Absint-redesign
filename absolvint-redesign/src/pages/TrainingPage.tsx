import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const trainingAreas = [
  {
    module: 'SAP S/4HANA',
    description: 'Grundlagen und Advanced-Kurse für das führende ERP-System – praxisnah und zertifizierungsorientiert.',
    level: 'Alle Levels',
  },
  {
    module: 'SAP Fiori & UX',
    description: 'Modernes UX-Design und Anwender-Training für SAP Fiori Apps – mehr Akzeptanz, weniger Supportaufwand.',
    level: 'Einsteiger & Fortgeschrittene',
  },
  {
    module: 'SAP BTP',
    description: 'Business Technology Platform – Schulungen zur Cloud-Integration, Extension Suite und Low-Code-Entwicklung.',
    level: 'Fortgeschrittene',
  },
  {
    module: 'Cybersecurity Awareness',
    description: 'Sicherheitsschulungen für alle Mitarbeiter – damit Phishing, Social Engineering und Datenpannen keine Chance haben.',
    level: 'Alle Mitarbeiter',
  },
  {
    module: 'Agile & Scrum',
    description: 'Scrum Master und Product Owner Trainings – für agile Teams, die wirklich liefern.',
    level: 'Alle Levels',
  },
  {
    module: 'Cloud Fundamentals',
    description: 'Einführung in AWS, Azure und Google Cloud – für technische und nicht-technische Teilnehmer.',
    level: 'Einsteiger',
  },
]

export default function TrainingPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="text-sm text-muted hover:text-primary transition-colors mb-6 inline-flex items-center gap-1.5"
            >
              ← Alle Services
            </Link>
            <div className="flex items-center gap-4 mt-4 mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: '#7C3AED12' }}
              >
                🎓
              </div>
              <div>
                <p className="section-eyebrow mb-0">Service</p>
                <h1 className="text-4xl font-extrabold text-charcoal leading-tight">
                  Schulungen & Training
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted leading-relaxed max-w-2xl">
              SAP-Schulungen und IT-Trainings für Ihr Team – praxisnah, effektiv
              und direkt anwendbar im Arbeitsalltag.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Benefits row */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { icon: '⚡', title: 'Effizienzsteigerung', text: 'Gut geschulte Teams arbeiten schneller und mit weniger Fehlern.' },
            { icon: '😊', title: 'Benutzerfreundlichkeit', text: 'Training fördert die Akzeptanz neuer Software und reduziert Support-Anfragen.' },
            { icon: '🔒', title: 'Erhöhte Sicherheit', text: 'Geschulte Teams erkennen Bedrohungen früher und handeln sicherer.' },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-base text-center"
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-charcoal mb-2">{b.title}</h3>
              <p className="text-sm text-muted">{b.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Training catalog */}
        <h2 className="text-2xl font-bold text-charcoal mb-6">Schulungsangebot</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {trainingAreas.map((t, i) => (
            <motion.div
              key={t.module}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-base card-hover flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-charcoal">{t.module}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-50 text-primary flex-shrink-0">
                  {t.level}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{t.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-primary">
            Schulung anfragen
          </Link>
          <Link to="/services" className="btn-secondary">
            Zurück zu allen Services
          </Link>
        </div>
      </div>
    </div>
  )
}
