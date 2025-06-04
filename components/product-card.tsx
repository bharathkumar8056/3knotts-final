import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"

interface ProductCardProps {
  name: string
  description: string
  price: string
  unit: string
  imagePath: string
  slug: string
  category: string
}

export function ProductCard({ name, description, price, unit, imagePath, slug, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-0 rounded-2xl group bg-white">
      <div className="relative h-64 overflow-hidden" style={{ backgroundColor: "#DDD0C8" }}>
        <div
          className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-80 group-hover:opacity-70 transition-opacity"
          style={{ backgroundColor: "rgba(221, 208, 200, 0.2)" }}
        ></div>
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Link href={`/products/${category}/${slug}`}>
            <Button size="icon" className="rounded-full bg-white hover:bg-white shadow-md" style={{ color: "#323232" }}>
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold mb-1 group-hover:transition-colors" style={{ color: "#323232" }}>
          {name}
        </h3>
        <p className="text-sm mb-3" style={{ color: "#323232" }}>
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg" style={{ color: "#323232" }}>
              {price}
            </span>
            <span className="text-sm ml-1" style={{ color: "#323232" }}>
              / {unit}
            </span>
          </div>
          <Link href={`/products/${category}/${slug}`}>
            <Button size="sm" className="rounded-full" style={{ backgroundColor: "#DDD0C8", color: "#323232" }}>
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
