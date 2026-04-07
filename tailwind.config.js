/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8102E',
          light: '#D63651',
          dark: '#A50D25',
          50:  '#FFF1F2',
          100: '#FFE0E3',
        },
        accent: {
          DEFAULT: '#3D7A56',
          light:   '#4E9169',
        },
        charcoal:   '#1A1A2E',
        background: '#F7F7F8',
        card:       '#FFFFFF',
        muted:      '#6B7280',
        border:     '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
