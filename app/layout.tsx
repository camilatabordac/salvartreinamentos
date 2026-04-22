import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { WhatsappFloatButton } from "@/components/whatsapp-float-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "SALVAR - Cursos e Treinamentos de Emergência",
  description:
    "Treinamento de emergência com simulação realista. Cursos ACLS, APH, BLS e Emergência Hospitalar com certificação internacional HSI. Mais de 3.500 alunos formados.",
  generator: "v0.app",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${montserrat.variable} font-sans antialiased`}>

        {children}

        {/* BOTÃO WHATSAPP FIXO */}
        <WhatsappFloatButton />

        <Analytics />
      </body>
    </html>
  )
}