"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Home, Scale as Scales, ArrowRight, Building } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      title: t.services.mortgage.title,
      description: t.services.mortgage.description,
      icon: Calculator,
      features: t.services.mortgage.features,
    },
    {
      title: t.services.appraisal.title,
      description: t.services.appraisal.description,
      icon: Scales,
      features: t.services.appraisal.features,
    },
    {
      title: t.services.legal.title,
      description: t.services.legal.description,
      icon: Home,
      features: t.services.legal.features,
    },
    {
      title: t.services.urbanRenewal.title,
      description: t.services.urbanRenewal.description,
      icon: Building,
      features: t.services.urbanRenewal.features,
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-0 right-0 h-2 w-20 gold-gradient"></div>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between group" asChild>
                  <Link href="#contact">
                    <span>{t.services.getAdvice}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="#contact">{t.services.scheduleBtn}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
