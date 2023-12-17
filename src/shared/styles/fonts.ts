import { Noto_Sans, Noto_Sans_Display } from "next/font/google"
import {} from "next/font/google"
export const fontNotoSans = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-noto-sans", display: "swap" })
export const fontNotoSansDisplay = Noto_Sans_Display({ subsets: ["latin"], weight: ["700"], variable: "--font-noto-sans-display", display: "swap" })
