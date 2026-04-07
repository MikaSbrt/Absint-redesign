# AbsInt Website Redesign

Erster visueller Entwurf der neuen AbsInt-Homepage. Modernes, premium Enterprise-Design mit klarer Hierarchie und starker visueller Richtung.

## Tech-Stack

- **Vite** – Build-Tool & Dev-Server
- **React 18** mit **TypeScript**
- **Tailwind CSS** – Utility-First Styling
- **Framer Motion** – Animationen
- **React Router v6** – Client-seitiges Routing

## Schnellstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Build-Vorschau
npm run preview
```

Öffne [http://localhost:5173](http://localhost:5173) im Browser.

## Projektstruktur

```
src/
├── components/
│   ├── layout/         # Header, Footer
│   ├── home/           # Alle Sektionen der Homepage
│   └── AbsIntLogo.tsx  # Logo-Komponente
├── pages/              # Routen-Komponenten
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── AiTPage.tsx
│   ├── StackAnalyzerPage.tsx
│   ├── AstreePage.tsx
│   ├── CompCertPage.tsx
│   ├── IndustriesPage.tsx
│   ├── TechnologyPage.tsx
│   ├── CompanyPage.tsx
│   ├── ResourcesPage.tsx
│   └── ContactPage.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Routen

| Route | Seite |
|-------|-------|
| `/` | Homepage |
| `/produkte` | Produktübersicht |
| `/produkte/ait` | aiT – WCET Analyse |
| `/produkte/stackanalyzer` | StackAnalyzer |
| `/produkte/astree` | Astrée |
| `/produkte/compcert` | CompCert |
| `/branchen` | Branchen |
| `/technologie` | Technologie |
| `/unternehmen` | Unternehmen |
| `/ressourcen` | Ressourcen |
| `/kontakt` | Kontakt |

## Design-System

### Farben
- **Primär:** `#C8102E` (AbsInt Rot)
- **Hintergrund:** `#F7F7F8` (Off-White)
- **Karten:** `#FFFFFF`
- **Haupttext:** `#1A1A2E` (Charcoal)
- **Sekundärtext:** `#6B7280`
- **Akzent:** `#3D7A56` (Gedämpftes Grün – sehr sparsam)

### Designprinzipien
- Premium, clean, enterprise-fokussiert
- Keine dunklen Hintergründe oder Neon-Effekte
- Subtile Animationen (Framer Motion)
- Vollständig responsiv (Mobile, Tablet, Desktop)

## Status

Entwurf 1 von mehreren Iterationen. Fokus: visuelle Hierarchie und Premium-Erscheinungsbild.
