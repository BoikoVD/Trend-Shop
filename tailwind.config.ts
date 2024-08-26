import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "inter": ["var(--inter)"]
      },
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        'purple-100':'#A685FA',
        'purple-300':'#8254F8',
        'purple-400':'#703BF7',
        'gray-50':'#999999',
        'gray-100':'#4D4D4D',
        'gray-200':'#333333',
        'gray-300':'#262626',
        'gray-400':'#1A1A1A',
        'gray-500':'#141414',
        "light-100":'#FCFCFC',
        "light-200":'#F7F7F7',
        "light-300":'#F3F3F3',
        "light-400":'#D4D8D4',
      }
    },
    screens: {
      "xs": "340px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
      "6xl": "7680px"
    }
  },
  plugins: []
};
export default config;
