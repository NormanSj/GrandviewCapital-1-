/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#f5f5f5",
        white: "#fff",
        "anchor-grey": "#393f47",
        "slate-grey": "#616b79",
        "ocean-blue": "#0c0094",
        gainsboro: {
          "100": "#e5e5e5",
          "200": "#dbdbdb",
        },
        darkblue: "#4033c7",
        "azure-blue": "#3688e9",
        cornflowerblue: {
          "100": "#4fa1ff",
          "200": "rgba(79, 161, 255, 0.09)",
        },
        limegreen: "#58d743",
        "lime-green": "#adfe6d",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        aeroport: "Aeroport",
        "source-sans-pro": "'Source Sans Pro'",
      },
      borderRadius: {
        "31xl": "50px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      lgi: "19px",
      "10xl": "29px",
      "3xl": "22px",
      "11xl": "30px",
      lg: "18px",
      "81xl": "100px",
      "31xl": "50px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
