"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accessibility, ZoomIn, ZoomOut, Type, Contrast, MousePointer, Underline, X, Info } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function AccessibilityWidget() {
  const [mounted, setMounted] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [highlightLinks, setHighlightLinks] = useState(false)
  const [highlightHeadings, setHighlightHeadings] = useState(false)
  const [grayscale, setGrayscale] = useState(false)
  const [bigCursor, setBigCursor] = useState(false)

  // Apply accessibility settings
  useEffect(() => {
    if (!mounted) {
      // Load saved settings from localStorage
      const savedSettings = localStorage.getItem("accessibilitySettings")
      if (savedSettings) {
        const settings = JSON.parse(savedSettings)
        setFontSize(settings.fontSize || 100)
        setHighContrast(settings.highContrast || false)
        setHighlightLinks(settings.highlightLinks || false)
        setHighlightHeadings(settings.highlightHeadings || false)
        setGrayscale(settings.grayscale || false)
        setBigCursor(settings.bigCursor || false)
      }
      setMounted(true)
    }

    // Apply settings to document
    document.documentElement.style.fontSize = `${fontSize}%`

    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }

    if (highlightLinks) {
      document.documentElement.classList.add("highlight-links")
    } else {
      document.documentElement.classList.remove("highlight-links")
    }

    if (highlightHeadings) {
      document.documentElement.classList.add("highlight-headings")
    } else {
      document.documentElement.classList.remove("highlight-headings")
    }

    if (grayscale) {
      document.documentElement.classList.add("grayscale")
    } else {
      document.documentElement.classList.remove("grayscale")
    }

    if (bigCursor) {
      document.documentElement.classList.add("big-cursor")
    } else {
      document.documentElement.classList.remove("big-cursor")
    }

    // Save settings to localStorage
    if (mounted) {
      localStorage.setItem(
        "accessibilitySettings",
        JSON.stringify({
          fontSize,
          highContrast,
          highlightLinks,
          highlightHeadings,
          grayscale,
          bigCursor,
        }),
      )
    }
  }, [fontSize, highContrast, highlightLinks, highlightHeadings, grayscale, bigCursor, mounted])

  const resetSettings = () => {
    setFontSize(100)
    setHighContrast(false)
    setHighlightLinks(false)
    setHighlightHeadings(false)
    setGrayscale(false)
    setBigCursor(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
            aria-label="אפשרויות נגישות"
          >
            <Accessibility className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[320px] sm:w-[380px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-right flex items-center justify-between">
              <span>הגדרות נגישות</span>
              <Accessibility className="h-5 w-5" />
            </SheetTitle>
            <SheetDescription className="text-right">התאם את האתר לצרכי הנגישות שלך</SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Font Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  <Label htmlFor="font-size">גודל טקסט</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                    aria-label="הקטן טקסט"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{fontSize}%</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => setFontSize(Math.min(200, fontSize + 10))}
                    aria-label="הגדל טקסט"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Slider
                id="font-size"
                min={80}
                max={200}
                step={10}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
              />
            </div>

            <Separator />

            {/* Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Contrast className="h-4 w-4" />
                <Label htmlFor="high-contrast">ניגודיות גבוהה</Label>
              </div>
              <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
            </div>

            {/* Highlight Links */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Underline className="h-4 w-4" />
                <Label htmlFor="highlight-links">הדגשת קישורים</Label>
              </div>
              <Switch id="highlight-links" checked={highlightLinks} onCheckedChange={setHighlightLinks} />
            </div>

            {/* Highlight Headings */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                <Label htmlFor="highlight-headings">הדגשת כותרות</Label>
              </div>
              <Switch id="highlight-headings" checked={highlightHeadings} onCheckedChange={setHighlightHeadings} />
            </div>

            {/* Grayscale */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Contrast className="h-4 w-4" />
                <Label htmlFor="grayscale">מצב שחור-לבן</Label>
              </div>
              <Switch id="grayscale" checked={grayscale} onCheckedChange={setGrayscale} />
            </div>

            {/* Big Cursor */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MousePointer className="h-4 w-4" />
                <Label htmlFor="big-cursor">סמן גדול</Label>
              </div>
              <Switch id="big-cursor" checked={bigCursor} onCheckedChange={setBigCursor} />
            </div>

            <Separator />

            {/* Reset Button */}
            <Button variant="outline" className="w-full" onClick={resetSettings}>
              <X className="h-4 w-4 mr-2" />
              איפוס הגדרות
            </Button>

            {/* Accessibility Statement */}
            <Button variant="link" className="w-full text-blue-600" asChild>
              <a href="/accessibility-statement">
                <Info className="h-4 w-4 ml-2" />
                הצהרת נגישות
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
