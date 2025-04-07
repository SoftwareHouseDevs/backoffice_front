/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a6cf7',
        secondary: '#6a7c92',
        'text-color': '#333',
        'light-color': '#f8f9fa',
        'dark-color': '#212529'
      }
    }
  },
  plugins: []
}