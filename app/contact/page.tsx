"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useState, useRef, useEffect } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef(null)
  const [emailJSInitialized, setEmailJSInitialized] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    // Initialize EmailJS with your public key
    const initEmailJS = async () => {
      try {
        await emailjs.init("1bxTWAK3Y4FVFVjnV")
        setEmailJSInitialized(true)
      } catch (error) {
        console.error("EmailJS initialization error:", error)
        toast({
          title: "Email service initialization failed",
          description: "Please try again later or contact me directly via email.",
          variant: "destructive",
        })
      }
    }

    initEmailJS()
  }, [toast])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!emailJSInitialized) {
      toast({
        title: "Email service not available",
        description: "Please contact me directly via email at aayushniraula2025@gmail.com",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm("service_ozu2xzr", "template_11vmp3v", formRef.current)

      if (result.status === 200) {
        setShowSuccess(true)

        // Also show toast notification
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email at aayushniraula2025@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="page-header">Contact Me</h1>
      <p className="text-muted-foreground text-lg text-center mb-12">
        Let's discuss how I can contribute to your quality assurance needs
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900 rounded-md"
                  >
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-green-800 dark:text-green-300">Message Sent Successfully!</h3>
                        <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                          Thank you for reaching out. I'll respond to your message as soon as possible.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">aayushniraula2025@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">+977-9804788038</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">Nepal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect Online</CardTitle>
              <CardDescription>Follow me on social media and professional networks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://linkedin.com/in/aayush-niraula" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-3 text-[#0077B5]" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://github.com/NiraulAayush" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-3" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Currently available for entry-level QA positions, internships, and freelance testing projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
