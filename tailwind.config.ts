import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          desktop: "1380px",
        },
      },
      borderRadius: {
        "2": "2px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
      },
      spacing: {
        "0.5": "5px",
        "1": "10px",
        "1.5": "15px",
        "2": "20px",
        "2.5": "25px",
        "3": "30px",
        "3.5": "35px",
        "4": "40px",
        "4.5": "45px",
        "5": "50px",
        "5.5": "55px",
        "6": "60px",
        "6.5": "65px",
        "7": "70px",
        "8": "80px",
        "9": "90px",
        "10": "100px",
        "11": "110px",
        "12": "120px",
        "13": "130px",
        "14": "140px",
        "15": "150px",
        "16": "160px",
        "17": "170px",
        "18": "180px",
        "19": "190px",
        "20": "200px",
      },
      fontSize: {
        sm: "15px",
        base: "16px",
        medium: "18px",
        "2sm": "20px",
        "2md": "22px",
        "2lg": "26px",
        "2xl": "28px",
        "3": "30px",
        "3sm": "32px",
        "3md": "34px",
        "3lg": "36px",
        "3lx": "38px",
        "4sm": "40px",
        "4lg": "48px",
      },
      borderWidth: {
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
      },
      colors: {
        primary: "#182927",
        secondary: "#A2C858",
        tertiary: "#ECECEC",
        grey: "#F5F5F5",
        pink: "#EBB7D3",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        display: ["var(--font-noto-sans-display)"],
      },
    },
  },
  plugins: [],
}
export default config
