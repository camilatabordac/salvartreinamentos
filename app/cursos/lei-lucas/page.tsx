"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Activity, Users, Brain, ShieldCheck } from "lucide-react"

export default function LeiLucasPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 bg-black text-white">

        {/* HERO */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="max-w-5xl mx-auto text-center">

            <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
              LEI LUCAS
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Capacitação em <span className="text-primary">Primeiros Socorros</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Treinamento obrigatório que prepara profissionais para agir com rapidez
              e segurança em emergências, garantindo conformidade com a legislação.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                className="rounded-full px-10 py-6 text-sm font-semibold bg-green-600 hover:bg-green-500 text-white shadow-lg"
              >
                <a
                  href="https://wa.me/+5551995198524?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
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

            {/* O QUE É */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Brain className="text-primary" /> O que é a Lei Lucas
              </h3>

              <p className="text-white/70 leading-relaxed">
                A Lei nº 13.722/2018 determina a capacitação em primeiros socorros
                para profissionais de instituições de ensino e recreação.
              </p>

              <p className="text-white/70 mt-3">
                O objetivo é garantir atendimento imediato até a chegada do socorro especializado.
              </p>
            </div>

            {/* PARA QUEM */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="text-primary" /> Para quem é
              </h3>

              <ul className="text-white/70 space-y-2">
                <li>• Escolas e creches</li>
                <li>• Professores e educadores</li>
                <li>• Empresas e equipes</li>
                <li>• Profissionais que lidam com público</li>
                <li>• Público em geral</li>
              </ul>

              <p className="text-primary mt-4 text-sm">
                Além de obrigatório, é um preparo que pode salvar vidas.
              </p>
            </div>

            {/* O QUE APRENDE */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="text-primary" /> O que você vai aprender
              </h3>

              <ul className="text-white/70 space-y-2">
                <li>• Atendimento inicial em emergências</li>
                <li>• Engasgo e desobstrução</li>
                <li>• RCP básica</li>
                <li>• Quedas e traumas</li>
                <li>• Convulsões e desmaios</li>
                <li>• Acionamento do socorro</li>
              </ul>
            </div>

            {/* DIFERENCIAIS */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-primary" /> Diferenciais
              </h3>

              <ul className="text-white/70 space-y-2">
                <li>• Treinamento prático e acessível</li>
                <li>• Linguagem simples e direta</li>
                <li>• Simulações realistas</li>
                <li>• Instrutores qualificados</li>
                <li>• Conteúdo adaptado por ambiente</li>
              </ul>

              <p className="mt-4 text-primary text-sm">
                Saber agir faz toda a diferença.
              </p>
            </div>

          </div>
        </section>

        {/* BLOCO DE IMPACTO */}
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl font-semibold">
              Emergências podem acontecer em qualquer lugar
            </h2>

            <p className="text-white/70 mt-4">
              Estar preparado garante mais segurança, reduz riscos e permite
              agir rapidamente até a chegada do atendimento especializado.
            </p>

            <div className="mt-10">
              <Button
                asChild
                className="rounded-full px-10 py-6 text-sm font-semibold bg-green-600 hover:bg-green-500 text-white"
              >
                <a
                  href="https://wa.me/+5551995198524?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
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