import { useState } from 'react'
import { motion } from 'framer-motion'
import InfinityMark from '../InfinityMark'

export default function CTAContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#F0F0F5' }}>
      {/* Red accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

      {/* Decorative InfinityMark – right side */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <InfinityMark className="w-80 h-52" opacity={0.06} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Headline */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Kontakt</p>
          <h2 className="section-title text-4xl lg:text-5xl max-w-3xl mx-auto">
            Bereit für Ihre digitale Transformation?
          </h2>
          <p className="section-subtitle mx-auto mt-3">
            Sprechen Sie mit unseren Experten und erfahren Sie, wie wir Ihr Unternehmen
            voranbringen können.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-border shadow-card p-8">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">Nachricht gesendet!</h3>
                  <p className="text-muted text-sm">
                    Wir melden uns innerhalb von 1–2 Werktagen bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="max@unternehmen.de"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      placeholder="Muster GmbH"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Wie können wir Ihnen helfen?"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 text-base">
                    Nachricht absenden
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-xs text-muted text-center">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Hauptsitz',
                value: 'Absolvint GmbH\nSülldorfer Kirchenweg 139\n22589 Hamburg',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'E-Mail',
                value: 'info@absolvint.de',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                label: 'Handelsregister',
                value: 'HRB 120442 · Amtsgericht Hamburg\nUSt-IDNr.: DE273054887',
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center text-primary flex-shrink-0 shadow-card">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted mb-1">{item.label}</div>
                  <div className="text-sm text-charcoal whitespace-pre-line leading-relaxed">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Standorte quick list */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-muted mb-3">Alle Standorte</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { flag: '🇩🇪', city: 'Hamburg' },
                  { flag: '🇩🇪', city: 'Bremen' },
                  { flag: '🇮🇳', city: 'Hyderabad' },
                  { flag: '🇮🇳', city: 'Bangalore' },
                  { flag: '🇺🇸', city: 'Tampa' },
                  { flag: '🇺🇸', city: 'Austin' },
                  { flag: '🌍', city: 'Addis Abeba' },
                  { flag: '🌍', city: 'Durban' },
                ].map((loc) => (
                  <span key={loc.city} className="text-xs text-charcoal flex items-center gap-1.5">
                    <span>{loc.flag}</span>
                    {loc.city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
