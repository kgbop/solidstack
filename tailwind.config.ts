import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase }: { addBase: any }) => {
      addBase({
        "*, *:before, *:after": {
          "-webkitTapHighlightColor": "transparent",
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
        },
        main: {
          flex: "1 1 auto",
        },
        "._container": {
          margin: "0 auto",
          padding: "0 2rem",
        },
      });
    }),
  ],
};
export default config;
