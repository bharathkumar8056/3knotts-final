"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Flower } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/fresh-flowers", label: "Fresh Flowers & Garlands" },
    { href: "/leaves", label: "Leaves" },
    { href: "/dried-flowers-botanicals", label: "Dried Flowers & Botanicals" },
    { href: "/ghee-oils", label: "Ghee & Oils" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2" style={{ color: "#323232" }} size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b" style={{ borderColor: "#DDD0C8" }}>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div
                  className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                  style={{ backgroundColor: "#323232" }}
                ></div>
                <Flower className="h-8 w-8 relative z-10" style={{ color: "#323232" }} />
              </div>
              <span className="text-xl font-serif font-bold" style={{ color: "#323232" }}>
                3 Knotts
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
              <X className="h-5 w-5" style={{ color: "#323232" }} />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-3 rounded-lg transition-colors font-medium"
                    style={{ color: "#323232" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t pt-6" style={{ borderColor: "#DDD0C8" }}>
            <Button
              className="w-full rounded-full"
              style={{ backgroundColor: "#323232", color: "white" }}
              onClick={() => setOpen(false)}
            >
              Shop Now
            </Button>
            <div className="mt-4 text-center">
              <p className="text-sm" style={{ color: "#323232" }}>
                Need help?
              </p>
              <a href="tel:+919789083875" className="text-sm font-medium" style={{ color: "#323232" }}>
                Call +91 97890 83875
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
