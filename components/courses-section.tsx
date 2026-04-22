"use client"
import Link from "next/link"

import { Heart, Ambulance, HeartPulse, AlertCircle, Syringe, Baby, BookOpen, ArrowRight } from "lucide-react"

const courses = [
  {
    icon: Heart,
    title: "ACLS",
    name: "Suporte Avançado de Vida em Cardiologia",
    link: "/cursos/acls",
    description:
      "Treinamento completo para atuação em emergências cardiovasculares, com foco em protocolos atualizados, tomada de decisão rápida e simulações realistas.",
  },
  {
    icon: Ambulance,
    title: "APH",
    name: "Atendimento Pré-Hospitalar",
    link: "/cursos/aph",
    description:
      "Capacitação prática para atendimento em situações de urgência fora do ambiente hospitalar, com abordagem segura e baseada em protocolos.",
  },
  {
    icon: HeartPulse,
    title: "BLS",
    name: "Suporte Básico de Vida",
    link: "/cursos/bls",
    description:
      "Formação essencial em reanimação cardiopulmonar e uso do DEA, com técnicas atualizadas para resposta imediata em situações críticas.",
  },
  {
    icon: AlertCircle,
    title: "Sala Vermelha",
    name: "Emergência Hospitalar",
    link: "/cursos/sala-vermelha",
    description:
      "Treinamento intensivo no manejo do paciente crítico em ambiente hospitalar, com foco em organização e eficiência assistencial.",
  },
  {
    icon: Syringe,
    title: "Procedimentos",
    name: "Técnicas Avançadas",
    link: "/cursos/procedimentos",
    description:
      "Aprenda na prática os principais procedimentos avançados da enfermagem com segurança e aplicação em cenários reais.",
  },
  {
    icon: Baby,
    title: "Pediatria",
    name: "Emergências Pediátricas",
    link: "/cursos/pediatria",
    description:
      "Capacitação voltada ao atendimento de urgências em crianças e neonatos, com protocolos específicos e atualizados.",
  },
  {
    icon: BookOpen,
    title: "Lei Lucas",
    name: "Primeiros Socorros",
    link: "/cursos/lei-lucas",
    description:
      "Treinamento obrigatório para empresas e instituições, com foco em prevenção e resposta rápida a emergências.",
  },
]

export function CoursesSection() {
  return (
    <section id="cursos" className="py-14 px-6 lg:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* TOPO */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">

          <div>
            <span className="text-[11px] font-semibold text-primary tracking-[0.2em] uppercase">
              Nossos Cursos
            </span>

            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-[2.2rem] font-bold mt-2 tracking-tight">
              Capacite-se para <span className="text-primary">Salvar Vidas</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-foreground/80 max-w-md lg:text-right leading-relaxed">
            Metodologia prática com certificação internacional e foco total em situações reais de emergência.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
          <Link
            key={index}
            href={course.link}
            className="group relative bg-white p-5 rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
              <div className="relative z-10">
                <div className="mb-3">
                  <course.icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-sm md:text-base font-semibold text-black mb-2 tracking-wide">
                  {course.title} — {course.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex items-center text-xs font-semibold gap-1 text-primary group-hover:gap-2 transition-all">
                  Saiba mais
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}