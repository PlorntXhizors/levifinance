"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <html lang="he" dir="rtl" className={className}>
      <head>
        <title>בית לוי שמאות ופיננסים</title>
        <meta
          name="description"
          content="אמינות. מקצועיות. ליווי אישי – כל פתרונות הנדל״ן, המשכנתאות והשמאות תחת קורת גג אחת."
        />
      </head>
      <body className={className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
