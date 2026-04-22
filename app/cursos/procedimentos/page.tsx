"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Activity, Users, Shield, Syringe } from "lucide-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/proced1.jpeg",
  "/proced2.jpeg",
  "/proced3.jpeg",
]

function ProcedimentosCarousel() {
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
                alt={`Procedimentos imagem ${i + 1}`}
                className={`w-full h-[360px] md:h-[460px] object-cover transition-opacity duration-700 absolute top-0 left-0 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="h-[360px] md:h-[460px]" />
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
            Treinamento prático em técnicas avançadas
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed">
            Você desenvolve habilidades técnicas com prática supervisionada,
            ganhando precisão e segurança em procedimentos essenciais da enfermagem.
          </p>

          <p className="text-primary mt-4">
            Aqui você treina até executar com confiança real.
          </p>
        </div>

      </div>
    </section>
  )
}

export default function ProcedimentosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 bg-black text-white">

        {/* HERO */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="max-w-5xl mx-auto text-center">

            <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
              PROCEDIMENTOS
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Técnicas <span className="text-primary">Avançadas</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Treinamento prático voltado ao desenvolvimento das principais habilidades técnicas.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                className="rounded-full px-10 py-6 text-sm font-semibold bg-green-600 hover:bg-green-500 text-white shadow-lg"
              >
                <a
                  href="https://wa.me/+5551995198524?text=Ol%C3%A1!%20Vim%20pelo%20site"
                  target="_blank"
                >
                  QUERO ME INSCREVER
                </a>
              </Button>
            </div>

          </div>
        </section>

        {/* GRID PRINCIPAL */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Activity className="text-primary" />
                Sobre o treinamento
              </h3>
              <p className="text-white/70 leading-relaxed">
                Curso intensivo de práticas essenciais e avançadas da enfermagem.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="text-primary" />
                Para quem é
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• Enfermeiros</li>
                <li>• Técnicos</li>
                <li>• Estudantes</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Syringe className="text-primary" />
                O que você vai aprender
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• Punção venosa</li>
                <li>• Medicação</li>
                <li>• Curativos</li>
                <li>• Sondagens</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="text-primary" />
                Diferenciais
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• 100% prático</li>
                <li>• Simulação real</li>
                <li>• Equipamentos clínicos</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CARROSSEL */}
        <ProcedimentosCarousel />

        {/* CTA */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-r from-primary/10 to-transparent text-center">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold">
              A prática forma profissionais preparados
            </h2>

            <p className="text-white/70 mt-4">
              Treine até executar com segurança e confiança.
            </p>

            <div className="mt-10">
              <Button
                asChild
                className="rounded-full px-10 py-6 bg-green-600 hover:bg-green-500 text-white"
              >
                <a href="https://wa.me/+5551995198524" target="_blank">
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