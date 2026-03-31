"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Certificação", href: "#certificacao" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-lg py-3"
          : "bg-gradient-to-b from-background/80 to-transparent py-5"
      } ${inter.className}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logocurso-dwHbGbEvLY1sYCsVofE3xlHLJ2kkU5.png"
              alt="SALVAR"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                SALVAR
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wide uppercase">
                Cursos de Emergência
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/30">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-primary-foreground bg-primary"
                        : "text-foreground/70 hover:text-foreground hover:bg-card"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 text-sm font-semibold rounded-full"
            >
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                <span>Entrar em contato</span>
              </a>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-card transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE DRAWER (NÃO FULL SCREEN) */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-[75%] max-w-sm bg-background/98 backdrop-blur-xl shadow-2xl border-l border-border/20 transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-start justify-center h-full px-8 gap-6">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-foreground/90 hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 text-base font-semibold rounded-full"
            >
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fa-brands fa-whatsapp text-xl" />
                Entrar em contato
              </a>
            </Button>

          </div>
        </div>

        {/* BACKDROP */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}