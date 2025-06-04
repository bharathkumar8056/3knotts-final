import { Droplets, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function GheeOilsPage() {
  const gheeOilsProducts = [
    {
      name: "Pure Cow Ghee",
      description: "Organic and pure cow ghee for pooja and cooking",
      price: "₹650",
      unit: "500ml",
      imagePath: "/assets/cow-ghee.jpeg",
      slug: "pure-cow-ghee",
      category: "ghee-oils",
    },
    {
      name: "Sesame Oil",
      description: "Cold-pressed sesame oil for lamps and cooking",
      price: "₹280",
      unit: "500ml",
      imagePath: "/assets/sesame.jpeg",
      slug: "sesame-oil",
      category: "ghee-oils",
    },
    {
      name: "Coconut Oil",
      description: "Pure coconut oil for pooja rituals and hair care",
      price: "₹320",
      unit: "500ml",
      imagePath: "/assets/coconut.jpeg",
      slug: "coconut-oil",
      category: "ghee-oils",
    },
    {
      name: "Mustard Oil",
      description: "Traditional mustard oil for cooking and massage",
      price: "₹250",
      unit: "500ml",
      imagePath: "/assets/mustard.jpeg",
      slug: "mustard-oil",
      category: "ghee-oils",
    },
    {
      name: "Groundnut Oil",
      description: "Pure groundnut oil for cooking and deep frying",
      price: "₹180",
      unit: "500ml",
      imagePath: "/assets/groundnut.jpeg",
      slug: "groundnut-oil",
      category: "ghee-oils",
    },
    {
      name: "Castor Oil",
      description: "Pure castor oil for traditional remedies and hair care",
      price: "₹220",
      unit: "250ml",
      imagePath: "/assets/castor.jpeg",
      slug: "castor-oil",
      category: "ghee-oils",
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
              <Droplets className="h-8 w-8 relative z-10" style={{ color: "#323232" }} />
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
            <Link href="/ghee-oils" className="text-sm font-medium" style={{ color: "#323232", fontWeight: "600" }}>
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
                  Pure Ghee & Oils
                </div>
                <h1
                  className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4"
                  style={{ color: "#323232" }}
                >
                  Premium Quality Ghee & Traditional Oils
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: "#323232" }}>
                  Pure and authentic ghee and oils including cow ghee, sesame oil, coconut oil, and other traditional
                  oils for your cooking, pooja, and wellness needs.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/assets/ghee-oil.webp"
                    width={600}
                    height={600}
                    alt="Pure ghee and oils collection"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Our Ghee & Oils Collection
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Pure and authentic ghee and oils sourced from trusted suppliers for your culinary and spiritual needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gheeOilsProducts.map((product, index) => (
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

        {/* Benefits Section */}
        <section className="py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Why Choose Our Ghee & Oils?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  100% Pure
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  No additives or preservatives, completely natural
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Traditional Methods
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Prepared using time-tested traditional methods
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Quality Assured
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Rigorous quality checks ensure premium standards
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Multiple Uses
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Perfect for cooking, pooja, and wellness applications
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </div>
  )
}
