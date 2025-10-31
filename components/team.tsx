"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, GraduationCap } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.team.title}</h2>
          <p className="text-lg text-muted-foreground">{t.team.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.team.members.map((member, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-0 right-0 h-2 w-20 gold-gradient"></div>
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={`/ceholder-svg-key-fhmb6-height-300-width-300-text-.jpg?key=fhmb6&height=300&width=300&text=${encodeURIComponent(member.name)}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-navy mb-1">{member.name}</CardTitle>
                    <p className="text-accent font-semibold mb-2">{member.title}</p>
                    <CardDescription className="text-muted-foreground">{member.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      {t.team.specialties}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-1">{t.team.education}</h4>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={`mailto:${index === 0 ? "nofarlevi2603@gmail.com" : index === 1 ? "kobi.levi@beitlevi.co.il" : "lin.levi@beitlevi.co.il"}`}
                      className="flex items-center gap-2 text-sm text-navy hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>{t.team.email}</span>
                    </a>
                    <a
                      href={`tel:${index === 0 ? "055649296" : index === 1 ? "0541234567" : "0529876543"}`}
                      className="flex items-center gap-2 text-sm text-navy hover:text-accent transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>{t.team.phone}</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <a href="#contact">{t.team.contact}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
