'use client'
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section
      id="contato"
      className="py-12 lg:py-16 px-6 lg:px-12 bg-black relative overflow-hidden"
    >
      {/* Fundo quadriculado */}
    {/* Fundo quadriculado mais forte */}
{/* Glow vermelho suave */}
<div className="absolute inset-0">
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 blur-3xl rounded-full" />
</div>

{/* QUADRICULADO MAIS ABERTO E FORTE */}
<div
  className="absolute inset-0 opacity-70 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255, 70, 70, 0.16) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 70, 70, 0.16) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}
/>
      {/* Glow elegante */}
      <div className="absolute top-0 left-1/2 w-[420px] h-[420px] bg-red-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-red-800/10 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <span className="inline-block text-[10px] font-semibold text-white/60 tracking-[0.25em] uppercase mb-4">
          Último Passo
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
          Está pronto para atuar na linha de frente?
        </h2>

        <p className="text-sm text-white/80 mb-6 max-w-md mx-auto">
          Fale com um especialista e inicie sua formação.
        </p>

        <Button
          size="lg"
          asChild
          className="
            bg-gradient-to-r from-red-700 to-red-900
            text-white font-semibold px-10 py-6 text-sm
            rounded-full transition-all duration-300
            hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]
            animate-pulseScale
            w-full max-w-sm mx-auto
          "
        >
      <a
  href="https://wa.me/+55555195198524?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 text-lg font-semibold" >
  <i className="fa-brands fa-whatsapp text-lg" /> Falar com Especialista
</a>
        </Button>
      </div>

      <style jsx>{`
        @keyframes pulseScale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulseScale {
          animation: pulseScale 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}