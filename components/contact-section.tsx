"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: any) {
    // Basic validation
    if (!values.name || values.name.length < 2) {
      alert("השם חייב להכיל לפחות 2 תווים")
      return
    }
    if (!values.phone || values.phone.length < 9) {
      alert("מספר טלפון לא תקין")
      return
    }
    if (!values.email || !values.email.includes("@")) {
      alert("כתובת אימייל לא תקינה")
      return
    }
    if (!values.service) {
      alert("יש לבחור תחום")
      return
    }

    console.log(values)
    alert("הפרטים נשלחו בהצלחה! נחזור אליך בהקדם.")
    form.reset()
  }

  const contactInfo = [
    { icon: Phone, title: t.contact.info.phone, value: "055-649-296", href: "tel:055649296" },
    {
      icon: Mail,
      title: t.contact.info.email,
      value: "nofarlevi2603@gmail.com",
      href: "mailto:nofarlevi2603@gmail.com",
    },
    {
      icon: MessageCircle,
      title: t.contact.info.whatsapp,
      value: t.contact.info.whatsappCta,
      href: "https://wa.me/972556492960",
    },
    {
      icon: MapPin,
      title: t.contact.info.address,
      value: t.contact.info.location,
      href: "https://maps.google.com/?q=Haifa,Israel",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3 border-gray-200">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.name}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.contact.form.namePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.phone}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.contact.form.phonePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.email}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.contact.form.emailPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.service}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mortgage">{t.contact.form.services.mortgage}</SelectItem>
                              <SelectItem value="appraisal">{t.contact.form.services.appraisal}</SelectItem>
                              <SelectItem value="legal">{t.contact.form.services.legal}</SelectItem>
                              <SelectItem value="realestate">{t.contact.form.services.realestate}</SelectItem>
                              <SelectItem value="other">{t.contact.form.services.other}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.message}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.contact.form.messagePlaceholder}
                            className="resize-none"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    {t.contact.form.submit}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-navy mb-4">{t.contact.info.title}</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-navy/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-navy" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-navy mb-4">{t.contact.hours.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.hours.weekdays}</span>
                    <span>{t.contact.hours.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.hours.friday}</span>
                    <span>{t.contact.hours.fridayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.hours.saturday}</span>
                    <span>{t.contact.hours.saturdayTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
