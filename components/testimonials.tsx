"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.testimonials.title}</h2>
          <p className="text-lg text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="flex flex-col">
                  <span className="font-bold text-navy">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
