import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flower, ArrowLeft, ShoppingBag, Heart, Crown, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function GarlandsPage() {
  const garlandProducts = [
    {
      name: "Samangee Vadamalli Malai",
      description: "Traditional samangee and vadamalli garland",
      price: "₹450",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bridal Konda Maalai",
      description: "Elegant bridal hair garland for weddings",
      price: "₹850",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Andal Malai",
      description: "Traditional Andal style temple garland",
      price: "₹650",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jasmine Wedding Garland",
      description: "Premium jasmine garland for ceremonies",
      price: "₹750",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rose Petal Garland",
      description: "Delicate rose petal garland for decoration",
      price: "₹550",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mixed Flower Garland",
      description: "Beautiful mixed flower ceremonial garland",
      price: "₹480",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Temple Decoration Garland",
      description: "Large garland for temple decorations",
      price: "₹1200",
      unit: "piece",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Pooja Room Garland",
      description: "Small garland perfect for home pooja",
      price: "₹280",
      unit: "piece",
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
            <Link href="/garlands" className="text-sm font-medium text-purple-600">
              Garlands
            </Link>
            <Link href="/botanicals" className="text-sm font-medium hover:text-purple-600 transition-colors">
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
                <div className="inline-block px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-2">
                  Flower Garlands
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
                  Handcrafted Flower Garlands
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Exquisite handcrafted garlands including Samangee Vadamalli Malai, Bridal Konda Maalai, and
                  traditional Andal Malai for weddings, ceremonies, and temple decorations.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-200 to-pink-100 blur-3xl opacity-60 -z-10"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Handcrafted flower garlands"
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
              <h2 className="text-3xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
                Our Garland Collection
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From traditional temple garlands to elegant bridal pieces, each garland is handcrafted with care
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {garlandProducts.map((product, index) => (
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

        {/* Garland Types */}
        <section className="py-20 bg-[#f9f5ff]">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              Garland Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Bridal Garlands</h3>
                  <p className="text-gray-600 mb-4">Elegant garlands for wedding ceremonies</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Bridal Konda Maalai</li>
                    <li>• Jasmine Wedding Garland</li>
                    <li>• Rose Petal Garland</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Temple Garlands</h3>
                  <p className="text-gray-600 mb-4">Traditional garlands for temple worship</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Andal Malai</li>
                    <li>• Temple Decoration Garland</li>
                    <li>• Samangee Vadamalli Malai</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Ceremonial Garlands</h3>
                  <p className="text-gray-600 mb-4">Special garlands for all occasions</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Mixed Flower Garland</li>
                    <li>• Pooja Room Garland</li>
                    <li>• Festival Garlands</li>
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
