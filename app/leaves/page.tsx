import { Leaf, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function LeavesPage() {
  const leavesProducts = [
    {
      name: "Mango Leaves",
      description: "Fresh mango leaves for traditional decorations and ceremonies",
      price: "₹45",
      unit: "bunch",
      imagePath: "/assets/mango leaves.jpeg",
      slug: "mango-leaves",
      category: "leaves",
    },
    {
      name: "Tulasi",
      description: "Sacred tulasi leaves for daily pooja and spiritual rituals",
      price: "₹35",
      unit: "bunch",
      imagePath: "/assets/tulasi.jpg",
      slug: "tulasi",
      category: "leaves",
    },
    {
      name: "Arugampil",
      description: "Traditional arugampil leaves for temple ceremonies",
      price: "₹55",
      unit: "bunch",
      imagePath: "/assets/arugampil.jpg",
      slug: "arugampil",
      category: "leaves",
    },
    {
      name: "Banana Leaf",
      description: "Large fresh banana leaves for traditional serving and ceremonies",
      price: "₹25",
      unit: "piece",
      imagePath: "/assets/banana-leaf.webp",
      slug: "banana-leaf",
      category: "leaves",
    },
    {
      name: "Palm Leaves",
      description: "Traditional palm leaves for decorations and crafts",
      price: "₹40",
      unit: "10 pieces",
      imagePath: "/assets/palm-leaves.jpg",
      slug: "palm-leaves",
      category: "leaves",
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
              <Leaf className="h-8 w-8 relative z-10" style={{ color: "#323232" }} />
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
            <Link href="/leaves" className="text-sm font-medium" style={{ color: "#323232", fontWeight: "600" }}>
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
                  Sacred Leaves
                </div>
                <h1
                  className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4"
                  style={{ color: "#323232" }}
                >
                  Traditional Sacred Leaves
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: "#323232" }}>
                  Fresh and sacred leaves including mango, tulasi, arugampil, banana, and palm leaves for your
                  traditional ceremonies and spiritual practices.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/assets/sacred.jpg"
                    width={600}
                    height={600}
                    alt="Sacred leaves collection"
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
                Our Sacred Leaves Collection
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Fresh leaves sourced daily for your traditional ceremonies and spiritual practices
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leavesProducts.map((product, index) => (
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
                Benefits of Sacred Leaves
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Spiritual Significance
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Each leaf carries deep spiritual meaning in traditional practices
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Fresh Daily
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Sourced fresh every morning to maintain their sacred properties
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Traditional Use
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Perfect for ceremonies, decorations, and spiritual rituals
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
