import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flower, Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { CategoryCard } from "@/components/category-card"
import { FloatingElements } from "@/components/floating-elements"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  const featuredProducts = [
    {
      name: "Malli (Jasmine)",
      description: "Premium quality fresh jasmine flowers for daily pooja",
      price: "₹120",
      unit: "100g",
      imagePath: "/assets/jasmine.png",
      slug: "malli",
      category: "fresh-flowers",
    },
    {
      name: "Wedding Garland",
      description: "Handcrafted premium wedding garland with fresh flowers",
      price: "₹850",
      unit: "piece",
      imagePath: "/assets/wedding-garlands.jpeg",
      slug: "wedding-garland",
      category: "garlands",
    },
    {
      name: "Mango Leaves",
      description: "Fresh mango leaves for traditional decorations",
      price: "₹45",
      unit: "bunch",
      imagePath: "/assets/mango leaves.jpeg",
      slug: "mango-leaves",
      category: "leaves",
    },
    {
      name: "Potpourri Items",
      description: "Aromatic dried flowers and botanicals potpourri",
      price: "₹350",
      unit: "300g",
      imagePath: "/assets/potpui.jpg",
      slug: "potpourri-items",
      category: "dried-flowers-botanicals",
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
            <Link
              href="/"
              className="text-sm font-medium transition-colors"
              style={{ color: "#323232", fontWeight: "600" }}
            >
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
            <Link href="/contact" className="text-sm font-medium transition-colors" style={{ color: "#323232" }}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex rounded-full px-6" style={{ backgroundColor: "#323232", color: "white" }}>
              Shop Now
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-beige-100">
          <div className="absolute inset-0 bg-[url('/patterns/floral-pattern.png')] opacity-5"></div>
          <FloatingElements />
          <div className="container relative z-10 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-beige-200 rounded-full text-grey-900 text-sm font-medium mb-2">
                  Premium Quality Products
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-grey-900 via-grey-800 to-grey-700 bg-clip-text text-transparent">
                  Exquisite Flowers & Sacred Essentials
                </h1>
                <p className="text-lg md:text-xl text-grey-700 leading-relaxed">
                  Discover our handpicked collection of fresh flowers, artisanal garlands, sacred leaves, and premium
                  botanicals for your spiritual journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="#products">
                    <Button className="bg-gradient-to-r from-grey-900 to-grey-700 hover:from-grey-800 hover:to-grey-600 rounded-full px-8 py-6 text-base">
                      Explore Collection
                    </Button>
                  </Link>
                  <Link href="#about">
                    <Button
                      variant="outline"
                      className="border-grey-300 text-grey-900 hover:bg-beige-100 rounded-full px-8 py-6 text-base"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-beige-200 to-beige-300 blur-3xl opacity-60 -z-10"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/assets/banner.jpg"
                    width={600}
                    height={600}
                    alt="Fresh flowers and garlands"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-beige-50 to-transparent"></div>
        </section>

        {/* Aim Section */}
        <section className="py-20 bg-grey-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/floral-pattern.png')] opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-4xl">🌸</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-beige-300">Aim</h2>
              </div>
              <p className="text-xl md:text-2xl text-beige-200 leading-relaxed">
                To deliver the finest quality Indian flowers to international markets with consistent freshness,
                eco-friendly practices, and reliable service, thereby promoting India's rich floriculture heritage
                globally.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-beige-100 -z-10"></div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-grey-900 to-grey-700 bg-clip-text text-transparent">
                  Our Product Categories
                </h2>
                <p className="text-grey-600 max-w-2xl">
                  Explore our comprehensive range of fresh flowers, sacred leaves, and traditional botanicals
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-grey-900 hover:text-grey-800 hover:bg-beige-100 mt-4 md:mt-0 group"
              >
                View All Categories{" "}
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/fresh-flowers">
                <CategoryCard
                  title="Fresh Flowers & Garlands"
                  description="Premium jasmine, roses, and handcrafted garlands"
                  imagePath="/assets/jasmine.png"
                  color="bg-beige-100"
                  iconColor="text-grey-900"
                />
              </Link>
              <Link href="/leaves">
                <CategoryCard
                  title="Sacred Leaves"
                  description="Mango, tulasi, banana, and palm leaves"
                  imagePath="/assets/sacred.jpg"
                  color="bg-green-50"
                  iconColor="text-green-600"
                />
              </Link>
              <Link href="/dried-flowers-botanicals">
                <CategoryCard
                  title="Dried Flowers & Botanicals"
                  description="Potpourri, dried herbs, and decorative elements"
                  imagePath="/assets/dried-bot-banner.webp"
                  color="bg-amber-50"
                  iconColor="text-amber-600"
                />
              </Link>
              <Link href="/ghee-oils">
                <CategoryCard
                  title="Ghee & Oils"
                  description="Pure ghee and traditional oils for rituals"
                  imagePath="/assets/ghee-oil.webp"
                  color="bg-orange-50"
                  iconColor="text-orange-600"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-20 bg-beige-100">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-grey-300"></div>
                <span className="mx-4 text-grey-900 font-medium">Featured Products</span>
                <div className="h-px w-12 bg-grey-300"></div>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-grey-900 to-grey-700 bg-clip-text text-transparent">
                Handpicked for Quality
              </h2>
              <p className="text-grey-600 max-w-2xl mx-auto">
                Our most popular products, carefully selected for their exceptional quality and freshness
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  unit={product.unit}
                  imagePath={product.imagePath}
                  slug={product.slug}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-beige-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/floral-pattern.png')] opacity-5"></div>
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-beige-200 to-beige-300 blur-3xl opacity-60 -z-10"></div>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-64 h-64 border-8 border-white rounded-2xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 border-8 border-white rounded-2xl"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                    <Image
                      src="/assets/garland-banner.jpg"
                      width={600}
                      height={600}
                      alt="About 3 Knotts"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-beige-200 rounded-full text-grey-900 text-sm font-medium mb-4">
                  Our Story
                </div>
                <h2 className="text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-grey-900 to-grey-700 bg-clip-text text-transparent">
                  About 3 Knotts
                </h2>
                <p className="text-grey-700 mb-6 leading-relaxed">
                  At 3 Knotts, we take pride in providing the freshest flowers and highest quality spiritual essentials
                  to our customers. Our journey began with a simple mission: to deliver nature's beauty and purity to
                  your doorstep.
                </p>
                <p className="text-grey-700 mb-6 leading-relaxed">
                  We source our flowers directly from local farmers, ensuring they reach you at their freshest. Our
                  garlands are handcrafted with care and attention to detail, making them perfect for weddings,
                  festivals, and daily pooja rituals.
                </p>
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-grey-900 to-grey-700 hover:from-grey-800 hover:to-grey-600 rounded-full px-8 py-6 text-base">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-grey-300"></div>
                <span className="mx-4 text-grey-900 font-medium">Testimonials</span>
                <div className="h-px w-12 bg-grey-300"></div>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-grey-900 to-grey-700 bg-clip-text text-transparent">
                What Our Customers Say
              </h2>
              <p className="text-grey-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The flowers from 3 Knotts are always fresh and fragrant. I order jasmine every week for my pooja, and they never disappoint. Highly recommended!"
                author="Priya Sharma"
                role="Regular Customer"
              />

              <TestimonialCard
                quote="We ordered wedding garlands from 3 Knotts for our daughter's wedding. They were absolutely beautiful and stayed fresh throughout the ceremony. Thank you!"
                author="Rajesh Patel"
                role="Wedding Customer"
              />

              <TestimonialCard
                quote="The quality of their botanicals and potpourri is exceptional. Their products have transformed our home's ambiance. 3 Knotts is our trusted partner."
                author="Anita Desai"
                role="Loyal Customer"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-beige-100">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-grey-300"></div>
                <span className="mx-4 text-grey-900 font-medium">Get In Touch</span>
                <div className="h-px w-12 bg-grey-300"></div>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-grey-900 to-grey-700 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <p className="text-grey-600 max-w-2xl mx-auto">
                Have questions or special requests? Get in touch with us today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-grey-900">Get In Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-beige-200 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-grey-900" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Phone</h4>
                          <p className="text-grey-600">+91 97890 83875</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-beige-200 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-grey-900" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Email</h4>
                          <p className="text-grey-600">info@3knotts.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-beige-200 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-grey-900" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Address</h4>
                          <p className="text-grey-600">
                            123 Temple Street, Flower Market Area
                            <br />
                            Chennai, Tamil Nadu 600001
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-xl font-serif font-bold mb-4 text-grey-900">Business Hours</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-beige-200">
                          <span className="text-grey-700 font-medium">Monday - Saturday:</span>
                          <span className="text-grey-900 font-medium">6:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-beige-200">
                          <span className="text-grey-700 font-medium">Sunday:</span>
                          <span className="text-grey-900 font-medium">6:00 AM - 12:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-grey-900">Send us a Message</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-grey-700">
                            Name
                          </label>
                          <input
                            id="name"
                            className="flex h-12 w-full rounded-xl border border-beige-300 bg-white px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-grey-700">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-12 w-full rounded-xl border border-beige-300 bg-white px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-grey-700">
                          Phone
                        </label>
                        <input
                          id="phone"
                          className="flex h-12 w-full rounded-xl border border-beige-300 bg-white px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-grey-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[150px] w-full rounded-xl border border-beige-300 bg-white px-4 py-2 text-sm ring-offset-background placeholder:text-grey-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-grey-900 to-grey-700 hover:from-grey-800 hover:to-grey-600 rounded-xl py-6 text-base">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-grey-900 to-grey-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/floral-pattern.png')] opacity-10"></div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-3 text-beige-300">Subscribe to Our Newsletter</h2>
                <p className="text-beige-200">Stay updated with our latest products and special offers</p>
              </div>
              <div className="w-full max-w-md">
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-14 w-full rounded-full border-0 bg-white/90 backdrop-blur-sm px-6 py-2 text-sm text-grey-800 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-white text-grey-900 hover:bg-beige-100 rounded-full px-6 h-14">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-grey-900 text-beige-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/floral-pattern.png')] opacity-5"></div>
        <div className="container py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-beige-300 rounded-full opacity-20 animate-pulse"></div>
                  <Flower className="h-8 w-8 text-beige-300 relative z-10" />
                </div>
                <span className="text-2xl font-serif font-bold text-white">3 Knotts</span>
              </div>
              <p className="text-beige-400 mb-6 leading-relaxed">
                Premium quality fresh flowers, garlands, and spiritual essentials for all your sacred needs.
              </p>
            </div>

            <div>
              <h3 className="text-white font-serif font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Home
                  </a>
                </li>
                <li>
                  <a
                    href="/fresh-flowers"
                    className="text-beige-400 hover:text-beige-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" /> Fresh Flowers & Garlands
                  </a>
                </li>
                <li>
                  <a href="/leaves" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Sacred Leaves
                  </a>
                </li>
                <li>
                  <a
                    href="/dried-flowers-botanicals"
                    className="text-beige-400 hover:text-beige-300 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" /> Dried Flowers & Botanicals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-bold text-xl mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Fresh Flowers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Garlands
                  </a>
                </li>
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Sacred Leaves
                  </a>
                </li>
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Botanicals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Ghee & Oils
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-bold text-xl mb-6">Customer Service</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-beige-400 hover:text-beige-300 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-grey-800 mt-12 pt-8 text-center text-beige-400">
            <p>&copy; {new Date().getFullYear()} 3 Knotts. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
