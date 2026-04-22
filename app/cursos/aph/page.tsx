"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Activity, Users, Shield } from "lucide-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/aphpratica.jpeg",
  "/aphpratica2.jpeg",
  "/aphpratica3.jpeg",
]

function APHCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((old) => (old === 0 ? images.length - 1 : old - 1))
  }

  const next = () => {
    setIndex((old) => (old === images.length - 1 ? 0 : old + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((old) => (old === images.length - 1 ? 0 : old + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* CARROSSEL */}
        <div className="relative">

          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">

            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`APH imagem ${i + 1}`}
                className={`w-full h-[360px] object-cover transition-opacity duration-700 absolute top-0 left-0 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="h-[360px]" />

          </div>

          {/* CONTROLES */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-semibold">
            Treinamento com simulação realista
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed">
            Você aprende em cenários que reproduzem situações reais,
            desenvolvendo rapidez, segurança e tomada de decisão sob pressão.
          </p>

          <p className="text-primary mt-4">
            Aqui você treina como se fosse vida real.
          </p>
        </div>

      </div>
    </section>
  )
}

export default function APHPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 bg-black text-white">

        {/* HERO */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="max-w-5xl mx-auto text-center">

            <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
              APH
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Atendimento{" "}
              <span className="text-primary">Pré-Hospitalar</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Capacitação prática para atuação em emergências fora do ambiente hospitalar,
              com foco em rapidez, segurança e controle em cenários reais.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                className="rounded-full px-10 py-6 bg-green-600 hover:bg-green-500 text-white"
              >
                <a
                  href="https://wa.me/+5551995198524?text=Ol%C3%A1!%20Vim%20pelo%20site..."
                  target="_blank"
                >
                  QUERO ME INSCREVER
                </a>
              </Button>
            </div>

          </div>
        </section>

        {/* GRID LIMPO */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Activity className="text-primary" /> O que é APH
              </h3>

              <p className="text-white/70 leading-relaxed">
                O Atendimento Pré-Hospitalar consiste nos primeiros cuidados prestados
                à vítima antes da chegada ao hospital.
              </p>

              <p className="text-white/70 mt-3">
                É essencial para preservar a vida e evitar agravamentos.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="text-primary" /> Para quem é
              </h3>

              <ul className="text-white/70 space-y-2">
                <li>• Profissionais da saúde</li>
                <li>• Socorristas</li>
                <li>• Bombeiros civis</li>
                <li>• Estudantes da área</li>
                <li>• Pessoas que desejam estar preparadas</li>
              </ul>

              <p className="text-primary mt-4 text-sm">
                Indispensável para agir nos primeiros minutos.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="text-primary" /> O que você vai aprender
              </h3>

              <ul className="text-white/70 space-y-2">
                <li>• Avaliação inicial (ABCDE)</li>
                <li>• Atendimento a vítimas</li>
                <li>• Controle de hemorragias</li>
                <li>• Imobilização e transporte</li>
                <li>• Suporte básico de vida</li>
                <li>• Atendimento em PCR</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4">
                Diferenciais do curso
              </h3>

              <ul className="text-white/70 space-y-2">
                <li>• Simulações realistas</li>
                <li>• Cenários do dia a dia</li>
                <li>• Equipamentos reais</li>
                <li>• Instrutores experientes</li>
                <li>• Foco em decisão sob pressão</li>
              </ul>

              <p className="mt-4 text-primary text-sm">
                Treine como se fosse real.
              </p>
            </div>

          </div>
        </section>

        {/* CARROSSEL */}
        <APHCarousel />

        {/* CTA FINAL */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-r from-primary/10 to-transparent text-center">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold">
              Os primeiros minutos definem o desfecho
            </h2>

            <p className="text-white/70 mt-4">
              Com o treinamento em APH, você desenvolve segurança para agir
              e se torna preparado para situações reais.
            </p>

            <div className="mt-10">
              <Button
                asChild
                className="rounded-full px-10 py-6 bg-green-600 hover:bg-green-500 text-white"
              >
                <a
                  href="https://wa.me/+5551995198524?text=Ol%C3%A1!%20Vim%20pelo%20site..."
                  target="_blank"
                >
                  QUERO ME INSCREVER
                </a>
              </Button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}