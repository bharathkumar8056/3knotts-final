import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flower, ArrowLeft, Users, Award, Heart, Truck, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We source only the finest flowers and materials, ensuring every product meets our high standards.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen, adapt, and deliver exactly what you need.",
    },
    {
      icon: Award,
      title: "Traditional Excellence",
      description: "Preserving age-old traditions while embracing modern quality and service standards.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Fresh products delivered on time, every time, maintaining their quality and freshness.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest business practices and transparent pricing.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We understand the importance of timing in spiritual practices and special occasions.",
    },
  ]

  // const team = [
  //   {
  //     name: "Rajesh Kumar",
  //     role: "Founder & CEO",
  //     description:
  //       "With over 20 years in the flower business, Rajesh started 3 Knotts with a vision to bring quality spiritual products to every home.",
  //     image: "/placeholder.svg?height=300&width=300",
  //   },
  //   {
  //     name: "Priya Sharma",
  //     role: "Head of Quality",
  //     description:
  //       "Priya ensures every flower and product meets our stringent quality standards before reaching our customers.",
  //     image: "/placeholder.svg?height=300&width=300",
  //   },
  //   {
  //     name: "Arjun Patel",
  //     role: "Operations Manager",
  //     description:
  //       "Arjun manages our supply chain and logistics, ensuring fresh products reach you on time, every time.",
  //     image: "/placeholder.svg?height=300&width=300",
  //   },
  // ]

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
            <Link href="/about" className="text-sm font-medium" style={{ color: "#323232", fontWeight: "600" }}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors" style={{ color: "#323232" }}>
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
                  Our Story
                </div>
                <h1
                  className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4"
                  style={{ color: "#323232" }}
                >
                  About 3 Knotts
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: "#323232" }}>
                  Founded with a passion for preserving traditions and delivering quality, 3 Knotts has been serving
                  communities with the finest flowers, garlands, and spiritual essentials for over two decades.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/assets/samanthi.jpg"
                    width={600}
                    height={600}
                    alt="3 Knotts story"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                  Our Journey
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#323232" }}>
                  What started as a small family business has grown into a trusted name in the spiritual and floral
                  industry
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderColor: "#323232" }}>
                  <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#323232" }}>
                    The Beginning (2000)
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#323232" }}>
                    3 Knotts began as a humble flower shop in the heart of Chennai's temple district. Our founder,
                    Rajesh Kumar, noticed the need for consistently fresh, high-quality flowers for daily pooja rituals.
                    With just a small stall and a commitment to quality, we started serving the local community.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderColor: "#DDD0C8" }}>
                  <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#323232" }}>
                    Growth & Expansion (2010)
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#323232" }}>
                    As word spread about our quality and service, we expanded our offerings to include handcrafted
                    garlands and essential pooja items. We began sourcing directly from farmers, ensuring the freshest
                    flowers while supporting local agriculture. Our customer base grew from the local neighborhood to
                    temples and families across the city.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderColor: "#323232" }}>
                  <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#323232" }}>
                    Innovation & Tradition (2020)
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#323232" }}>
                    Embracing modern technology while preserving traditional values, we launched our online platform. We
                    introduced new product lines including botanicals, organic eggshell powder, and premium oils. Our
                    commitment to quality and customer satisfaction has made us a trusted name in spiritual essentials.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderColor: "#DDD0C8" }}>
                  <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#323232" }}>
                    Today & Beyond (2024)
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#323232" }}>
                    Today, 3 Knotts serves thousands of customers across India, maintaining the same commitment to
                    quality that started our journey. We continue to innovate while honoring traditions, ensuring that
                    every product we deliver brings joy, spirituality, and beauty to our customers' lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Our Values
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                The principles that guide everything we do and shape our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "#DDD0C8" }}
                    >
                      <value.icon className="h-8 w-8" style={{ color: "#323232" }} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#323232" }}>
                      {value.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "#323232" }}>
                      {value.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        {/* <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Meet Our Team
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                The passionate people behind 3 Knotts who work tirelessly to bring you the best products and service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-1" style={{ color: "#323232" }}>
                      {member.name}
                    </h3>
                    <p className="font-medium mb-3" style={{ color: "#323232" }}>
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#323232" }}>
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Mission & Vision */}
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#323232" }}>
          <div className="absolute inset-0 bg-[url('/patterns/floral-pattern.png')] opacity-10"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-0 rounded-2xl">
                <div className="text-center" style={{ color: "#DDD0C8" }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "rgba(221, 208, 200, 0.2)" }}
                  >
                    <Heart className="h-8 w-8" style={{ color: "#DDD0C8" }} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="leading-relaxed">
                    To provide the highest quality flowers, garlands, and spiritual essentials while preserving
                    traditional values and supporting local communities. We strive to make every spiritual moment more
                    meaningful and every celebration more beautiful.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur-sm border-0 rounded-2xl">
                <div className="text-center" style={{ color: "#DDD0C8" }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "rgba(221, 208, 200, 0.2)" }}
                  >
                    <Award className="h-8 w-8" style={{ color: "#DDD0C8" }} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="leading-relaxed">
                    To become the most trusted name in spiritual and floral products across India, known for our
                    unwavering commitment to quality, innovation in tradition, and exceptional customer service. We
                    envision a world where spirituality and beauty go hand in hand.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Why Choose 3 Knotts?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#DDD0C8" }}
                >
                  <Flower className="h-10 w-10" style={{ color: "#323232" }} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "#323232" }}>
                  Fresh Daily
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Flowers sourced and delivered fresh every single day
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#DDD0C8" }}
                >
                  <Users className="h-10 w-10" style={{ color: "#323232" }} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "#323232" }}>
                  Expert Craftsmanship
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Handcrafted garlands by skilled artisans
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#DDD0C8" }}
                >
                  <Shield className="h-10 w-10" style={{ color: "#323232" }} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "#323232" }}>
                  Quality Assured
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Rigorous quality checks on every product
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#DDD0C8" }}
                >
                  <Heart className="h-10 w-10" style={{ color: "#323232" }} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "#323232" }}>
                  Customer First
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Your satisfaction is our top priority
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: "#323232" }}>
                Ready to Experience the 3 Knotts Difference?
              </h2>
              <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Join thousands of satisfied customers who trust us for their spiritual and floral needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button
                    className="rounded-full px-8 py-6 text-base"
                    style={{ backgroundColor: "#323232", color: "white" }}
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base"
                    style={{ borderColor: "#323232", color: "#323232" }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </div>
  )
}

