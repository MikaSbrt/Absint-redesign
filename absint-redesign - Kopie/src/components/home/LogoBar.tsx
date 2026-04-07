const partners = [
  'Airbus',
  'Bosch',
  'Continental',
  'Daimler',
  'Siemens',
  'Infineon',
  'NXP Semiconductors',
  'Renault',
  'Thales',
  'DENSO',
  'Aptiv',
  'ZF Friedrichshafen',
  'Rolls-Royce',
  'Safran',
  'Honeywell',
]

export default function LogoBar() {
  const doubled = [...partners, ...partners]

  return (
    <section className="bg-white border-y border-border py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-5">
        <p className="text-center text-xs text-muted font-medium uppercase tracking-widest">
          Eingesetzt von weltweit führenden Unternehmen in Aerospace, Automotive & Industrie
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 min-w-[160px]"
            >
              {/* Logo placeholder – styled as real logo text */}
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                <div className="w-5 h-5 bg-gray-300 rounded-sm flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-500">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
