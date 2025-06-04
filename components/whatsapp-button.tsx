"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "919789083875" // WhatsApp number
  const message = "Hi! I'm interested in your flowers and pooja essentials. Can you help me?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] pointer-events-auto">
      <div className="relative">
        <Button
          onClick={handleWhatsAppClick}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto touch-manipulation"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" />
          <span className="sr-only">Contact us on WhatsApp</span>
        </Button>

        {/* Pulse animation - positioned behind the button */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none -z-10"></div>
      </div>
    </div>
  )
}
