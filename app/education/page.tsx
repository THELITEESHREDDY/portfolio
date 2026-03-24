"use client"
import React from 'react'

function Education() {
  return (
    <section id="education"className="relative z-0 w-full py-20 px-6 md:px-20 scroll-mt-[10vh]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 border-l-8 border-black pl-6 ">
          <h2 className="text-6xl font-bold uppercase tracking-tighter">Academic</h2>
          <h2 className="text-orange-600 text-7xl font-black italic uppercase tracking-tighter">Background_</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Current University (Detailed) */}
          <div className="lg:col-span-7 bg-zinc-50 border-2 border-black p-8 relative">
            <div className="absolute -top-4 -left-4 bg-orange-600 text-white px-4 py-1 font-mono font-bold">
              CURRENT
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-4xl font-black leading-tight">Lovely Professional University</h3>
                <p className="text-orange-600 font-bold text-xl">B.Tech in Computer Science & Engineering</p>
              </div>
              <div className="text-right">
                <p className="font-mono font-bold">2023 — PRESENT</p>
                <p className="text-sm text-zinc-500">Phagwara, Punjab</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-4 bg-zinc-200 rounded-full overflow-hidden border border-black">
                <div className="w-[60%] h-full bg-orange-600"></div>
              </div>
              <div className="text-2xl font-black italic">
                CGPA: <span className="text-orange-600">8.05</span>
              </div>
            </div>

            <p className="text-zinc-600 leading-relaxed italic">
              "Focusing on core engineering principles, system architecture, and advanced software development methodologies."
            </p>
          </div>

          {/* Right: Schooling History (Compact) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Intermediate */}
            <div className="border-2 border-zinc-200 p-6 hover:border-black transition-colors group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono bg-zinc-100 px-2 py-1">2022 — 2023</span>
                <span className="text-orange-600 font-black text-xl">91.9%</span>
              </div>
              <h4 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">VIBM Junior College</h4>
              <p className="text-zinc-500 text-sm">Intermediate (PCM) | Vijayawada, AP</p>
            </div>

            {/* High School */}
            <div className="border-2 border-zinc-200 p-6 hover:border-black transition-colors group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono bg-zinc-100 px-2 py-1">2020 — 2021</span>
                <span className="text-orange-600 font-black text-xl">93.0%</span>
              </div>
              <h4 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">J.D.A.V Public School</h4>
              <p className="text-zinc-500 text-sm">CBSE (Class X) | Jaggaiahpet, AP</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Education