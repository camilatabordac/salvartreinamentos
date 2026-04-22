"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Início", href: "inicio" },
  { label: "Sobre", href: "sobre" },
  { label: "Cursos", href: "cursos", dropdown: true },
  { label: "Certificação", href: "certificacao" },
  { label: "Contato", href: "contato" },
]

const courses = [
  { label: "Todos", href: "/#cursos" },
  { label: "ACLS", href: "/cursos/acls" },
  { label: "APH", href: "/cursos/aph" },
  { label: "BLS", href: "/cursos/bls" },
  { label: "Sala Vermelha", href: "/cursos/sala-vermelha" },
  { label: "Procedimentos", href: "/cursos/procedimentos" },
  { label: "Pediatria", href: "/cursos/pediatria" },
  { label: "Lei Lucas", href: "/cursos/lei-lucas" },
]

export function Navbar() {
  const pathname = usePathname()

  const [mobile, setMobile] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // 🔥 navegação confiável
  const goTo = (id: string) => {
    setMobile(false)

    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }

    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <button onClick={() => goTo("inicio")} className="flex items-center gap-2 z-50">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logocurso-dwHbGbEvLY1sYCsVofE3xlHLJ2kkU5.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="text-white font-semibold">SALVAR</span>
        </button>

        {/* DESKTOP MENU CENTRAL */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">

          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => item.dropdown && setDropdown(true)}
              onMouseLeave={() => item.dropdown && setDropdown(false)}
            >
              <button
                onClick={() => !item.dropdown && goTo(item.href)}
                className="relative text-white/70 hover:text-white transition text-sm font-medium"
              >
                {item.label}

                {/* underline animado */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* DROPDOWN */}
              {item.dropdown && dropdown && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-56 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-xl">
                  {courses.map((c) => (
                    <button
                      key={c.href}
                      onClick={() => (window.location.href = c.href)}
                      className="block w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* CTA DIREITA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-500 text-white rounded-full px-6 py-5 text-sm font-semibold shadow-lg"
          >
            <a href="https://wa.me/+5551995198524" target="_blank">
              Entrar em contato
            </a>
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMobile(!mobile)} className="lg:hidden text-white z-50">
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU (INALTERADO) */}
      {mobile && (
        <div className="lg:hidden bg-black p-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.href}>
              {!item.dropdown ? (
                <button
                  onClick={() => goTo(item.href)}
                  className="text-white text-lg"
                >
                  {item.label}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="text-white text-lg flex gap-2"
                  >
                    Cursos <ChevronDown />
                  </button>

                  {dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {courses.map((c) => (
                        <button
                          key={c.href}
                          onClick={() => (window.location.href = c.href)}
                          className="block text-white/70"
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          <Button asChild className="bg-red-600 rounded-full py-6">
            <a href="https://wa.me/+5551995198524" target="_blank">
              Entrar em contato
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}