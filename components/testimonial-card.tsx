import { Card } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="p-8 border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
      <div className="absolute -top-4 -left-4 text-8xl font-serif text-purple-200 opacity-30 select-none">"</div>
      <div className="mb-6">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>
      <blockquote className="text-gray-700 mb-8 relative z-10 leading-relaxed">"{quote}"</blockquote>
      <div className="mt-auto pt-4 border-t border-purple-100">
        <div className="font-serif font-bold text-lg text-purple-800">{author}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </Card>
  )
}
