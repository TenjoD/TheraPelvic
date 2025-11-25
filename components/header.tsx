"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TP</span>
          </div>
          <span className="font-serif text-xl font-semibold text-primary">TheraPelvic</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/70 hover:text-primary transition">
            Servicios
          </a>
          <a href="#about" className="text-foreground/70 hover:text-primary transition">
            Nosotros
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-primary transition">
            Contacto
          </a>
        </div>

        <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
          Agendar Cita
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <a href="#services" className="block text-foreground/70 hover:text-primary">
              Servicios
            </a>
            <a href="#about" className="block text-foreground/70 hover:text-primary">
              Nosotros
            </a>
            <a href="#contact" className="block text-foreground/70 hover:text-primary">
              Contacto
            </a>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
              Agendar Cita
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
