"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Activity, Users, Brain } from "lucide-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/pediatria1.jpeg",
  "/pediatria2.jpeg",
  "/pediatria3.jpeg",
]

function PediatriaCarousel() {
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
                alt={`Pediatria imagem ${i + 1}`}
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
            Treinamento em emergências pediátricas reais
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed">
            Você aprende a atuar em situações críticas envolvendo crianças e neonatos,
            com foco em segurança, precisão e protocolos específicos.
          </p>

          <p className="text-primary mt-4">
            Atendimento infantil exige preparo e prática real.
          </p>
        </div>

      </div>
    </section>
  )
}

export default function PediatriaPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 bg-black text-white">

        {/* HERO */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="max-w-5xl mx-auto text-center">

            <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
              PEDIATRIA
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Emergências em <span className="text-primary">Crianças e Neonatos</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Capacitação completa para atuação em emergências pediátricas.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                className="rounded-full px-10 py-6 text-sm font-semibold bg-green-600 hover:bg-green-500 text-white shadow-lg"
              >
                <a
                  href="https://wa.me/+5551995198524"
                  target="_blank"
                >
                  QUERO ME INSCREVER
                </a>
              </Button>
            </div>

          </div>
        </section>

        {/* GRID */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Brain className="text-primary" /> Sobre o treinamento
              </h3>
              <p className="text-white/70">
                Atendimento de pacientes pediátricos em situações críticas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="text-primary" /> Para quem é
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• Médicos</li>
                <li>• Enfermeiros</li>
                <li>• Técnicos</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="text-primary" /> O que você vai aprender
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• Avaliação pediátrica</li>
                <li>• PCR infantil</li>
                <li>• Vias aéreas</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-lg font-semibold mb-4">
                Diferenciais
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• Simulação realista</li>
                <li>• Equipamentos pediátricos</li>
                <li>• Prática intensiva</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CARROSSEL */}
        <PediatriaCarousel />

        {/* CTA FINAL */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-r from-primary/10 to-transparent text-center">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold">
              Preparação salva vidas infantis
            </h2>

            <p className="text-white/70 mt-4">
              Treine para agir com segurança em momentos críticos.
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