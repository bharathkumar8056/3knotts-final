import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flower, ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Headphones, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our customer service team",
      details: "+91 97890 83875",
      subDetails: "Available during business hours",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your queries and we'll respond quickly",
      details: "info@3knotts.com",
      subDetails: "Response within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support via WhatsApp messaging",
      details: "+91 97890 83875",
      subDetails: "Instant responses during business hours",
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      description: "Come see our products in person",
      details: "123 Temple Street, Flower Market Area",
      subDetails: "Chennai, Tamil Nadu 600001",
    },
  ]

  const faqs = [
    {
      question: "What are your delivery hours?",
      answer:
        "We deliver fresh flowers and garlands from 6:00 AM to 8:00 PM, Monday through Saturday, and 6:00 AM to 12:00 PM on Sundays.",
    },
    {
      question: "How fresh are your flowers?",
      answer:
        "All our flowers are sourced fresh daily from local farmers and delivered within hours of being cut to ensure maximum freshness and longevity.",
    },
    {
      question: "Do you take custom garland orders?",
      answer:
        "Yes! We specialize in custom garlands for weddings, festivals, and special occasions. Please contact us at least 24 hours in advance for custom orders.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Due to the perishable nature of our products, we don't accept returns. However, if you're not satisfied with the quality, please contact us immediately and we'll make it right.",
    },
    {
      question: "Do you deliver outside Chennai?",
      answer:
        "Currently, we deliver within Chennai and surrounding areas. We're working on expanding our delivery network to serve more cities soon.",
    },
    {
      question: "How can I place a bulk order?",
      answer:
        "For bulk orders (temples, events, weddings), please call us directly or email us with your requirements. We offer special pricing for large quantities.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b"
        style={{ borderColor: "#DDD0C8" }}
      >
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div
                className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: "#323232" }}
              ></div>
              <Flower className="h-8 w-8 relative z-10" style={{ color: "#323232" }} />
            </div>
            <span className="text-2xl font-serif font-bold" style={{ color: "#323232" }}>
              3 Knotts
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium transition-colors" style={{ color: "#323232" }}>
              Home
            </Link>
            <Link href="/fresh-flowers" className="text-sm font-medium transition-colors" style={{ color: "#323232" }}>
              Fresh Flowers & Garlands
            </Link>
            <Link href="/leaves" className="text-sm font-medium transition-colors" style={{ color: "#323232" }}>
              Leaves
            </Link>
            <Link
              href="/dried-flowers-botanicals"
              className="text-sm font-medium transition-colors"
              style={{ color: "#323232" }}
            >
              Dried Flowers & Botanicals
            </Link>
            <Link href="/ghee-oils" className="text-sm font-medium transition-colors" style={{ color: "#323232" }}>
              Ghee & Oils
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors" style={{ color: "#323232" }}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium" style={{ color: "#323232", fontWeight: "600" }}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/" className="flex items-center gap-2 transition-colors" style={{ color: "#323232" }}>
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-2"
                  style={{ backgroundColor: "#323232", color: "white" }}
                >
                  Get In Touch
                </div>
                <h1
                  className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4"
                  style={{ color: "#323232" }}
                >
                  Contact 3 Knotts
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: "#323232" }}>
                  We're here to help with all your floral and spiritual needs. Whether you have questions about our
                  products, need custom orders, or want to share feedback, we'd love to hear from you.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/assets/garland-banner.jpg"
                    width={600}
                    height={600}
                    alt="Contact 3 Knotts"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                How to Reach Us
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Choose the most convenient way to get in touch with our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: "#DDD0C8" }}
                    >
                      <method.icon className="h-8 w-8" style={{ color: "#323232" }} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2" style={{ color: "#323232" }}>
                      {method.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: "#323232" }}>
                      {method.description}
                    </p>
                    <p className="font-semibold mb-1" style={{ color: "#323232" }}>
                      {method.details}
                    </p>
                    <p className="text-xs" style={{ color: "#323232" }}>
                      {method.subDetails}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                      Send us a Message
                    </h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium" style={{ color: "#323232" }}>
                            Full Name *
                          </label>
                          <input
                            id="name"
                            className="flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            style={{ borderColor: "#DDD0C8", color: "#323232" }}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium" style={{ color: "#323232" }}>
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            style={{ borderColor: "#DDD0C8", color: "#323232" }}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium" style={{ color: "#323232" }}>
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          className="flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          style={{ borderColor: "#DDD0C8", color: "#323232" }}
                          placeholder="+91 97890 83875"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium" style={{ color: "#323232" }}>
                          Subject *
                        </label>
                        <select
                          id="subject"
                          className="flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          style={{ borderColor: "#DDD0C8", color: "#323232" }}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Related</option>
                          <option value="custom">Custom Order Request</option>
                          <option value="complaint">Complaint</option>
                          <option value="feedback">Feedback</option>
                          <option value="bulk">Bulk Order</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium" style={{ color: "#323232" }}>
                          Message *
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[150px] w-full rounded-xl border bg-white px-4 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          style={{ borderColor: "#DDD0C8", color: "#323232" }}
                          placeholder="Please describe your inquiry in detail..."
                          required
                        />
                      </div>
                      <Button
                        className="w-full rounded-xl py-6 text-base"
                        style={{ backgroundColor: "#323232", color: "white" }}
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#DDD0C8" }}
                        >
                          <Phone className="h-5 w-5" style={{ color: "#323232" }} />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1" style={{ color: "#323232" }}>
                            Phone Numbers
                          </h4>
                          <p style={{ color: "#323232" }}>Main: +91 97890 83875</p>
                          <p style={{ color: "#323232" }}>WhatsApp: +91 97890 83875</p>
                          <p style={{ color: "#323232" }}>Landline: +91 44 2345 6789</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#DDD0C8" }}
                        >
                          <Mail className="h-5 w-5" style={{ color: "#323232" }} />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1" style={{ color: "#323232" }}>
                            Email Addresses
                          </h4>
                          <p style={{ color: "#323232" }}>General: info@3knotts.com</p>
                          <p style={{ color: "#323232" }}>Orders: orders@3knotts.com</p>
                          <p style={{ color: "#323232" }}>Support: support@3knotts.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#DDD0C8" }}
                        >
                          <MapPin className="h-5 w-5" style={{ color: "#323232" }} />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1" style={{ color: "#323232" }}>
                            Store Address
                          </h4>
                          <p style={{ color: "#323232" }}>
                            3 Knotts Flower Shop
                            <br />
                            123 Temple Street
                            <br />
                            Flower Market Area
                            <br />
                            Chennai, Tamil Nadu 600001
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3
                      className="text-2xl font-serif font-bold mb-6 flex items-center gap-2"
                      style={{ color: "#323232" }}
                    >
                      <Clock className="h-6 w-6" />
                      Business Hours
                    </h3>
                    <div className="space-y-4">
                      <div
                        className="flex justify-between items-center pb-3 border-b"
                        style={{ borderColor: "#DDD0C8" }}
                      >
                        <span className="font-medium" style={{ color: "#323232" }}>
                          Monday - Saturday:
                        </span>
                        <span className="font-medium" style={{ color: "#323232" }}>
                          6:00 AM - 8:00 PM
                        </span>
                      </div>
                      <div
                        className="flex justify-between items-center pb-3 border-b"
                        style={{ borderColor: "#DDD0C8" }}
                      >
                        <span className="font-medium" style={{ color: "#323232" }}>
                          Sunday:
                        </span>
                        <span className="font-medium" style={{ color: "#323232" }}>
                          6:00 AM - 12:00 PM
                        </span>
                      </div>
                      <div
                        className="flex justify-between items-center pb-3 border-b"
                        style={{ borderColor: "#DDD0C8" }}
                      >
                        <span className="font-medium" style={{ color: "#323232" }}>
                          Public Holidays:
                        </span>
                        <span className="font-medium" style={{ color: "#323232" }}>
                          6:00 AM - 10:00 AM
                        </span>
                      </div>
                      <div className="p-4 rounded-lg mt-4" style={{ backgroundColor: "#DDD0C8" }}>
                        <p className="text-sm" style={{ color: "#323232" }}>
                          <strong>Note:</strong> We're open early to serve your morning pooja needs. For urgent orders
                          outside business hours, please WhatsApp us.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Frequently Asked Questions
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Find quick answers to common questions about our products and services
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-bold mb-3" style={{ color: "#323232" }}>
                        {faq.question}
                      </h3>
                      <p className="leading-relaxed" style={{ color: "#323232" }}>
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="mb-4" style={{ color: "#323232" }}>
                Can't find what you're looking for?
              </p>
              <Button className="rounded-full px-8 py-3" style={{ backgroundColor: "#323232", color: "white" }}>
                Contact Our Support Team
              </Button>
            </div>
          </div>
        </section>

        {/* Support Features */}
        <section className="py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Our Customer Support Promise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Headphones className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#323232" }}>
                  24/7 WhatsApp Support
                </h3>
                <p style={{ color: "#323232" }}>
                  Get instant responses to your queries via WhatsApp during business hours
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#323232" }}>
                  Dedicated Account Manager
                </h3>
                <p style={{ color: "#323232" }}>
                  For bulk orders and regular customers, get a dedicated point of contact
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#323232" }}>
                  Quick Response Time
                </h3>
                <p style={{ color: "#323232" }}>Email responses within 24 hours, phone calls answered immediately</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </div>
  )
}
