import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quote Generator - Find Inspiring Quotes",
  description: "Discover inspiring quotes on any topic. Find wisdom and motivation from history's greatest minds.",
  keywords: ["quotes", "inspiration", "motivation", "wisdom", "success", "life"],
  authors: [{ name: "Quote Generator" }],
  creator: "Quote Generator",
  publisher: "Quote Generator",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quote-generator.vercel.app",
    title: "Quote Generator - Find Inspiring Quotes",
    description: "Discover inspiring quotes on any topic. Find wisdom and motivation from history's greatest minds.",
    siteName: "Quote Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quote Generator - Find Inspiring Quotes",
    description: "Discover inspiring quotes on any topic. Find wisdom and motivation from history's greatest minds.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
