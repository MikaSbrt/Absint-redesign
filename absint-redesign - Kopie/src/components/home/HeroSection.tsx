import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 24 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const customerLogos = [
  'Airbus', 'Bosch', 'Continental', 'Daimler', 'Siemens', 'Infineon', 'NXP',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full bg-primary/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">
          {/* LEFT: Text + CTAs */}
          <div>
            <motion.p
              className="section-eyebrow"
              {...fadeUp(0.1)}
            >
              Statische Analyse & Timing-Verifikation
            </motion.p>

            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-charcoal leading-[1.1] mb-6"
              {...fadeUp(0.2)}
            >
              Verifikations&shy;werkzeuge für sicherheits&shy;kritische eingebettete Software
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-muted leading-relaxed mb-8 max-w-xl"
              {...fadeUp(0.3)}
            >
              AbsInt entwickelt Werkzeuge zur Software-Verifikation,
              Worst-Case-Timing-Analyse und Compiler-Technologie für
              Automotive, Aerospace und weitere sicherheitskritische Branchen.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              {...fadeUp(0.4)}
            >
              <Link to="/kontakt" className="btn-primary px-7 py-3.5 text-base">
                Demo anfragen
              </Link>
              <Link to="/produkte" className="btn-secondary px-7 py-3.5 text-base">
                Produkte entdecken
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Customer logos */}
            <motion.div {...fadeUp(0.5)}>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-4">
                Vertraut von führenden Unternehmen in
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {customerLogos.map((logo) => (
                  <span
                    key={logo}
                    className="text-sm font-semibold text-gray-300 hover:text-gray-400 transition-colors"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              {...fadeUp(0.55)}
            >
              {['DO-178C', 'IEC 61508', 'ISO 26262', 'EN 50128'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-white border border-border rounded-full text-xs font-semibold text-gray-600 shadow-card"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Dashboard illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Red geometric decorative element */}
            <motion.div
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-4 w-24 h-24 opacity-15 pointer-events-none"
            >
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                <polygon points="48,4 92,92 4,92" fill="#C8102E" />
              </svg>
            </motion.div>

            {/* Code editor card */}
            <div className="relative bg-[#12121E] rounded-2xl shadow-2xl overflow-hidden border border-white/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#0D0D1A] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                </div>
                <span className="text-gray-500 text-xs ml-3 font-mono">timing_analysis.c</span>
              </div>

              {/* Code lines */}
              <div className="px-5 py-5 font-mono text-xs leading-6 select-none">
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">1</span>
                  <span><span className="text-[#C792EA]">void</span> <span className="text-[#82AAFF]">analyze_wcet</span><span className="text-gray-300">(Task *task) {'{'}</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">2</span>
                  <span className="ml-4"><span className="text-[#C792EA]">int</span> <span className="text-[#BAEFB2]">wcet</span> <span className="text-gray-300">= 0;</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">3</span>
                  <span className="ml-4"><span className="text-[#C8102E]">// Worst-Case Execution Time</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">4</span>
                  <span className="ml-4"><span className="text-[#82AAFF]">for_each_path</span><span className="text-gray-300">(task, path) {'{'}</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">5</span>
                  <span className="ml-8"><span className="text-[#BAEFB2]">wcet</span> <span className="text-gray-300">= <span className="text-[#82AAFF]">max</span>(wcet, path.cycles);</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">6</span>
                  <span className="ml-4 text-gray-300">{'}'}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">7</span>
                  <span className="ml-4"><span className="text-[#82AAFF]">report_bound</span><span className="text-gray-300">(task, <span className="text-[#BAEFB2]">wcet</span>);</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 select-none w-5 text-right flex-shrink-0">8</span>
                  <span className="text-gray-300">{'}'}</span>
                </div>
              </div>

              {/* Timing graph */}
              <div className="mx-5 mb-5 bg-[#0D0D1A] rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-xs font-semibold">WCET Analyse</span>
                  <span className="text-[#C8102E] text-xs font-bold bg-[#C8102E]/10 px-2 py-0.5 rounded">
                    1.847 µs (garantiert)
                  </span>
                </div>
                {/* SVG bar chart */}
                <svg viewBox="0 0 380 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  {/* Grid lines */}
                  {[20, 40, 60].map((y) => (
                    <line key={y} x1="0" y1={y} x2="380" y2={y} stroke="#1E1E35" strokeWidth="1" />
                  ))}
                  {/* Bars */}
                  {[
                    { x: 10,  h: 35, color: '#3B82F6' },
                    { x: 60,  h: 52, color: '#3B82F6' },
                    { x: 110, h: 28, color: '#3B82F6' },
                    { x: 160, h: 60, color: '#C8102E' },
                    { x: 210, h: 45, color: '#3B82F6' },
                    { x: 260, h: 38, color: '#3B82F6' },
                    { x: 310, h: 55, color: '#3B82F6' },
                  ].map((bar, i) => (
                    <g key={i}>
                      <rect x={bar.x} y={80 - bar.h} width="35" height={bar.h} fill={bar.color} rx="3" opacity="0.85" />
                    </g>
                  ))}
                  {/* WCET line */}
                  <line x1="0" y1="20" x2="380" y2="20" stroke="#C8102E" strokeWidth="1.5" strokeDasharray="6,3" />
                  <text x="5" y="16" fill="#C8102E" fontSize="8" fontFamily="monospace">WCET bound</text>
                </svg>
              </div>
            </div>

            {/* Floating result badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card-hover border border-border px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-charcoal">Zertifizierungsreif</div>
                <div className="text-xs text-muted">DO-178C Level A konform</div>
              </div>
            </motion.div>

            {/* Floating coverage badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-5 left-8 bg-white rounded-xl shadow-card-hover border border-border px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-charcoal">100 % Pfadabdeckung</div>
                <div className="text-xs text-muted">Alle Ausführungspfade analysiert</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
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
