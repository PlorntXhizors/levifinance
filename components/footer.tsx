"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 relative bg-white rounded-md p-1">
                <Image src="/new-logo.png" alt={`${t.footer.companyName} - לוגו`} fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">{t.footer.companyName}</span>
                <span className="text-sm text-gray-300">{t.footer.companyTagline}</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.quickNav}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.team}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{t.footer.phone}: 055-649-296</li>
              <li className="text-gray-300">{t.footer.email}: nofarlevi2603@gmail.com</li>
              <li className="text-gray-300">
                {t.footer.address}: {t.footer.addressText}
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {t.footer.copyright}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              {t.footer.terms}
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
