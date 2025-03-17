/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pageComponents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "center-to-top-right":
          "linear-gradient(65deg, #EFEFEF 30%, #FFFFFF 100%)",
        "underline-gradient":
          "linear-gradient(to right, black 70%, white 70%, white 75%, black 75%, black 90%, white 90%, white 95%, black 95%)",
      },
    },
  },
  plugins: [],
};
