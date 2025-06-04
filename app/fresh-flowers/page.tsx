import { Card } from "@/components/ui/card"
import { Flower, ArrowLeft, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function FreshFlowersPage() {
  const freshFlowerProducts = [
    {
      name: "Rose Yellow 🟡",
      description: "Fresh yellow roses, perfect for celebrations and decorations",
      price: "₹180",
      unit: "100g",
      imagePath: "/assets/rose-yellow.jpg",
      slug: "rose-yellow",
      category: "fresh-flowers",
    },
    {
      name: "Red Rose",
      description: "Premium red roses for special occasions and romantic gestures",
      price: "₹200",
      unit: "100g",
      imagePath: "/assets/red-rose.jpg",
      slug: "red-rose",
      category: "fresh-flowers",
    },
    {
      name: "Samanthi",
      description: "Traditional samanthi flowers for daily pooja and rituals",
      price: "₹90",
      unit: "100g",
      imagePath: "/assets/samanthi.jpg",
      slug: "samanthi",
      category: "fresh-flowers",
    },
    {
      name: "Samangee",
      description: "Fresh samangee flowers, premium quality for temple offerings",
      price: "₹150",
      unit: "100g",
      imagePath: "/assets/samangee.webp",
      slug: "samangee",
      category: "fresh-flowers",
    },
    {
      name: "Malli (Jasmine)",
      description: "Premium quality fresh jasmine flowers, handpicked daily",
      price: "₹120",
      unit: "100g",
      imagePath: "/assets/malli.jpeg",
      slug: "malli",
      category: "fresh-flowers",
    },
    {
      name: "Mullai",
      description: "Traditional mullai flowers for pooja and spiritual ceremonies",
      price: "₹110",
      unit: "100g",
      imagePath: "/assets/mullai.jpg",
      slug: "mullai",
      category: "fresh-flowers",
    },
  ]

  const garlandProducts = [
    {
      name: "Pooja Garland",
      description: "Traditional garland for daily pooja and temple rituals",
      price: "₹280",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
      slug: "pooja-garland",
      category: "garlands",
    },
    {
      name: "Wedding Garland",
      description: "Elegant wedding garland handcrafted for special ceremonies",
      price: "₹850",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
      slug: "wedding-garland",
      category: "garlands",
    },
    {
      name: "Andal Garland",
      description: "Traditional Andal style temple garland for divine offerings",
      price: "₹650",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
      slug: "andal-garland",
      category: "garlands",
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
            <Link href="/fresh-flowers" className="text-sm font-medium" style={{ color: "#323232", fontWeight: "600" }}>
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
                  Fresh Flowers & Garlands
                </div>
                <h1
                  className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4"
                  style={{ color: "#323232" }}
                >
                  Premium Fresh Flowers & Handcrafted Garlands
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: "#323232" }}>
                  Discover our handpicked collection of fresh flowers including roses, jasmine, samanthi, samangee, and
                  traditional garlands for all your spiritual and ceremonial needs.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/assets/rose.jpeg"
                    width={600}
                    height={600}
                    alt="Fresh flowers and garlands collection"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fresh Flowers Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Fresh Flowers
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Premium quality fresh flowers sourced daily from local farmers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {freshFlowerProducts.map((product, index) => (
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

        {/* Garlands Section */}
        <section className="py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Handcrafted Garlands
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Traditional garlands handcrafted with care for your special occasions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {garlandProducts.map((product, index) => (
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

        {/* Categories */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: "#323232" }}>
              Product Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#DDD0C8" }}
                  >
                    <Flower className="h-8 w-8" style={{ color: "#323232" }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#323232" }}>
                    Fresh Flowers
                  </h3>
                  <p className="mb-4" style={{ color: "#323232" }}>
                    Daily fresh flowers for pooja and decoration
                  </p>
                  <ul className="text-sm space-y-1" style={{ color: "#323232" }}>
                    <li>• Rose Yellow & Red</li>
                    <li>• Samanthi & Samangee</li>
                    <li>• Malli (Jasmine) & Mullai</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#DDD0C8" }}
                  >
                    <Leaf className="h-8 w-8" style={{ color: "#323232" }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#323232" }}>
                    Garlands
                  </h3>
                  <p className="mb-4" style={{ color: "#323232" }}>
                    Handcrafted garlands for special occasions
                  </p>
                  <ul className="text-sm space-y-1" style={{ color: "#323232" }}>
                    <li>• Pooja Garland</li>
                    <li>• Wedding Garland</li>
                    <li>• Andal Garland</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </div>
  )
}
