import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "479px" },
    },
    extend: {},
  },
  plugins: [
    plugin(({ addBase }: { addBase: any }) => {
      addBase({
        "*, *:before, *:after": {
          "-webkitTapHighlightColor": "transparent",
        },
        "*::selection": {
          background: "#d5ff0c",
        },
        html: {
          fontSize: "0.6944vw",
        },
        body: {
          minWidth: "360px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontFamily: '"Aeonik Pro", sans-serif',
          lineHeight: "1.2",
        },
        main: {
          flex: "1 1 auto",
        },
        "._container": {
          margin: "0 auto",
          padding: "0 2rem",
        },
        "body.lock": {
          overflow: "hidden",
        },
        "@media (max-width: 1023px)": {
          html: {
            fontSize: "10px",
          },
        },
      });
    }),
  ],
};
export default config;
