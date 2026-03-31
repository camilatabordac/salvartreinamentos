import { Shield, Target, Cpu, GraduationCap, CheckCircle } from "lucide-react"

const differentials = [
  {
    icon: Cpu,
    title: "Simulação Realística",
    description: "Equipamentos de alta fidelidade para treinamento imersivo",
  },
  {
    icon: Target,
    title: "Cenários Reais",
    description: "Ambientes controlados de UTI e pronto-socorro",
  },
  {
    icon: Shield,
    title: "Atualização Contínua",
    description: "Conteúdos sempre atualizados conforme as melhores práticas clínicas",
  },
  {
    icon: GraduationCap,
    title: "Instrutores Capacitados",
    description: "Professores com experiência hospitalar e pré-hospitalar",
  },
]

export function DifferentialsSection() {
  return (
    <section className="relative py-16 lg:py-20 px-6 lg:px-12 bg-gradient-to-b from-card/30 to-background overflow-hidden">

      {/* Glow vermelho suave */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 blur-3xl rounded-full" />
      </div>

      {/* QUADRICULADO MAIS FORTE */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            `
            linear-gradient(rgba(255, 70, 70, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 70, 70, 0.14) 1px, transparent 1px)
            `,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left - Text */}
          <div>
            <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
              Diferenciais
            </span>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mt-3 mb-4 tracking-tight">
              Formação profissional na área da saúde com excelência
            </h2>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Cursos direcionados para <strong>médicos, enfermeiros, estudantes de medicina e enfermagem,
              técnicos de enfermagem e socorristas</strong>, em todos os níveis de experiência.
              Treinamentos com foco em prática real, simulação e tomada de decisão clínica.
            </p>

            <div className="space-y-3">
              {[
                "Certificação reconhecida internacionalmente",
                "Suporte durante o curso ao alunos",
                "Flexibilidade de horários",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-900 shrink-0" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Cards Grid */}
          <div className="grid grid-cols-2 gap-3">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border/50 hover:border-red-400/40 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/15 flex items-center justify-center mb-3 group-hover:bg-red-500/25 transition-all duration-300">
                  <item.icon className="h-5 w-5 text-red-400 group-hover:text-red-300 transition-colors" />
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}