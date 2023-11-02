/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': 'Roboto Condensed, sans-serif'
    },
    extend: {
      colors: {
        'water': 'rgb(14 165 233)',
        'fire': 'rgb(234 88 12)',
        'grass': 'rgb(163 230 53)',
        'bug': 'rgb(54 83 20)',
        'normal': 'rgb(249 168 212)',
        'poison': 'rgb(109 40 217)',
        'electric': 'rgb(250 204 21)',
        'ground': 'rgb(180 83 9)',
        'fairy': 'rgb(190 24 93)',
        'fighting': 'rgb(248 113 113)',
        'psychic': 'rgb(131 24 67)',
        'rock': 'rgb(120 53 15)',
        'ghost': 'rgb(49 46 129)',
        'ice': 'rgb(186 230 253)',
        'dragon': 'rgb(8 145 178)',
        'dark': 'rgb(3 7 18)',
        'steel': 'rgb(71 85 105)',
        'flying': 'rgb(148 163 184)',
        'yellowlogo': '#ffcc01',
        'bluelogo': '#3363af',
      }
    },
  },
  plugins: [],
}

