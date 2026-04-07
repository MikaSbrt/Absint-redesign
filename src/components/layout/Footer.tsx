import { Link } from 'react-router-dom'
import AbsIntLogo from '../AbsIntLogo'

const columns = [
  {
    title: 'Produkte',
    links: [
      { label: 'aiT',            href: '/produkte/ait' },
      { label: 'StackAnalyzer',  href: '/produkte/stackanalyzer' },
      { label: 'Astrée',         href: '/produkte/astree' },
      { label: 'CompCert',       href: '/produkte/compcert' },
      { label: 'Alle Produkte',  href: '/produkte' },
    ],
  },
  {
    title: 'Branchen',
    links: [
      { label: 'Automotive',          href: '/branchen' },
      { label: 'Aerospace',           href: '/branchen' },
      { label: 'Bahn',                href: '/branchen' },
      { label: 'Medizintechnik',      href: '/branchen' },
      { label: 'Industrieautomation', href: '/branchen' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Über AbsInt',   href: '/unternehmen' },
      { label: 'Technologie',   href: '/technologie' },
      { label: 'Ressourcen',    href: '/ressourcen' },
      { label: 'Kontakt',       href: '/kontakt' },
      { label: 'Support',       href: '/kontakt' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum',          href: '/impressum' },
      { label: 'Datenschutz',        href: '/datenschutz' },
      { label: 'Nutzungsbedingungen', href: '/nutzungsbedingungen' },
      { label: 'Lizenzen',           href: '/lizenzen' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/">
              <AbsIntLogo className="h-12" dark />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-xs">
              Verifikationswerkzeuge für sicherheitskritische eingebettete Software –
              seit 1994 in Saarbrücken.
            </p>
            <div className="mt-6 flex gap-3">
              {/* Social icons (placeholders) */}
              {['LinkedIn', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-sm font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} AbsInt Angewandte Informatik GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-gray-700">
            Saarbrücken · Deutschland
          </p>
        </div>
      </div>
    </footer>
  )
}
