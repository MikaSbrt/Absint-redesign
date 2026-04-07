import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Quellcode analysieren',
    description:
      'AbsInt-Werkzeuge analysieren direkt den Quellcode oder Binärcode Ihrer eingebetteten Software – ohne Testausführung oder Messungen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: '#C8102E',
  },
  {
    number: '02',
    title: 'Timing- & Sicherheitsrisiken erkennen',
    description:
      'Automatische Erkennung von WCET-Grenzen, Stack-Überläufen, Laufzeitfehlern und anderen sicherheitskritischen Eigenschaften.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7l2 2 4-4" />
      </svg>
    ),
    color: '#2563EB',
  },
  {
    number: '03',
    title: 'Zertifizierbare Ergebnisse liefern',
    description:
      'Formal verifizierte Berichte und Nachweise, die direkt in Zertifizierungsprozessen nach DO-178C, ISO 26262, IEC 61508 verwendet werden können.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: '#059669',
  },
]

export default function TechProcess() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Der Prozess</p>
          <h2 className="section-title">Von der Analyse zur Zertifizierung</h2>
          <p className="section-subtitle mx-auto">
            Drei Schritte zur formal verifizierten, zertifizierungsreifen eingebetteten Software.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary via-blue-500 to-emerald-500 opacity-30" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center lg:text-left"
              >
                {/* Step number + icon */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-5">
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}12`, color: step.color }}
                  >
                    {step.icon}
                    {/* Number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 block mb-0.5">Schritt {step.number}</span>
                    <h3 className="text-lg font-bold text-charcoal">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>

                {/* Arrow for mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
