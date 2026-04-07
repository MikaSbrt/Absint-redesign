import { motion } from 'framer-motion'

const locations = [
  {
    region: 'Deutschland',
    flag: '🇩🇪',
    color: '#E8193C',
    offices: [
      {
        city: 'Hamburg',
        label: 'Hauptsitz',
        address: 'Sülldorfer Kirchenweg 139\n22589 Hamburg',
        description:
          'Unser Gründungsstandort und globales Hauptquartier. Von Hamburg aus koordinieren wir alle Aktivitäten und begleiten unsere europäischen Kunden.',
      },
      {
        city: 'Bremen',
        label: 'Büro',
        address: 'Bremen, Deutschland',
        description:
          'Unser Bremer Team betreut Kunden in der norddeutschen Region und pflegt enge Kontakte zur lokalen Wirtschaft.',
      },
    ],
  },
  {
    region: 'Indien',
    flag: '🇮🇳',
    color: '#FF6B00',
    offices: [
      {
        city: 'Hyderabad',
        label: 'Entwicklungszentrum',
        address: 'Hyderabad, Telangana',
        description:
          'Unser größtes Entwicklungszentrum mit hochqualifizierten Software-Ingenieuren und einem erfahrenen SAP-Expertenteam.',
      },
      {
        city: 'Bangalore',
        label: 'Tech Hub',
        address: 'Bangalore, Karnataka',
        description:
          'Im Silicon Valley Indiens sind wir nah an innovativen Tech-Trends und haben Zugang zu Top-Talenten der IT-Branche.',
      },
    ],
  },
  {
    region: 'USA',
    flag: '🇺🇸',
    color: '#2563EB',
    offices: [
      {
        city: 'Tampa, Florida',
        label: 'US-Niederlassung',
        address: 'Tampa, FL',
        description:
          'Unsere US-Präsenz im Südosten – für amerikanische Kunden in der Eastern Time Zone und der wachsenden Tech-Szene Floridas.',
      },
      {
        city: 'Austin, Texas',
        label: 'West Coast Hub',
        address: 'Austin, TX',
        description:
          'Austin ist eines der dynamischsten Tech-Ökosysteme der USA. Hier sind wir nah an unseren amerikanischen Technologie-Partnern.',
      },
    ],
  },
  {
    region: 'Afrika',
    flag: '🌍',
    color: '#059669',
    offices: [
      {
        city: 'Addis Abeba',
        label: 'Äthiopien',
        address: 'Addis Abeba, Äthiopien',
        description:
          'Als wirtschaftliches Zentrum Afrikas bietet Addis Abeba enormes Wachstumspotenzial. Absolvint ist früh in diesem aufstrebenden Markt präsent.',
      },
      {
        city: 'Durban',
        label: 'Südafrika',
        address: 'Durban, KwaZulu-Natal',
        description:
          'Südafrikas drittgrößte Stadt ist ein wichtiges Wirtschafts- und Handelszentrum – unser Tor zu den Märkten im südlichen Afrika.',
      },
    ],
  },
]

export default function LocationsPage() {
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
            <p className="section-eyebrow">Globale Präsenz</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
              Wir sind dort, wo Sie sind
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              8 Standorte auf 4 Kontinenten – für maximale Nähe zu unseren Kunden
              und Zugang zu internationalem Talent.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: '4', label: 'Kontinente' },
            { value: '8', label: 'Standorte' },
            { value: '25', label: 'Jahre global' },
            { value: '24/7', label: 'Zeitzonencoverage' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-border rounded-xl p-5 text-center shadow-card"
            >
              <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Regions */}
        <div className="space-y-10">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.region}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Region header */}
              <div
                className="flex items-center gap-3 mb-5 pb-3 border-b-2"
                style={{ borderColor: loc.color }}
              >
                <span className="text-3xl">{loc.flag}</span>
                <h2 className="text-2xl font-bold text-charcoal">{loc.region}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {loc.offices.map((office) => (
                  <div
                    key={office.city}
                    className="card-base card-hover"
                    style={{ borderLeftColor: loc.color, borderLeftWidth: 3 }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-charcoal">{office.city}</h3>
                        <p className="text-xs text-muted whitespace-pre-line">{office.address}</p>
                      </div>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{ background: `${loc.color}12`, color: loc.color }}
                      >
                        {office.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{office.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
