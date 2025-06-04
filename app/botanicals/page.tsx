import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, ArrowLeft, ShoppingBag, Flower2, TreePine, Sparkles, Flower } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function BotanicalsPage() {
  const botanicalProducts = [
    {
      name: "Premium Botanicals Mix",
      description: "Curated mix of dried botanicals for decoration",
      price: "₹320",
      unit: "250g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Small Botanicals Potpourri",
      description: "Delicate small botanicals for potpourri",
      price: "₹280",
      unit: "200g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dried Lavender Buds",
      description: "Aromatic dried lavender for relaxation",
      price: "₹450",
      unit: "150g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rose Hip Botanicals",
      description: "Natural rose hips for decorative use",
      price: "₹380",
      unit: "200g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Eucalyptus Leaves",
      description: "Dried eucalyptus leaves for aromatherapy",
      price: "₹220",
      unit: "100g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mixed Herb Botanicals",
      description: "Assorted dried herbs and botanicals",
      price: "₹350",
      unit: "300g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Decorative Seed Pods",
      description: "Natural seed pods for craft and decoration",
      price: "₹180",
      unit: "50 pieces",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Botanical Craft Kit",
      description: "Complete kit for botanical crafts",
      price: "₹650",
      unit: "kit",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfaf7]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#e9e1f8]">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <Flower className="h-8 w-8 text-purple-700 relative z-10" />
            </div>
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
              3 Knotts
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/fresh-flowers" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Fresh Flowers
            </Link>
            <Link href="/garlands" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Garlands
            </Link>
            <Link href="/botanicals" className="text-sm font-medium text-purple-600">
              Botanicals
            </Link>
            <Link href="/pooja-articles" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Pooja Articles
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-purple-200 hover:border-purple-300 hover:bg-purple-50"
            >
              <ShoppingBag className="h-4 w-4 text-purple-700" />
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#f9f5ff] py-20">
          <div className="container">
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-purple-700 hover:text-purple-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-2">
                  Natural Botanicals
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-green-900 via-green-700 to-green-500 bg-clip-text text-transparent">
                  Premium Botanicals Collection
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Discover our curated collection of natural botanicals, including potpourri mixes, dried herbs,
                  aromatic lavender, and decorative elements for crafts and home decoration.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-200 to-emerald-100 blur-3xl opacity-60 -z-10"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Natural botanicals collection"
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
              <h2 className="text-3xl font-serif font-bold mb-6 bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
                Our Botanicals Collection
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Natural, dried botanicals perfect for potpourri, crafts, aromatherapy, and home decoration
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {botanicalProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  unit={product.unit}
                  imagePath={product.imagePath}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Botanical Categories */}
        <section className="py-20 bg-[#f0fdf4]">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
              Botanical Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Potpourri & Aromatics</h3>
                  <p className="text-gray-600 mb-4">Fragrant botanicals for home aromatherapy</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Small Botanicals Potpourri</li>
                    <li>• Dried Lavender Buds</li>
                    <li>• Mixed Herb Botanicals</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flower2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Decorative Botanicals</h3>
                  <p className="text-gray-600 mb-4">Beautiful elements for decoration and crafts</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Premium Botanicals Mix</li>
                    <li>• Rose Hip Botanicals</li>
                    <li>• Decorative Seed Pods</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Craft & Wellness</h3>
                  <p className="text-gray-600 mb-4">Botanicals for crafting and wellness</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Eucalyptus Leaves</li>
                    <li>• Botanical Craft Kit</li>
                    <li>• Natural Elements</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6 bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
                Benefits of Natural Botanicals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Natural</h3>
                <p className="text-gray-600 text-sm">All our botanicals are naturally dried without chemicals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Aromatherapy</h3>
                <p className="text-gray-600 text-sm">Natural fragrances for relaxation and wellness</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flower2 className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Decorative</h3>
                <p className="text-gray-600 text-sm">Perfect for home decoration and craft projects</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Long Lasting</h3>
                <p className="text-gray-600 text-sm">Properly dried botanicals that maintain their beauty</p>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </main>
    </div>
  )
}
