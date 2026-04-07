import { Link } from 'react-router-dom'
import logoSrc from '../../assets/logo.png'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Softwareentwicklung', href: '/services/development' },
      { label: 'Projektberatung',     href: '/services/consulting' },
      { label: 'Cloud-Infrastruktur', href: '/services/cloud' },
      { label: 'Schulungen',          href: '/services/training' },
      { label: 'Alle Services',       href: '/services' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns',   href: '/about' },
      { label: 'Standorte', href: '/locations' },
      { label: 'Kontakt',   href: '/contact' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum',   href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src={logoSrc}
                alt="Absolvint GmbH"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-xs">
              25 Jahre IT-Erfahrung. Ihr verlässlicher Partner für digitale
              Transformation – weltweit aufgestellt.
            </p>
            <p className="mt-4 text-xs text-gray-600 leading-relaxed">
              Sülldorfer Kirchenweg 139<br />
              22589 Hamburg<br />
              HRB 120442
            </p>
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
            © {new Date().getFullYear()} Absolvint GmbH · Hamburg
          </p>
          <p className="text-xs text-gray-700">
            USt-IDNr.: DE273054887
          </p>
        </div>
      </div>
    </footer>
  )
}
