import { Noto_Sans, Noto_Sans_Display, Raleway } from "next/font/google"
export const fontNotoSans = Noto_Sans({ subsets: ["latin", "cyrillic", "cyrillic-ext"], weight: ["300", "400", "700", "900"], variable: "--font-noto-sans", display: "swap" })
export const fontRaleway = Raleway({ subsets: ["latin", "cyrillic", "cyrillic-ext"], weight: ["300", "400"], variable: "--font-raleway", display: "swap" })
export const fontNotoSansDisplay = Noto_Sans_Display({ subsets: ["cyrillic", "cyrillic-ext", "latin"], weight: ["700"], variable: "--font-noto-sans-display", display: "swap" })
