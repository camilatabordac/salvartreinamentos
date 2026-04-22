"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Activity, Users, HeartPulse, Shield } from "lucide-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/bls1.jpeg",
  "/bls2.jpeg",
  "/bls3.jpeg",
]

function BLSCarousel() {
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
                alt={`BLS imagem ${i + 1}`}
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
            Treinamento em suporte básico de vida
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed">
            Você aprende na prática como agir em emergências imediatas,
            realizando RCP e uso do DEA com segurança e rapidez.
          </p>

          <p className="text-primary mt-4">
            Aqui você aprende o básico que salva vidas.
          </p>
        </div>

      </div>
    </section>
  )
}

export default function BLSPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 bg-black text-white">

        {/* HERO */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="max-w-5xl mx-auto text-center">

            <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
              BLS
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Suporte Básico de{" "}
              <span className="text-primary">Vida</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Formação essencial para atendimento imediato em emergências,
              com foco em reanimação cardiopulmonar e uso do desfibrilador automático.
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
                <Activity className="text-primary" /> O que é BLS
              </h3>
              <p className="text-white/70 leading-relaxed">
                Suporte Básico de Vida para atendimento imediato em parada cardiorrespiratória.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="text-primary" /> Para quem é
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• Profissionais da saúde</li>
                <li>• Estudantes</li>
                <li>• Público em geral</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HeartPulse className="text-primary" /> O que você vai aprender
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• RCP adulto, criança e bebê</li>
                <li>• Uso do DEA</li>
                <li>• Desobstrução de vias aéreas</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="text-primary" /> Diferenciais
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• Simulação prática</li>
                <li>• Equipamentos modernos</li>
                <li>• Protocolos atualizados</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CARROSSEL */}
        <BLSCarousel />

        {/* CTA */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-r from-primary/10 to-transparent text-center">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold">
              Saber o básico já salva vidas
            </h2>

            <p className="text-white/70 mt-4">
              Aprenda a agir nos primeiros minutos de uma emergência.
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