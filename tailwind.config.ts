import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0342E8",
        "icon-bg": "#2059EA",
        "product-border": "#F5F5F5",
        "product-bg": "#FAFAFA",
        grey: "#F1F1F1",
      },
      gridTemplateColumns: {
        product: "repeat(auto-fill, minmax(400px,1fr))",
      },
      gridAutoRows: {
        product: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
