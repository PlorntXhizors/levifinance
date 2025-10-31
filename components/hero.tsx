"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeftIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t } = useLanguage()

  // Images for the carousel - removed placeholder images
  const carouselImages = [
    "/modern-apartment-building.png",
    "/real-estate-contract-signing.png",
    "/financial-advisor-meeting.png",
    "/luxury-apartment-interior.png",
    "/real-estate-growth-chart.png",
  ]

  const totalImages = carouselImages.length
  const [currentImage, setCurrentImage] = useState(0)
  const [prevImage, setPrevImage] = useState(totalImages - 1)
  const [direction, setDirection] = useState("next") // "next" or "prev"
  const [animating, setAnimating] = useState(false)

  const goToNext = () => {
    if (animating) return
    setAnimating(true)
    setPrevImage(currentImage)
    setDirection("next")
    setCurrentImage((prev) => (prev + 1) % totalImages)
    setTimeout(() => setAnimating(false), 800)
  }

  const goToPrev = () => {
    if (animating) return
    setAnimating(true)
    setPrevImage(currentImage)
    setDirection("prev")
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages)
    setTimeout(() => setAnimating(false), 800)
  }

  const goToSpecific = (index) => {
    if (animating || index === currentImage) return
    setAnimating(true)
    setPrevImage(currentImage)
    setDirection(index > currentImage ? "next" : "prev")
    setCurrentImage(index)
    setTimeout(() => setAnimating(false), 800)
  }

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [currentImage, animating])

  // Get transition classes based on state
  const getTransitionClasses = (index) => {
    if (index === currentImage) {
      return `absolute inset-0 z-20 transition-all duration-800 ${
        direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left"
      }`
    } else if (index === prevImage) {
      return `absolute inset-0 z-10 transition-all duration-800 ${
        direction === "next" ? "animate-slide-out-left" : "animate-slide-out-right"
      }`
    } else {
      return "absolute inset-0 opacity-0"
    }
  }

  return (
    <section id="home" className="hero-pattern relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 leading-tight">
                {t.hero.title}
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground">{t.hero.subtitle}</h2>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg border border-gray-100 shadow-sm">
              <p className="text-gray-700">{t.hero.welcome}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="text-base">
                <Link href="#contact" className="flex items-center gap-2">
                  {t.hero.scheduleBtn}
                  <ArrowLeftIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="#services">{t.hero.servicesBtn}</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-lg">
              {carouselImages.map((src, index) => (
                <div key={index} className={getTransitionClasses(index)}>
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`לוי פיננסים - תמונה ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-navy/20"></div>
                </div>
              ))}

              {/* Carousel Controls */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-30">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSpecific(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index ? "bg-white w-6 h-2" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`עבור לתמונה ${index + 1}`}
                    disabled={animating}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors z-30"
                aria-label="התמונה הקודמת"
                disabled={animating}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors z-30"
                aria-label="התמונה הבאה"
                disabled={animating}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="gold-gradient p-5 rounded-lg shadow-lg sm:absolute sm:-bottom-12 sm:-left-6 mt-4 sm:mt-0">
              <p className="text-navy font-bold text-lg">{t.hero.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
