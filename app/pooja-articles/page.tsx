import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flame, ArrowLeft, ShoppingBag, Droplets, Sparkles, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function PoojaArticlesPage() {
  const poojaProducts = [
    {
      name: "Pure Cow Ghee",
      description: "Organic and pure cow ghee for pooja",
      price: "₹650",
      unit: "500ml",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sesame Oil",
      description: "Cold-pressed sesame oil for lamps",
      price: "₹280",
      unit: "500ml",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Coconut Oil",
      description: "Pure coconut oil for pooja rituals",
      price: "₹320",
      unit: "500ml",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Camphor Tablets",
      description: "Pure camphor tablets for aarti",
      price: "₹120",
      unit: "100g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Incense Sticks",
      description: "Aromatic incense sticks for prayers",
      price: "₹85",
      unit: "pack",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kumkum Powder",
      description: "Traditional kumkum for tilaka",
      price: "₹45",
      unit: "50g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Turmeric Powder",
      description: "Pure turmeric powder for rituals",
      price: "₹60",
      unit: "100g",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sandalwood Paste",
      description: "Authentic sandalwood paste",
      price: "₹450",
      unit: "100g",
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
              <Flame className="h-8 w-8 text-purple-700 relative z-10" />
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
            <Link href="/botanicals" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Botanicals
            </Link>
            <Link href="/pooja-articles" className="text-sm font-medium text-purple-600">
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
                <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-2">
                  Pooja Essentials
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-orange-900 via-orange-700 to-orange-500 bg-clip-text text-transparent">
                  Sacred Pooja Articles
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complete range of authentic pooja essentials including pure ghee, oils, camphor, kumkum, turmeric, and
                  sandalwood paste for your daily spiritual rituals.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-200 to-amber-100 blur-3xl opacity-60 -z-10"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Sacred pooja articles"
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
              <h2 className="text-3xl font-serif font-bold mb-6 bg-gradient-to-r from-orange-900 to-orange-600 bg-clip-text text-transparent">
                Our Pooja Articles Collection
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Authentic and pure pooja essentials sourced from trusted suppliers for your spiritual needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {poojaProducts.map((product, index) => (
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

        {/* Categories */}
        <section className="py-20 bg-[#fff7ed]">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 bg-gradient-to-r from-orange-900 to-orange-600 bg-clip-text text-transparent">
              Pooja Article Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Oils & Ghee</h3>
                  <p className="text-gray-600 mb-4">Pure oils and ghee for lamps and rituals</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Pure Cow Ghee</li>
                    <li>• Sesame Oil</li>
                    <li>• Coconut Oil</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Powders & Pastes</h3>
                  <p className="text-gray-600 mb-4">Traditional powders for tilaka and rituals</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Kumkum Powder</li>
                    <li>• Turmeric Powder</li>
                    <li>• Sandalwood Paste</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Aromatics</h3>
                  <p className="text-gray-600 mb-4">Fragrant items for prayers and meditation</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Camphor Tablets</li>
                    <li>• Incense Sticks</li>
                    <li>• Aromatic Oils</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
