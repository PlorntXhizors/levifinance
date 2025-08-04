import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 relative bg-white rounded-md p-1">
                <Image src="/new-logo.png" alt="בית לוי שמאות ופיננסים - לוגו" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">בית לוי</span>
                <span className="text-sm text-gray-300">שמאות ופיננסים</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              כל פתרונות הנדל"ן, המשכנתאות והשמאות תחת קורת גג אחת. אמינות. מקצועיות. ליווי אישי.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
                  הצוות שלנו
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  צור קשר
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  המדריכים שלנו
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">צור קשר</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">טלפון: 055-649-296</li>
              <li className="text-gray-300">אימייל: nofarlevi2603@gmail.com</li>
              <li className="text-gray-300">כתובת: חיפה</li>
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
          <p className="text-gray-400 text-sm">&copy; {currentYear} בית לוי שמאות ופיננסים. כל הזכויות שמורות.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              תנאי שימוש
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              מדיניות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
