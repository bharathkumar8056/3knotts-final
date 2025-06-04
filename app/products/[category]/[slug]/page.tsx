"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Star, Truck, Shield, Clock, Heart, Flower } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Complete product database
const getProductData = (category: string, slug: string) => {
  const products: Record<string, any> = {
    "fresh-flowers": {
      "rose-yellow": {
        name: "Rose Yellow 🟡",
        description: "Fresh yellow roses, perfect for celebrations and decorations",
        price: "₹180",
        unit: "100g",
        images: ["/assets/rose-yellow.jpg"],
        specifications: [
          "Freshness: Picked daily at dawn",
          "Origin: Local farms in Tamil Nadu",
          "Shelf life: 2-3 days when refrigerated",
          "Best for: Celebrations, decorations, gifts",
          "Fragrance: Mild and pleasant",
          "Packaging: Eco-friendly wrapping",
        ],
        features: [
          "Hand-picked for quality",
          "Chemical-free cultivation",
          "Same-day delivery available",
          "Perfect for special occasions",
        ],
        uses: ["Wedding decorations", "Birthday celebrations", "Home decoration", "Gift bouquets", "Photography props"],
      },
      "red-rose": {
        name: "Red Rose",
        description: "Premium red roses for special occasions and romantic gestures",
        price: "₹200",
        unit: "100g",
        images: ["/assets/red-rose.jpg"],
        specifications: [
          "Freshness: Picked daily at dawn",
          "Origin: Premium rose gardens",
          "Shelf life: 3-4 days when refrigerated",
          "Best for: Romance, special occasions",
          "Fragrance: Strong and romantic",
          "Packaging: Premium wrapping",
        ],
        features: [
          "Premium quality roses",
          "Long-lasting freshness",
          "Perfect for romantic occasions",
          "Chemical-free cultivation",
        ],
        uses: ["Valentine's Day", "Anniversaries", "Proposals", "Wedding ceremonies", "Romantic gifts"],
      },
      samanthi: {
        name: "Samanthi",
        description: "Traditional samanthi flowers for daily pooja and rituals",
        price: "₹90",
        unit: "100g",
        images: ["/assets/samanthi.jpg"],
        specifications: [
          "Freshness: Picked before sunrise",
          "Origin: Traditional flower farms",
          "Shelf life: 1-2 days",
          "Best for: Daily pooja rituals",
          "Fragrance: Divine and pure",
          "Packaging: Traditional wrapping",
        ],
        features: ["Sacred significance", "Fresh daily harvest", "Traditional cultivation", "Pure and divine"],
        uses: ["Daily pooja", "Temple offerings", "Religious ceremonies", "Spiritual practices", "Home altar"],
      },
      samangee: {
        name: "Samangee",
        description: "Fresh samangee flowers, premium quality for temple offerings",
        price: "₹150",
        unit: "100g",
        images: ["/assets/samangee.webp"],
        specifications: [
          "Freshness: Early morning harvest",
          "Origin: Sacred flower gardens",
          "Shelf life: 1-2 days",
          "Best for: Temple offerings",
          "Fragrance: Sacred and pure",
          "Packaging: Traditional banana leaf",
        ],
        features: [
          "Premium temple quality",
          "Sacred significance",
          "Traditional cultivation methods",
          "Pure and fresh",
        ],
        uses: ["Temple offerings", "Religious ceremonies", "Sacred rituals", "Divine worship", "Spiritual practices"],
      },
      malli: {
        name: "Malli (Jasmine)",
        description: "Premium quality fresh jasmine flowers, handpicked daily",
        price: "₹120",
        unit: "100g",
        images: ["/assets/malli.jpeg"],
        specifications: [
          "Freshness: Picked before sunrise",
          "Origin: Traditional jasmine farms",
          "Shelf life: 1-2 days",
          "Best for: Daily pooja, hair decoration",
          "Fragrance: Strong and divine",
          "Packaging: Banana leaf wrapping",
        ],
        features: ["Traditional cultivation methods", "Pesticide-free", "Early morning harvest", "Authentic fragrance"],
        uses: ["Daily pooja rituals", "Hair decoration", "Temple offerings", "Wedding ceremonies", "Aromatherapy"],
      },
      mullai: {
        name: "Mullai",
        description: "Traditional mullai flowers for pooja and spiritual ceremonies",
        price: "₹110",
        unit: "100g",
        images: ["/assets/mullai.jpg"],
        specifications: [
          "Freshness: Morning harvest",
          "Origin: Traditional farms",
          "Shelf life: 1-2 days",
          "Best for: Spiritual ceremonies",
          "Fragrance: Sweet and divine",
          "Packaging: Natural wrapping",
        ],
        features: ["Sacred flower variety", "Traditional significance", "Fresh daily harvest", "Pure cultivation"],
        uses: ["Spiritual ceremonies", "Temple worship", "Religious rituals", "Sacred offerings", "Divine practices"],
      },
    },
    garlands: {
      "pooja-garland": {
        name: "Pooja Garland",
        description: "Traditional garland for daily pooja and temple rituals",
        price: "₹280",
        unit: "piece",
        images: ["/assets/pooja-garland.jpg"],
        specifications: [
          "Length: 3-4 feet",
          "Flowers: Mixed traditional flowers",
          "Freshness: Made fresh daily",
          "Best for: Daily pooja rituals",
          "Style: Traditional threading",
          "Packaging: Eco-friendly wrapping",
        ],
        features: [
          "Handcrafted with care",
          "Traditional threading technique",
          "Fresh flowers daily",
          "Perfect for daily worship",
        ],
        uses: ["Daily pooja", "Home altar", "Temple worship", "Religious ceremonies", "Spiritual practices"],
      },
      "wedding-garland": {
        name: "Wedding Garland",
        description: "Elegant wedding garland handcrafted for special ceremonies",
        price: "₹850",
        unit: "piece",
        images: ["/assets/wedding-garland.webp"],
        specifications: [
          "Length: 5-6 feet",
          "Flowers: Premium roses and jasmine",
          "Freshness: Made on order",
          "Best for: Wedding ceremonies",
          "Style: Elegant bridal design",
          "Packaging: Premium presentation box",
        ],
        features: [
          "Premium flower selection",
          "Elegant bridal design",
          "Custom length available",
          "Perfect for weddings",
        ],
        uses: ["Wedding ceremonies", "Engagement rituals", "Bridal decoration", "Special occasions", "Celebrations"],
      },
      "andal-garland": {
        name: "Andal Garland",
        description: "Traditional Andal style temple garland for divine offerings",
        price: "₹650",
        unit: "piece",
        images: ["/assets/andal-garland.jpg"],
        specifications: [
          "Length: 4-5 feet",
          "Flowers: Traditional temple flowers",
          "Freshness: Made fresh for temples",
          "Best for: Temple offerings",
          "Style: Traditional Andal design",
          "Packaging: Sacred wrapping",
        ],
        features: ["Traditional Andal style", "Sacred temple design", "Premium temple flowers", "Divine significance"],
        uses: ["Temple offerings", "Divine worship", "Religious ceremonies", "Sacred rituals", "Festival celebrations"],
      },
    },
    leaves: {
      "mango-leaves": {
        name: "Mango Leaves",
        description: "Fresh mango leaves for traditional decorations and ceremonies",
        price: "₹45",
        unit: "bunch",
        images: ["/assets/mango leaves.jpeg"],
        specifications: [
          "Freshness: Cut fresh daily",
          "Origin: Organic mango trees",
          "Shelf life: 3-4 days",
          "Best for: Traditional decorations",
          "Color: Vibrant green",
          "Size: Medium to large leaves",
        ],
        features: [
          "Pesticide-free cultivation",
          "Traditional significance",
          "Fresh cut daily",
          "Perfect for ceremonies",
        ],
        uses: [
          "Festival decorations",
          "Wedding ceremonies",
          "Temple decorations",
          "Traditional rituals",
          "Auspicious occasions",
        ],
      },
      tulasi: {
        name: "Tulasi",
        description: "Sacred tulasi leaves for daily pooja and spiritual rituals",
        price: "₹35",
        unit: "bunch",
        images: ["/assets/tulasi.jpg"],
        specifications: [
          "Freshness: Fresh daily harvest",
          "Origin: Sacred tulasi plants",
          "Shelf life: 2-3 days",
          "Best for: Daily pooja",
          "Color: Fresh green",
          "Size: Small to medium leaves",
        ],
        features: ["Sacred significance", "Daily fresh harvest", "Pure cultivation", "Spiritual importance"],
        uses: ["Daily pooja", "Temple worship", "Spiritual rituals", "Religious ceremonies", "Sacred offerings"],
      },
      arugampil: {
        name: "Arugampil",
        description: "Traditional arugampil leaves for temple ceremonies",
        price: "₹55",
        unit: "bunch",
        images: ["/assets/arugampil.jpg"],
        specifications: [
          "Freshness: Fresh daily cut",
          "Origin: Traditional plants",
          "Shelf life: 2-3 days",
          "Best for: Temple ceremonies",
          "Color: Deep green",
          "Size: Medium leaves",
        ],
        features: ["Traditional temple use", "Sacred significance", "Fresh daily harvest", "Pure cultivation"],
        uses: ["Temple ceremonies", "Religious rituals", "Sacred offerings", "Traditional worship", "Divine practices"],
      },
      "banana-leaf": {
        name: "Banana Leaf",
        description: "Large fresh banana leaves for traditional serving and ceremonies",
        price: "₹25",
        unit: "piece",
        images: ["/assets/banana-leaf.webp"],
        specifications: [
          "Freshness: Cut fresh daily",
          "Origin: Organic banana plants",
          "Shelf life: 2-3 days",
          "Best for: Traditional serving",
          "Color: Vibrant green",
          "Size: Large leaves",
        ],
        features: [
          "Large size perfect for serving",
          "Traditional significance",
          "Fresh daily harvest",
          "Natural and pure",
        ],
        uses: ["Traditional serving", "Festival meals", "Wedding ceremonies", "Religious functions", "Cultural events"],
      },
      "palm-leaves": {
        name: "Palm Leaves",
        description: "Traditional palm leaves for decorations and crafts",
        price: "₹40",
        unit: "10 pieces",
        images: ["/assets/palm-leaves.jpg"],
        specifications: [
          "Freshness: Fresh cut",
          "Origin: Traditional palm trees",
          "Shelf life: 4-5 days",
          "Best for: Decorations",
          "Color: Natural green",
          "Size: Medium to large",
        ],
        features: ["Perfect for decorations", "Traditional crafts", "Natural and pure", "Long-lasting"],
        uses: ["Traditional decorations", "Craft projects", "Festival decorations", "Cultural events", "Artistic work"],
      },
    },
    "dried-flowers-botanicals": {
      "dried-flowers": {
        name: "Dried Flowers",
        description: "Premium dried flowers for decoration and potpourri",
        price: "₹220",
        unit: "200g",
        images: ["/assets/dried-bot-banner.webp"],
        specifications: [
          "Type: Mixed dried flowers",
          "Weight: 200g pack",
          "Shelf life: 6-12 months",
          "Best for: Decoration, potpourri",
          "Color: Natural mixed colors",
          "Packaging: Airtight container",
        ],
        features: ["100% natural drying", "Long-lasting beauty", "Perfect for crafts", "Chemical-free"],
        uses: ["Home decoration", "Craft projects", "Potpourri making", "Artistic arrangements", "Gift items"],
      },
      "sola-balls": {
        name: "Sola Balls",
        description: "Natural sola balls for crafts and decorations",
        price: "₹180",
        unit: "50 pieces",
        images: ["/assets/sola-balls.jpeg"],
        specifications: [
          "Type: Natural sola wood",
          "Quantity: 50 pieces",
          "Shelf life: Indefinite",
          "Best for: Crafts, decorations",
          "Color: Natural white",
          "Size: Mixed sizes",
        ],
        features: ["100% natural sola wood", "Perfect for painting", "Lightweight and durable", "Craft-friendly"],
        uses: ["Craft projects", "Decorative items", "Artistic work", "DIY projects", "Educational crafts"],
      },
      "potpourri-items": {
        name: "Potpourri Items",
        description: "Aromatic potpourri mix for home fragrance",
        price: "₹350",
        unit: "300g",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: [
          "Ingredients: Mixed dried flowers and herbs",
          "Fragrance: Natural floral scent",
          "Shelf life: 6-12 months",
          "Best for: Home aromatherapy",
          "Color: Mixed natural colors",
          "Packaging: Airtight container",
        ],
        features: ["100% natural ingredients", "Long-lasting fragrance", "Chemical-free", "Handcrafted blend"],
        uses: ["Home fragrance", "Drawer sachets", "Bathroom freshener", "Car freshener", "Gift items"],
      },
    },
    "ghee-oils": {
      "pure-cow-ghee": {
        name: "Pure Cow Ghee",
        description: "Organic and pure cow ghee for pooja and cooking",
        price: "₹650",
        unit: "500ml",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: [
          "Source: Pure cow milk",
          "Method: Traditional churning",
          "Shelf life: 12 months",
          "Best for: Cooking and pooja",
          "Color: Golden yellow",
          "Packaging: Glass jar",
        ],
        features: ["100% pure cow ghee", "Traditional preparation", "No preservatives", "Rich in vitamins"],
        uses: ["Cooking and frying", "Pooja rituals", "Ayurvedic medicine", "Skin care", "Traditional sweets"],
      },
      "sesame-oil": {
        name: "Sesame Oil",
        description: "Cold-pressed sesame oil for lamps and cooking",
        price: "₹280",
        unit: "500ml",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: [
          "Type: Cold-pressed sesame oil",
          "Method: Traditional extraction",
          "Shelf life: 12 months",
          "Best for: Lamps, cooking",
          "Color: Golden amber",
          "Packaging: Glass bottle",
        ],
        features: ["Cold-pressed extraction", "Traditional method", "Pure and natural", "Multi-purpose use"],
        uses: ["Oil lamps", "Cooking", "Hair care", "Massage", "Traditional medicine"],
      },
      "coconut-oil": {
        name: "Coconut Oil",
        description: "Pure coconut oil for pooja rituals and hair care",
        price: "₹320",
        unit: "500ml",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: [
          "Type: Pure coconut oil",
          "Method: Traditional extraction",
          "Shelf life: 18 months",
          "Best for: Hair care, pooja",
          "Color: Clear to white",
          "Packaging: Glass bottle",
        ],
        features: ["100% pure coconut oil", "Traditional extraction", "Natural and chemical-free", "Multi-purpose use"],
        uses: ["Hair care", "Pooja rituals", "Cooking", "Skin care", "Traditional medicine"],
      },
    },
  }

  return products[category]?.[slug] || null
}

interface ProductPageProps {
  params: {
    category: string
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductData(params.category, params.slug)

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "#323232" }}>
            Product Not Found
          </h1>
          <Link href="/">
            <Button style={{ backgroundColor: "#323232", color: "white" }}>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

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
        {/* Breadcrumb */}
        <section className="py-6" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 transition-colors" style={{ color: "#323232" }}>
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Link>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: "#323232" }}>
                    {product.name}
                  </h1>
                  <p className="text-lg mb-6" style={{ color: "#323232" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold" style={{ color: "#323232" }}>
                      {product.price}
                    </span>
                    <span className="text-lg" style={{ color: "#323232" }}>
                      / {product.unit}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{ color: "#FFD700" }} />
                    ))}
                    <span className="ml-2 text-sm" style={{ color: "#323232" }}>
                      (4.8/5 based on customer reviews)
                    </span>
                  </div>
                </div>

                {/* Contact for Order */}
                <div className="space-y-4">
                  <Button
                    className="w-full py-6 text-lg rounded-xl"
                    style={{ backgroundColor: "#323232", color: "white" }}
                    onClick={() => {
                      const phoneNumber = "919789083875"
                      const message = `Hi! I'm interested in ordering ${product.name} (${product.price}/${product.unit}). Can you help me with the order?`
                      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                      window.open(url, "_blank")
                    }}
                  >
                    Contact for Order via WhatsApp
                  </Button>
                  <p className="text-sm text-center" style={{ color: "#323232" }}>
                    Click above to place your order through WhatsApp
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5" style={{ color: "#323232" }} />
                    <span className="text-sm" style={{ color: "#323232" }}>
                      Same Day Delivery
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" style={{ color: "#323232" }} />
                    <span className="text-sm" style={{ color: "#323232" }}>
                      Quality Assured
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" style={{ color: "#323232" }} />
                    <span className="text-sm" style={{ color: "#323232" }}>
                      Fresh Daily
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" style={{ color: "#323232" }} />
                    <span className="text-sm" style={{ color: "#323232" }}>
                      Handpicked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-20" style={{ backgroundColor: "#DDD0C8" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Specifications */}
              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "#323232" }}>
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec: string, index: number) => (
                    <li key={index} className="text-sm" style={{ color: "#323232" }}>
                      • {spec}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Features */}
              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "#323232" }}>
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="text-sm" style={{ color: "#323232" }}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Uses */}
              <Card className="p-6 border-0 shadow-lg bg-white rounded-2xl">
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "#323232" }}>
                  Uses
                </h3>
                <ul className="space-y-2">
                  {product.uses.map((use: string, index: number) => (
                    <li key={index} className="text-sm" style={{ color: "#323232" }}>
                      • {use}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: "#323232" }}>
                Care Instructions
              </h2>
              <Card className="p-8 border-0 shadow-lg bg-white rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "#323232" }}>
                      Storage
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#323232" }}>
                      Store in a cool, dry place away from direct sunlight. For fresh flowers, keep in refrigerator to
                      maintain freshness.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "#323232" }}>
                      Handling
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#323232" }}>
                      Handle with care to maintain the natural beauty and fragrance. Use clean hands when handling
                      flowers and leaves.
                    </p>
                  </div>
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
