"use client"

import Image from "next/image"
import { FaInstagram } from "react-icons/fa"
import { useRouter, usePathname } from "next/navigation"

const navigation = [
  { label: "Início", href: "inicio" },
  { label: "Sobre", href: "sobre" },
  { label: "Cursos", href: "cursos" },
  { label: "Certificação", href: "certificacao" },
  { label: "Contato", href: "contato" },
]

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (section: string) => {
    if (pathname !== "/") {
      router.push(`/#${section}`)

      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)

      return
    }

    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logocurso-dwHbGbEvLY1sYCsVofE3xlHLJ2kkU5.png"
                alt="SALVAR"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <span className="text-base font-semibold text-foreground">
                  SALVAR
                </span>
                <p className="text-[10px] text-muted-foreground uppercase">
                  Cursos de Emergência
                </p>
              </div>
            </div>

            <p className="text-sm text-white max-w-md">
              Formando profissionais preparados para salvar vidas desde 2019.
              Excelência em treinamentos de emergência com certificação internacional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">
              Contato
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: (51) 99519-8524</li>
              <li>WhatsApp: (53) 9143-6082</li>
              <li>WhatsApp: (55) 99928-7899</li>
              <li>E-mail: contato@salvaredu.com.br</li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/salvartreinamentosrs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center 
                bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SALVAR Cursos e Treinamentos de Emergência.
          </p>
        </div>
      </div>
    </footer>
  )
}