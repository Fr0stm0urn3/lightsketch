import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import PremiumService from "../components/PremiumService"
import { Metadata } from "next"
import Head from "next/head"
import LightSketchImg from "../assets/images/LightSketch.png"

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

function HeadMeta() {
  // return (
  //   <Head>
  //     <meta
  //       property="og:image"
  //       content={`https://lightsketch.vercel.app/assets/images/LightSketch.png`}
  //     />
  //     <meta name="twitter:card" content="summary_large_image" />
  //     <meta
  //       name="twitter:image"
  //       content={"https://lightsketch.vercel.app/assets/images/LightSketch.png"}
  //     />
  //   </Head>
  // )
  return (
    <Head>
      <meta
        property="og:image"
        content={`https://lightsketch.vercel.app/../assets/images/LightSketch.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={"https://lightsketch.vercel.app/../assets/images/LightSketch.png"}
      />
    </Head>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadMeta />
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
