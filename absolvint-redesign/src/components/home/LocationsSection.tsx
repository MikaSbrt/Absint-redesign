import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const regions = [
  {
    flag: '🇩🇪',
    country: 'Deutschland',
    cities: ['Hamburg (Hauptsitz)', 'Bremen'],
    color: '#E8193C',
    description: 'Unser Gründungsstandort und Hauptsitz. Von Hamburg aus koordinieren wir alle europäischen Aktivitäten.',
  },
  {
    flag: '🇮🇳',
    country: 'Indien',
    cities: ['Hyderabad', 'Bangalore'],
    color: '#FF6B00',
    description: 'Unser Entwicklungszentrum in Indien – mit hochqualifizierten Experten in Technologie-Metropolen.',
  },
  {
    flag: '🇺🇸',
    country: 'USA',
    cities: ['Tampa, Florida', 'Austin, Texas'],
    color: '#2563EB',
    description: 'Präsenz in zwei der dynamischsten Tech-Märkte der USA – für unsere amerikanischen Kunden nah dran.',
  },
  {
    flag: '🌍',
    country: 'Afrika',
    cities: ['Addis Abeba, Äthiopien', 'Durban, Südafrika'],
    color: '#059669',
    description: 'Wachstumsmärkte der Zukunft. Absolvint ist früh dabei – mit Standorten in Äthiopien und Südafrika.',
  },
]

export default function LocationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-eyebrow">Globale Präsenz</p>
            <h2 className="section-title">Wir sind dort, wo Sie sind</h2>
            <p className="section-subtitle max-w-xl">
              8 Standorte auf 4 Kontinenten – für maximale Nähe zu unseren Kunden
              und Zugang zu internationalen Talenten.
            </p>
          </div>
          <Link to="/locations" className="btn-secondary flex-shrink-0">
            Alle Standorte →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {regions.map((r, i) => (
            <motion.div
              key={r.country}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="card-base card-hover h-full flex flex-col" style={{ borderTopColor: r.color, borderTopWidth: 3 }}>
                {/* Flag + country */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{r.flag}</span>
                  <h3 className="text-lg font-bold text-charcoal">{r.country}</h3>
                </div>

                {/* Cities */}
                <div className="flex flex-col gap-1.5 mb-4 flex-1">
                  {r.cities.map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: r.color }} />
                      <span className="text-sm text-charcoal font-medium">{city}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted leading-relaxed border-t border-gray-100 pt-4">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* World map illustration (abstract) */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white border border-border rounded-2xl p-6 shadow-card overflow-hidden relative">
            <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80">
              {/* Simple world map outline paths (stylized) */}
              {/* Europe/Africa */}
              <ellipse cx="450" cy="130" rx="390" ry="110" fill="none" stroke="#E5E7EB" strokeWidth="1" />
              <ellipse cx="450" cy="130" rx="320" ry="80" fill="none" stroke="#F3F4F6" strokeWidth="1" />
              <ellipse cx="450" cy="130" rx="240" ry="55" fill="none" stroke="#F3F4F6" strokeWidth="1" />

              {/* Decorative continent blobs */}
              {/* Europe */}
              <rect x="380" y="70" width="80" height="55" rx="12" fill="#F0F0F5" />
              {/* North America */}
              <rect x="120" y="60" width="110" height="80" rx="16" fill="#F0F0F5" />
              {/* South America */}
              <rect x="175" y="155" width="65" height="90" rx="14" fill="#F0F0F5" />
              {/* Africa */}
              <rect x="410" y="120" width="75" height="110" rx="16" fill="#F0F0F5" />
              {/* Asia */}
              <rect x="560" y="50" width="160" height="120" rx="18" fill="#F0F0F5" />
              {/* Australia */}
              <rect x="680" y="185" width="80" height="55" rx="14" fill="#F0F0F5" />

              {/* Location dots – Hamburg */}
              <circle cx="435" cy="85" r="7" fill="#E8193C" opacity="0.9" />
              <circle cx="435" cy="85" r="14" fill="#E8193C" opacity="0.15" />

              {/* Hyderabad */}
              <circle cx="630" cy="135" r="6" fill="#E8193C" opacity="0.9" />
              <circle cx="630" cy="135" r="12" fill="#E8193C" opacity="0.15" />

              {/* Bangalore */}
              <circle cx="618" cy="148" r="5" fill="#E8193C" opacity="0.8" />

              {/* Tampa */}
              <circle cx="195" cy="110" r="6" fill="#E8193C" opacity="0.9" />
              <circle cx="195" cy="110" r="12" fill="#E8193C" opacity="0.15" />

              {/* Austin */}
              <circle cx="185" cy="118" r="5" fill="#E8193C" opacity="0.8" />

              {/* Addis Abeba */}
              <circle cx="470" cy="165" r="6" fill="#E8193C" opacity="0.9" />
              <circle cx="470" cy="165" r="12" fill="#E8193C" opacity="0.15" />

              {/* Durban */}
              <circle cx="453" cy="195" r="5" fill="#E8193C" opacity="0.8" />

              {/* Connection lines */}
              <line x1="435" y1="85" x2="630" y2="135" stroke="#E8193C" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" />
              <line x1="435" y1="85" x2="195" y2="110" stroke="#E8193C" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" />
              <line x1="435" y1="85" x2="470" y2="165" stroke="#E8193C" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" />

              {/* Labels */}
              <text x="445" y="80" fill="#E8193C" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Hamburg</text>
              <text x="640" y="130" fill="#E8193C" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Hyderabad</text>
              <text x="205" y="106" fill="#E8193C" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Tampa</text>
              <text x="475" y="161" fill="#E8193C" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Addis Abeba</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
