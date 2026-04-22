"use client"

import Image from "next/image"
import { useState } from "react"

const images = [
  "/aulapratica.jpeg",
  "/aulapratica1.jpeg",
  "/aulapratica3.jpeg",
  "/aulapratica4.jpeg",
  "/aulapratica5.jpeg",
]

export function AboutSection() {
  const [current, setCurrent] = useState(0)

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  function nextSlide() {
    if (current === images.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  function prevSlide() {
    if (current === 0) {
      setCurrent(images.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX)
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 50) {
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      prevSlide()
    }
  }

  return (
    <section id="sobre" className="py-12 lg:py-14 px-6 lg:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-red-600">
              Sobre a SALVAR
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-black">
              Conheça o nosso curso
            </h2>

        <p className="text-black text-base md:text-[15px] leading-relaxed mb-4">
  A SALVAR é referência na formação de profissionais da saúde, com mais de{" "}
  <strong>5 anos de atuação</strong> e mais de{" "}
  <strong>3.500 alunos capacitados</strong> em todo o Brasil.
</p>

<p className="text-black text-base md:text-[15px] leading-relaxed mb-4">
  Já atuamos nos estados do <strong>Rio Grande do Sul</strong>,{" "}
  <strong>Espírito Santo</strong> e <strong>São Paulo</strong>, oferecendo
  treinamentos práticos, realistas e alinhados às diretrizes mais atuais.
</p>

<p className="text-black text-base md:text-[15px] leading-relaxed">
  Todos os cursos são realizados por profissionais com{" "}
  <strong>qualificação e experiência</strong>, utilizando manequins da{" "}
  <strong>Laerdal</strong>, referência mundial em simulação, com certificação
  internacional <strong>HSI</strong>, reconhecida globalmente.
</p>
          </div>

          {/* RIGHT - CAROUSEL */}
          <div className="relative w-full max-w-md mx-auto">
            
            <div
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={images[current]}
                alt="Treinamento"
                fill
                className="object-cover"
              />

              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 
                w-10 h-10 rounded-full bg-black/60 text-white 
                flex items-center justify-center 
                hover:bg-black transition"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 
                w-10 h-10 rounded-full bg-black/60 text-white 
                flex items-center justify-center 
                hover:bg-black transition"
              >
                →
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    current === index ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}