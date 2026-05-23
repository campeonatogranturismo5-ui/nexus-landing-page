'use client';

import { useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950 overflow-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center font-bold text-xl">N</div>
            <span className="font-semibold text-2xl tracking-tighter">NEXUS</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Características</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contacto</a>
          </div>
          <button className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all active:scale-95">
            Comenzar Ahora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-24 flex items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(99,102,241,0.15),transparent_70%)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full mb-6 border border-white/10">
            <span className="text-xs tracking-[3px] uppercase font-mono text-indigo-400">Creado con Grok</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            El futuro<br />está aquí
          </h1>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Una landing page moderna, rápida y hermosa.<br />Automatizada completamente con IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-lg font-semibold transition-all active:scale-[0.985]">
              Explorar Nexus
            </button>
            <button className="px-10 py-4 border border-white/30 hover:bg-white/5 rounded-2xl text-lg font-semibold transition-all">
              Ver en GitHub
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-zinc-500">
          <div>Desplázate para explorar</div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Potencia sin límites</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Velocidad extrema", desc: "Cargado con Next.js 15 y optimizado para el edge." },
              { title: "Diseño premium", desc: "Glassmorphism, animaciones fluidas y tipografía perfecta." },
              { title: "Totalmente responsive", desc: "Funciona impecable en móvil, tablet y escritorio." }
            ].map((feature, i) => (
              <div key={i} className="group bg-zinc-900/50 border border-white/10 p-10 rounded-3xl hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-6">{['⚡','✨','📱'][i]}</div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-zinc-500 text-sm">
        Creado con ❤️ usando Grok + Vercel + GitHub
      </footer>
    </main>
  );
}
