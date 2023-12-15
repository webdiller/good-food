import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      fontSize: {
        base: "17px",
      },
      fontFamily: {
        sans: ["var(--font-mulish)"],
      },
    },
  },
  plugins: [],
}
export default config
