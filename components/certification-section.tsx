import Image from "next/image"
import { Globe, FileCheck, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Reconhecimento Internacional",
    description: "Válido em mais de 70 países",
  },
  {
    icon: FileCheck,
    title: "Validade Profissional",
    description: "Aceito em hospitais e instituições",
  },
  {
    icon: ShieldCheck,
    title: "Centro HSI Oficial",
    description: "Health & Safety Institute",
  },
]

export function CertificationSection() {
  return (
    <section
      id="certificacao"
      className="py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 relative overflow-hidden bg-white"
    >
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">

          {/* ESQUERDA (TEXTO) */}
          <div className="text-left space-y-3 md:space-y-4 lg:translate-x-28">

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-600">
              Certificação
            </span>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-black">
              Certificação{" "}
              <span className="text-red-600">HSI</span>{" "}
              Internacional
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              Certificado reconhecido internacionalmente pelo Health & Safety Institute,
              válido para comprovação profissional em instituições de saúde de todo o mundo.
            </p>

            <div className="space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-4 w-4 text-red-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DIREITA (IMAGEM) */}
          <div className="flex justify-center lg:justify-start lg:translate-x-38">
            <div className="relative w-56 h-56 lg:w-64 lg:h-64">
              <Image
                src="/hsi.png"
                alt="HSI Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}