import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Hebrew } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-hebrew",
})

export const metadata: Metadata = {
  title: "בית לוי שמאות ופיננסים",
  description: "אמינות. מקצועיות. ליווי אישי – כל פתרונות הנדל״ן, המשכנתאות והשמאות תחת קורת גג אחת.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout className={notoSansHebrew.className}>{children}</ClientLayout>
}
