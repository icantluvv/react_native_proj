/**@type {import('nativewind').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        hoverButton: '#e6e6e6',
        shadowText: '#ababab',
        lightGray: '#F9F9F9',
        goalsGreen: '#DEF24A',
        activeGoalsGreen: '#C0D32F',
        background: '#f2f2f2',
        activeBlackButton: '#868686'
      }
    }
  },

  plugins: []
}
