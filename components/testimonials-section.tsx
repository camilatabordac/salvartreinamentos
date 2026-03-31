"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const images = ["/depoimento1.jpeg", "/depoimento2.jpeg"]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")

  function openImage(img: string) {
    setModalImage(img)
    setModalOpen(true)
  }

  function next() {
    setIndex((prev) => (prev + 1) % images.length)
  }

  function prev() {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="relative py-16 px-6 bg-black overflow-hidden">

      {/* 🔴 fundo premium com degradê vermelho sutil */}
     {/* 🔴 fundo premium com degradê vermelho controlado */}
<div className="absolute inset-0 pointer-events-none">

  {/* degradê principal (vermelho suave no topo) */}
  <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-black to-black" />

  {/* luz vermelha central difusa */}
  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/15 blur-[140px]" />

  {/* glow lateral direito */}
  <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-red-600/10 blur-[160px]" />

  {/* vinheta leve pra dar contraste */}
  <div className="absolute inset-0 bg-black/40" />
</div>
      <div className="relative max-w-5xl mx-auto text-center mb-10">

        <span className="text-xs text-red-400 tracking-[0.25em] uppercase font-semibold">
          Depoimentos reais
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
          O que nossos alunos dizem
        </h2>

        <p className="text-sm text-white/60 mt-2">
          Feedbacks reais de profissionais que passaram pelo curso
        </p>

        {/* ⭐ estrelas centralizadas (mais clean) */}
        <div className="flex justify-center mt-4 text-yellow-400 text-sm tracking-widest">
          ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* GRID DESKTOP */}
      <div className="hidden md:grid grid-cols-2 gap-6 max-w-5xl mx-auto">

        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openImage(img)}
            className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 transition"
          >
            <img
              src={img}
              className="rounded-xl w-full max-h-[220px] object-contain"
            />
          </div>
        ))}

      </div>

      {/* MOBILE CARROSSEL */}
      <div className="md:hidden relative max-w-md mx-auto">

        <div
          onClick={() => openImage(images[index])}
          className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md"
        >
          <img
            src={images[index]}
            className="rounded-xl w-full max-h-[240px] object-contain"
          />
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
        >
          <ChevronRight size={18} />
        </button>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-red-500" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <button className="absolute top-4 right-4 text-white">
            <X size={24} />
          </button>

          <img
            src={modalImage}
            className="max-w-full max-h-full rounded-xl"
          />
        </div>
      )}

    </section>
  )
}