import { Flower2, ArrowLeft, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function DriedFlowersBotanicalsPage() {
  const driedFlowersProducts = [
    {
      name: "Dried Flowers",
      description: "Premium dried flowers for decoration and potpourri",
      price: "₹220",
      unit: "200g",
      imagePath: "/assets/dried-bot-banner.webp",
      slug: "dried-flowers",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Sola Balls",
      description: "Natural sola balls for crafts and decorations",
      price: "₹180",
      unit: "50 pieces",
      imagePath: "/assets/sola-balls.jpeg",
      slug: "sola-balls",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Sun Bear Palm Leaf",
      description: "Dried sun bear palm leaves for traditional crafts",
      price: "₹45",
      unit: "10 pieces",
      imagePath: "/assets/sun-palm.jpeg",
      slug: "sun-bear-palm-leaf",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Sticks",
      description: "Natural decorative sticks for arrangements",
      price: "₹120",
      unit: "bundle",
      imagePath: "/assets/sticks.jpeg",
      slug: "sticks",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Lotus Pod",
      description: "Dried lotus pods for decorative arrangements",
      price: "₹280",
      unit: "5 pieces",
      imagePath: "/assets/lotus-pods.jpeg",
      slug: "lotus-pod",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Cane Pods",
      description: "Natural cane pods for craft projects",
      price: "₹150",
      unit: "10 pieces",
      imagePath: "/assets/cane-pods.jpeg",
      slug: "cane-pods",
      category: "dried-flowers-botanicals",
    },
  ]

  const botanicalsProducts = [
    {
      name: "Seena Leaves Dried",
      description: "Dried seena leaves for traditional medicine and tea",
      price: "₹180",
      unit: "100g",
      imagePath: "/assets/seena-leaves.jpeg",
      slug: "seena-leaves-dried",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Moringa Leaves Dried",
      description: "Nutritious dried moringa leaves for health benefits",
      price: "₹220",
      unit: "100g",
      imagePath: "/assets/moringa.jpeg",
      slug: "moringa-leaves-dried",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Cinnamon Sticks",
      description: "Premium quality cinnamon sticks for cooking and aromatherapy",
      price: "₹320",
      unit: "100g",
      imagePath: "/assets/cinnamon-sticks.jpeg",
      slug: "cinnamon-sticks",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Other Herbs",
      description: "Curated mix of traditional dried herbs",
      price: "₹280",
      unit: "200g",
      imagePath: "/assets/other-herbs.jpeg",
      slug: "other-herbs",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Sea Shell 🐚 Items Box",
      description: "Collection of natural sea shells for decoration",
      price: "₹450",
      unit: "box",
      imagePath: "/assets/sea-shell.jpeg",
      slug: "sea-shell-items-box",
      category: "dried-flowers-botanicals",
    },
    {
      name: "Potpourri Items",
      description: "Aromatic potpourri mix for home fragrance",
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
              <Flower2 className="h-8 w-8 relative z-10" style={{ color: "#323232" }} />
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
              className="text-sm font-medium"
              style={{ color: "#323232", fontWeight: "600" }}
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
                  Dried Flowers & Botanicals
                </div>
                <h1
                  className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4"
                  style={{ color: "#323232" }}
                >
                  Premium Dried Flowers & Natural Botanicals
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: "#323232" }}>
                  Explore our comprehensive collection of dried flowers, botanicals, herbs, sea shells, and potpourri
                  items for decoration, aromatherapy, and traditional uses.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/assets/dried-bot-banner.webp"
                    width={600}
                    height={600}
                    alt="Dried flowers and botanicals collection"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dried Flowers Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Dried Flowers
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Beautiful dried flowers and natural decorative elements for crafts and home decoration
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {driedFlowersProducts.map((product, index) => (
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

        {/* Botanicals Section */}
        <section className="py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Botanicals
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#323232" }}>
                Traditional herbs, sea shells, and potpourri items for wellness and aromatherapy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {botanicalsProducts.map((product, index) => (
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
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#323232" }}>
                Benefits of Our Botanicals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Flower2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  100% Natural
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  All botanicals are naturally dried without chemicals
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Aromatherapy
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Natural fragrances for relaxation and wellness
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Flower2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Decorative
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Perfect for home decoration and craft projects
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#323232" }}
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#323232" }}>
                  Long Lasting
                </h3>
                <p className="text-sm" style={{ color: "#323232" }}>
                  Properly dried botanicals that maintain their beauty
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
