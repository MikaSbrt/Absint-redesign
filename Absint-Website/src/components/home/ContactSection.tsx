import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#F0F0F5' }}>
      {/* Subtle red accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      <div className="absolute -right-32 -bottom-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Kontakt</p>
          <h2 className="section-title text-4xl lg:text-5xl max-w-3xl mx-auto">
            Sprechen Sie mit einem Experten über Ihre Embedded-Software-Herausforderungen
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Unser Experten-Team berät Sie kostenlos zu Ihren Verifikations- und Timing-Anforderungen.
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
                <div className="text-center py-8">
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">Vorname *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                        placeholder="Max"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">Nachname *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">E-Mail *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                      placeholder="max.mustermann@unternehmen.de"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">Unternehmen</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                      placeholder="Muster GmbH"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">Branche</label>
                    <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background">
                      <option value="">Bitte wählen …</option>
                      <option>Automotive</option>
                      <option>Aerospace</option>
                      <option>Bahn</option>
                      <option>Medizintechnik</option>
                      <option>Industrieautomation</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">Ihre Anfrage *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background resize-none"
                      placeholder="Beschreiben Sie kurz Ihr Projekt und Ihre Herausforderungen …"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 text-base">
                    Nachricht senden
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Adresse',
                value: 'AbsInt Angewandte Informatik GmbH\nScience Park 1\n66123 Saarbrücken, Deutschland',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'E-Mail',
                value: 'info@absint.com',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: 'Telefon',
                value: '+49 681 383 360 0',
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center text-primary flex-shrink-0 shadow-card">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted mb-1">{item.label}</div>
                  <div className="text-sm text-charcoal whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Quick links */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-muted mb-3">Schnelle Links</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Software-Demo anfordern', href: '#' },
                  { label: 'Evaluierungslizenz beantragen', href: '#' },
                  { label: 'Technischen Support kontaktieren', href: '#' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-primary font-medium hover:text-primary-dark transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
