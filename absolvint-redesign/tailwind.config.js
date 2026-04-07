/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8193C',
          light:   '#F0405E',
          dark:    '#C01530',
          50:      '#FFF0F3',
          100:     '#FFE0E5',
        },
        accent: {
          DEFAULT: '#1B5E20',
          light:   '#2E7D32',
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
        card:       '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
