import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import PremiumService from "../components/PremiumService"
import { Metadata } from "next"

const url = "https://lightsketch.vercel.app/"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(url),
  keywords: [
    "Artificial Intelligence",
    "AI",
    "Generation API",
    "Powerful AI",
    "Image Generation Models",
    "Headshot API",
  ],
  title: {
    default: "LightSketch",
    template: "%s | LightSketch",
  },
  openGraph: {
    description:
      "Discover cutting-edge AI solutions and innovations at our AI-powered website, leveraging advanced technologies to transform your digital experience and drive smarter decision-making.",
    // images:[]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
          <PremiumService />
        </>
      </body>
    </html>
  )
}
