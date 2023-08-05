export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#222438",
        secondary: "#202135",
        tertiary: "#22233F",
        quaternary: "#F34953",
        // htmlcolor: "#E44D26",
        // csscolor: "#1A6FB4",
        // jscolor: "#1A6FB4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        "3xl": [
          "19px 25px 20px -5px rgba(0,0,0,0.1)",
          "0px 8px 10px -6px rgba(0,0,0,0.1);",
        ],
      },
    },
  },
  plugins: [],
};
