import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        dark : "#343339",
        border : "#CECECE",
        background : "#EDEDED"
      },
      keyframes :{
        floating : {
          "0%" :{
            transform : "translatey(0px)"
          },
          "50%" :{
            transform : "translatey(-20px)"
          },
          "100%" :{
            transform : "translatey(0px)"
          }
        }
      },
      animation: {
        floating: "floating 6s ease-in-out infinite",
        floatingSlow: "floating 8s ease-in-out infinite",
        floatingFast: "floating 4s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
export default config;
