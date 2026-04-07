import { motion } from 'framer-motion'

export default function CompanyPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Unternehmen</p>
          <h1 className="section-title text-5xl mb-4">Über AbsInt</h1>
          <p className="section-subtitle mb-12">
            Deutsches Software-Unternehmen, gegründet 1994 in Saarbrücken – aus der Forschung, für die Praxis.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Geschichte', text: 'AbsInt Angewandte Informatik GmbH wurde 1994 als Spin-off der Universität des Saarlandes gegründet, um formal fundierte Verifikationswerkzeuge für die Industrie zugänglich zu machen.' },
              { title: 'Mission',    text: 'Wir entwickeln Werkzeuge, die formale Methoden in die tägliche Praxis der eingebetteten Software-Entwicklung bringen – ohne Kompromisse bei Korrektheit und Vollständigkeit.' },
              { title: 'Team',       text: 'Unser Team besteht aus Experten der formalen Methoden, Compilerbau, eingebetteten Systemen und Sicherheitsnormen. Viele Mitarbeiter promoviert, alle praxiserfahren.' },
              { title: 'Standort',   text: 'AbsInt hat seinen Hauptsitz im Science Park Saarbrücken und ist eng mit dem CISPA Helmholtz-Zentrum für Informationssicherheit und der Universität des Saarlandes verbunden.' },
            ].map((item) => (
              <div key={item.title} className="card-base">
                <h2 className="text-lg font-bold text-charcoal mb-3">{item.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
