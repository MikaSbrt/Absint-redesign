import CTAContactSection from '../components/home/CTAContactSection'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Page title bar */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-eyebrow">Kontakt</p>
            <h1 className="text-4xl font-extrabold text-charcoal">Sprechen Sie mit uns</h1>
            <p className="text-muted mt-3 max-w-xl">
              Wir freuen uns auf Ihre Anfrage – ob Beratung, Demo oder Partnerschaft.
              Unser Team antwortet innerhalb von 1–2 Werktagen.
            </p>
          </motion.div>
        </div>
      </div>

      <CTAContactSection />
    </div>
  )
}
