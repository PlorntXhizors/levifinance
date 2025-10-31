"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Languages } from "lucide-react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "he" ? "en" : "he")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-transparent"
      aria-label={language === "he" ? "Switch to English" : "עבור לעברית"}
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === "he" ? "EN" : "עב"}</span>
    </Button>
  )
}
