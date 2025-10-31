"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, FileDown, Home, Users, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { title: t.nav.home, href: "#home", icon: Home },
    { title: t.nav.about, href: "#about", icon: Users },
    { title: t.nav.team, href: "#team", icon: Users },
    { title: t.nav.services, href: "#services", icon: FileDown },
    { title: t.nav.blog, href: "#blog", icon: FileDown },
    { title: t.nav.contact, href: "#contact", icon: Phone },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-50 bg-white shadow-md",
        isScrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container flex justify-start items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-16 w-16 relative">
              <Image src="/new-logo.png" alt="בית לוי שמאות ופיננסים - לוגו" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-navy text-lg">בית לוי</span>
              <span className="text-sm text-muted-foreground">שמאות ופיננסים</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 ml-auto mr-32">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-navy hover:text-accent font-medium transition-colors group"
            >
              <div className="p-1.5 rounded-md bg-navy/5 group-hover:bg-navy/10 transition-colors">
                <link.icon className="h-4 w-4 text-navy" />
              </div>
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />

          <Button asChild className="hidden md:flex px-6 py-5 text-base font-semibold tracking-wide">
            <Link href="#contact">{t.nav.schedule}</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t.nav.menu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[380px]">
              <div className="flex flex-col gap-8 mt-10">
                <div className="flex items-center gap-2">
                  <div className="h-14 w-14 relative">
                    <Image src="/new-logo.png" alt="בית לוי שמאות ופיננסים - לוגו" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-navy">בית לוי</span>
                    <span className="text-xs text-muted-foreground">שמאות ופיננסים</span>
                  </div>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 text-navy hover:text-accent py-2 transition-colors"
                    >
                      <link.icon className="h-5 w-5" />
                      {link.title}
                    </Link>
                  ))}
                </nav>

                <Button className="w-full">
                  <Link href="#contact">{t.nav.schedule}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
