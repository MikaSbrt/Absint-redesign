import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import InfinityMark from '../InfinityMark'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
})

const locationBadges = [
  { flag: '🇩🇪', city: 'Hamburg' },
  { flag: '🇮🇳', city: 'Hyderabad' },
  { flag: '🇺🇸', city: 'Austin' },
  { flag: '🌍', city: 'Global' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
      </div>

      {/* Decorative InfinityMark – large, faded background */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block">
        <InfinityMark className="w-[520px] h-[340px]" opacity={0.05} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">
          {/* LEFT: Text */}
          <div>
            <motion.p className="section-eyebrow" {...fadeUp(0.1)}>
              IT-Dienstleistungen aus Hamburg
            </motion.p>

            <motion.h1
              className="text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-charcoal leading-[1.1] mb-6"
              {...fadeUp(0.2)}
            >
              Ihr Partner für digitale Lösungen –&nbsp;
              <span className="text-primary">seit 25 Jahren.</span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-muted leading-relaxed mb-8 max-w-xl"
              {...fadeUp(0.3)}
            >
              Bei der Absolvint GmbH entwickeln wir hochmoderne Softwarelösungen,
              die Ihr Unternehmen voranbringen. Von der Individualentwicklung bis
              zur Cloud-Infrastruktur – wir sind Ihr verlässlicher IT-Partner.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-10" {...fadeUp(0.4)}>
              <Link to="/contact" className="btn-primary px-7 py-3.5 text-base">
                Beratung anfragen
              </Link>
              <Link to="/services" className="btn-secondary px-7 py-3.5 text-base">
                Unsere Services entdecken
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Location badges */}
            <motion.div {...fadeUp(0.5)}>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-3">
                Unsere Standorte
              </p>
              <div className="flex flex-wrap gap-2">
                {locationBadges.map((b) => (
                  <span
                    key={b.city}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border rounded-full text-xs font-semibold text-charcoal shadow-card"
                  >
                    <span>{b.flag}</span>
                    {b.city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Abstract IT illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Floating InfinityMark decoration */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-12 -right-6 pointer-events-none"
            >
              <InfinityMark className="w-32 h-20" opacity={0.18} />
            </motion.div>

            {/* Main dashboard card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* App header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-charcoal">Absolvint Dashboard</span>
                </div>
                <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">● Live</span>
              </div>

              {/* KPI Row */}
              <div className="grid grid-cols-3 gap-px bg-gray-100">
                {[
                  { label: 'Projekte', value: '347+', icon: '📁', color: '#E8193C' },
                  { label: 'Standorte', value: '8', icon: '🌍', color: '#1B5E20' },
                  { label: 'Erfahrung', value: '25J', icon: '⭐', color: '#2563EB' },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white px-5 py-4 text-center">
                    <div className="text-xl mb-0.5">{kpi.icon}</div>
                    <div className="text-xl font-extrabold" style={{ color: kpi.color }}>{kpi.value}</div>
                    <div className="text-xs text-muted">{kpi.label}</div>
                  </div>
                ))}
              </div>

              {/* Code editor section */}
              <div className="bg-[#12121E] p-4 mx-4 my-4 rounded-xl">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                  <span className="text-gray-600 text-xs ml-2 font-mono">solution.ts</span>
                </div>
                <div className="font-mono text-xs leading-6 space-y-0.5">
                  <div>
                    <span className="text-[#C792EA]">const</span>
                    <span className="text-[#82AAFF]"> solution</span>
                    <span className="text-gray-300"> = </span>
                    <span className="text-[#C792EA]">await</span>
                    <span className="text-gray-300"> absolvint.</span>
                    <span className="text-[#82AAFF]">develop</span>
                    <span className="text-gray-300">({'{'}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#BAEFB2]">client</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-[#F78C6C]">"YourBusiness"</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#BAEFB2]">stack</span>
                    <span className="text-gray-300">: [</span>
                    <span className="text-[#F78C6C]">"Cloud"</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-[#F78C6C]">"SAP"</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-[#F78C6C]">"AI"</span>
                    <span className="text-gray-300">],</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#BAEFB2]">delivery</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-[#E8193C]">"on-time"</span>
                  </div>
                  <div>
                    <span className="text-gray-300">{'}'});</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#E8193C]">// ✓</span>
                    <span className="text-[#BAEFB2]">Bereit für Ihre digitale Transformation</span>
                  </div>
                </div>
              </div>

              {/* Cloud region pills */}
              <div className="px-4 pb-4">
                <p className="text-xs text-muted mb-2 font-medium">Aktive Regionen</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'EU West', flag: '🇩🇪', active: true },
                    { name: 'Asia Pacific', flag: '🇮🇳', active: true },
                    { name: 'US East', flag: '🇺🇸', active: true },
                    { name: 'Africa', flag: '🌍', active: true },
                  ].map((r) => (
                    <span key={r.name} className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${r.active ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-500'}`}>
                      {r.flag} {r.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-card-hover border border-border px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-charcoal">Projekt abgeschlossen</div>
                <div className="text-xs text-muted">Pünktlich & im Budget</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 left-6 bg-white rounded-xl shadow-card-hover border border-border px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-lg">
                🚀
              </div>
              <div>
                <div className="text-xs font-semibold text-charcoal">25 Jahre Erfahrung</div>
                <div className="text-xs text-muted">Seit 1999 für Sie da</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
