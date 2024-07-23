import type { Config } from "tailwindcss";
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        width: '1px',
        track: {
          background: 'transparent',
        },
        thumb: {
          backgroundColor: '#ccc',
          borderRadius: '1px',
          border: '1px solid transparent',
        },
      },

      height: {
        'custom-height': '40px',  // Example custom height
        'custom-small-height': '30px',  // Example custom height
      },
      width: {
        'custom-width': '40px',   // Example custom width
        'custom-small-width': '30px',   // Example custom width
      },

      fontSize: {
        'small-custom': '9px',
      },
  colors:{
black:{
  DEFAULT:'#000',
  100:'#000319'
}
  },
  animation: {
    aurora: "aurora 60s linear infinite",
    spotlight: "spotlight 2s ease .75s 1 forwards",
    "meteor-effect": "meteor 5s linear infinite",
    first: "moveVertical 30s ease infinite",
    second: "moveInCircle 20s reverse infinite",
    third: "moveInCircle 40s linear infinite",
    fourth: "moveHorizontal 40s ease infinite",
    fifth: "moveInCircle 20s ease infinite",
    scroll:
    "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
  },
  keyframes: {
    scroll: {
      to: {
        transform: "translate(calc(-50% - 0.5rem))",
      },
    },
    aurora: {
      from: {
        backgroundPosition: "50% 50%, 50% 50%",
      },
      to: {
        backgroundPosition: "350% 50%, 350% 50%",
      },
    },
    moveHorizontal: {
      "0%": {
        transform: "translateX(-50%) translateY(-10%)",
      },
      "50%": {
        transform: "translateX(50%) translateY(10%)",
      },
      "100%": {
        transform: "translateX(-50%) translateY(-10%)",
      },
    },
    moveInCircle: {
      "0%": {
        transform: "rotate(0deg)",
      },
      "50%": {
        transform: "rotate(180deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
    moveVertical: {
      "0%": {
        transform: "translateY(-50%)",
      },
      "50%": {
        transform: "translateY(50%)",
      },
      "100%": {
        transform: "translateY(-50%)",
      },
    },
    meteor: {
      "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
      "70%": { opacity: "1" },
      "100%": {
        transform: "rotate(215deg) translateX(-500px)",
        opacity: "0",
      },
    },
    spotlight: {
      "0%": {
        opacity: "0",
        transform: "translate(-72%, -62%) scale(0.5)",
      },
      "100%": {
        opacity: "1",
        transform: "translate(-50%,-40%) scale(1)",
      },
    },
  },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '.scrollbar': {
          '::-webkit-scrollbar': {
            width: '1px',
          },
          '::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#ccc',
            borderRadius: '1px',
            border: '1px solid transparent',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#ccc transparent',
        },
      });
    },
  ],
};


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
