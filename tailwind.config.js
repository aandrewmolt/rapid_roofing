/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#27348B',
          'blue-dark': '#1F2A74',
          gold: '#A86A11',
          'gold-light': '#C4821A',
          navy: '#0B1220',
        },
        surface: '#F8FAFC',
        heading: '#111827',
        body: '#1F2937',
        muted: '#6B7280',
        border: '#E5E7EB',
        success: '#16A34A',
        error: '#DC2626',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}