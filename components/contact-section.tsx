"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "השם חייב להכיל לפחות 2 תווים" }),
  phone: z.string().min(9, { message: "מספר טלפון לא תקין" }),
  email: z.string().email({ message: "כתובת אימייל לא תקינה" }),
  service: z.string().min(1, { message: "יש לבחור תחום" }),
  message: z.string().optional(),
})

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would normally send the form data to your backend
    alert("הפרטים נשלחו בהצלחה! נחזור אליך בהקדם.")
    form.reset()
  }

  const contactInfo = [
    { icon: Phone, title: "טלפון", value: "055-649-296", href: "tel:055649296" },
    { icon: Mail, title: "אימייל", value: "nofarlevi2603@gmail.com", href: "mailto:nofarlevi2603@gmail.com" },
    { icon: MessageCircle, title: "וואטסאפ", value: "שלח הודעה", href: "https://wa.me/972556492960" },
    { icon: MapPin, title: "כתובת", value: "חיפה", href: "https://maps.google.com/?q=Haifa,Israel" },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">צור קשר</h2>
          <p className="text-lg text-muted-foreground">מעוניינים לקבל ייעוץ ראשוני? השאירו פרטים ונחזור אליכם בהקדם</p>
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
                          <FormLabel>שם מלא</FormLabel>
                          <FormControl>
                            <Input placeholder="הכנס את שמך המלא" {...field} />
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
                          <FormLabel>טלפון</FormLabel>
                          <FormControl>
                            <Input placeholder="הכנס את מספר הטלפון" {...field} />
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
                          <FormLabel>אימייל</FormLabel>
                          <FormControl>
                            <Input placeholder="הכנס את כתובת האימייל" {...field} />
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
                          <FormLabel>תחום עניין</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="בחר תחום" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mortgage">ייעוץ משכנתאות</SelectItem>
                              <SelectItem value="appraisal">שמאות מקרקעין</SelectItem>
                              <SelectItem value="legal">ליווי משפטי בעסקאות</SelectItem>
                              <SelectItem value="realestate">ליווי נכסי נדל״ן</SelectItem>
                              <SelectItem value="other">אחר</SelectItem>
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
                        <FormLabel>הודעה (אופציונלי)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="כתוב את הודעתך כאן..." className="resize-none" rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    שלח פרטים
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-navy mb-4">דרכי התקשרות</h3>
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
                <h3 className="text-xl font-bold text-navy mb-4">זמני פעילות</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ראשון - חמישי:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">שישי:</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">שבת:</span>
                    <span>סגור</span>
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
