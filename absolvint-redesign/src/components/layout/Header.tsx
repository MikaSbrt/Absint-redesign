import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSrc from '../../assets/logo.png'

const navItems = [
  { label: 'Services',    href: '/services' },
  { label: 'Standorte',  href: '/locations' },
  { label: 'Über uns',   href: '/about' },
  { label: 'Kontakt',    href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/93 backdrop-blur-lg border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo – 30–50 % größer als typisches SaaS-Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoSrc}
              alt="Absolvint GmbH"
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="group relative flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition-colors duration-200 ${
                        isActive ? 'text-primary' : 'text-gray-600 group-hover:text-charcoal'
                      }`}
                    >
                      {item.label}
                    </span>
                    <motion.span
                      className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-primary rounded-full"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ originX: 0.5 }}
                    />
                    {!isActive && (
                      <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-gray-200 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="btn-primary py-2.5">
              Beratung anfragen
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? 'text-primary bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <Link to="/contact" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
                  Beratung anfragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
