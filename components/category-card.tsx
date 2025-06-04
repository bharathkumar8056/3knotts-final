import { Button } from "@/components/ui/button"
import { Flower, ChevronRight } from "lucide-react"
import Image from "next/image"

interface CategoryCardProps {
  title: string
  description: string
  imagePath: string
  color: string
  iconColor: string
}

export function CategoryCard({ title, description, imagePath, color, iconColor }: CategoryCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden group relative ${color} h-96 transition-all hover:shadow-xl cursor-pointer`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={title}
          width={300}
          height={300}
          className="object-cover w-48 h-48 rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
            <Flower className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <Button variant="ghost" className={`${iconColor} hover:bg-transparent p-0 group/btn`}>
              Explore Collection{" "}
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
