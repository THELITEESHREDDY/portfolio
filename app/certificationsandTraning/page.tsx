"use client"
import React from 'react'

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL / IIT",
    date: "2025",
    type: "Academic"
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    date: "2026",
    type: "GenAI"
  },
  {
    title: "Large Language Model Prompting",
    issuer: "DeepLearning.AI",
    date: "2026",
    type: "GenAI"
  }
]

function Training() {
  return (
    <section id='training' className="relative z-0 w-full py-20 px-6 md:px-20 scroll-mt-[10vh] ">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-6xl font-bold uppercase tracking-tighter">Growth</h2>
          <h2 className="text-orange-600 text-7xl font-black italic uppercase tracking-tighter">& Training_</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Intensive Training (The Timeline) */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="bg-black text-white px-3 py-1 text-sm font-mono">01</span>
              Intensive Training
            </h3>
            
            <div className="border-l-4 border-black pl-8 py-2 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
              
              <div className="mb-2 flex justify-between items-start">
                <div>
                  <h4 className="text-4xl font-black text-orange-600">Programming Pathshala</h4>
                  <p className="text-xl font-bold italic">Summer Training Program</p>
                </div>
                <span className="bg-zinc-100 px-4 py-1 font-mono font-bold">SUMMER 2025</span>
              </div>

              <p className="text-lg text-zinc-600 mt-4 leading-relaxed max-w-xl">
                Rigorous immersion into **Data Structures and Algorithms (DSA)** and **Competitive Programming (CP)**. 
                Focused on optimizing time complexity, mastering advanced graph algorithms, and dynamic programming patterns.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["C++", "DSA", "CP", "Optimization"].map((tag) => (
                  <span key={tag} className="border border-black px-3 py-1 text-xs font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Certifications Grid */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="bg-black text-white px-3 py-1 text-sm font-mono">02</span>
              Certifications
            </h3>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="group border-2 border-zinc-200 p-4 hover:border-orange-600 hover:bg-orange-50 transition-all flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{cert.type}</p>
                    <h5 className="text-xl font-bold group-hover:text-orange-600 transition-colors">{cert.title}</h5>
                    <p className="text-sm text-zinc-500 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-zinc-300 group-hover:text-orange-200">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Training