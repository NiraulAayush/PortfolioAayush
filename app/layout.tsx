import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aayush Niraula | QA Professional",
  description:
    "Personal portfolio of Aayush Niraula, a Quality Assurance professional showcasing skills, projects, and expertise in testing.",
  keywords: [
    "QA",
    "Quality Assurance",
    "Testing",
    "Automation Testing",
    "Manual Testing",
    "Portfolio",
    "Aayush Niraula",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
