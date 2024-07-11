import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{

    'primary': {
        '50': '#fdf6fd',
        '100': '#f9edfa',
        '200': '#f2d9f5',
        '300': '#ebbbec',
        '400': '#dc8add',
        '500': '#cc68cd',
        '600': '#b148b0',
        '700': '#92398f',
        '800': '#773174',
        '900': '#632c5f',
        '950': '#3f133c',
    },
  'secondary': {
        '50': '#fef5f2',
        '100': '#fee8e2',
        '200': '#fdd6cb',
        '300': '#fbb9a6',
        '400': '#f79c82',
        '500': '#ed6b46',
        '600': '#d95029',
        '700': '#b7401e',
        '800': '#97381d',
        '900': '#7e331e',
        '950': '#44180b',
    },
    
   

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
  