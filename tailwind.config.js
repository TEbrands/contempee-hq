/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Contempee Brand Palette
        brand: {
          cream:    '#F7F4F2',  // lightest — page background
          linen:    '#E7E1D7',  // sidebar background
          sand:     '#DED5C8',  // card borders / dividers
          stone:    '#D7D3C8',  // subtle borders
          taupe:    '#C9BEAB',  // muted text / secondary elements
          warm:     '#C5B8A8',  // hover states
          blush:    '#E9E1DF',  // accent / highlight
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
