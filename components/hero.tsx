"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Montserrat } from "next/font/google"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
})

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-orange-400/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            {/* TITLE */}
            <h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-[52px] leading-[1.15] tracking-tight font-medium`}
            >
              <span className="text-foreground">Treinamentos de</span>
              <br />
              <span className="text-primary">Alta Performance</span>
              <br />
              <span className="text-foreground">em Emergência</span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Capacitação com{" "}
              <strong className="text-foreground">
                protocolos atualizados
              </strong>{" "}
              e prática realística para profissionais da saúde que buscam segurança no atendimento.
            </p>

            {/* STATS */}
            <div className="flex gap-6 pt-2">
              <div>
                <p className={`${montserrat.className} text-2xl md:text-3xl font-bold text-foreground`}>
                  3.500<span className="text-primary">+</span>
                </p>
                <p className="text-sm text-muted-foreground">Alunos</p>
              </div>

              <div className="w-px bg-border/50" />

              <div>
                <p className={`${montserrat.className} text-2xl md:text-3xl font-bold text-foreground`}>
                  5<span className="text-primary">+</span>
                </p>
                <p className="text-sm text-muted-foreground">Anos</p>
              </div>

              <div className="w-px bg-border/50" />

              <div>
                <p className={`${montserrat.className} text-2xl md:text-3xl font-bold text-foreground`}>
                  98<span className="text-primary">%</span>
                </p>
                <p className="text-sm text-muted-foreground">Aprovação</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full">

              {/* WHATSAPP */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-6 py-6 text-sm font-semibold rounded-full gap-2 
                bg-red-600 hover:bg-red-500 text-white
                shadow-[0_0_20px_rgba(220,38,38,0.35)]
                transition-all duration-300"
              >
                <a
                  href="https://wa.me/5551995198524?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp size={22} />
                  Falar com Especialista
                </a>
              </Button>

              {/* CURSOS + INSTAGRAM DESKTOP */}
              <div className="flex w-full sm:w-auto gap-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full px-6 py-6 text-sm font-medium rounded-full
                  bg-white text-black hover:bg-gray-100 border border-gray-200"
                >
                  <a href="#cursos">Ver Cursos</a>
                </Button>

                <a
                  href="https://www.instagram.com/salvartreinamentosrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center justify-center 
                  w-[52px] h-[52px] min-w-[52px] min-h-[52px] aspect-square
                  rounded-full 
                  bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 
                  text-white text-xl cursor-pointer z-10"
                >
                  <FaInstagram />
                </a>
              </div>

              {/* INSTAGRAM MOBILE */}
              <a
                href="https://www.instagram.com/salvartreinamentosrs"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden w-full"
              >
                <Button
                  size="lg"
                  className="w-full px-6 py-6 text-sm font-semibold rounded-full 
                  flex items-center justify-center gap-2 text-white
                  bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                >
                  <FaInstagram className="text-lg" />
                  Acessar Instagram
                </Button>
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-full max-w-md">

              <div className="rounded-2xl overflow-hidden bg-card shadow-xl border border-border/30 p-6 flex flex-col items-center">

                <div className="relative w-full aspect-square flex items-center justify-center">
                  <Image
                    src="/logo (2).png"
                    alt="Logo Salvar"
                    width={300}
                    height={300}
                    className="object-contain"
                    priority
                  />
                </div>

                <p className="text-center text-sm text-muted-foreground -mt-1">
                  <strong className="text-foreground">
                    Salvar - Cursos de Treinamento de Emergência
                  </strong>
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}