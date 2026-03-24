"use client"
import React from 'react'

function About() {
  return (
    <section id='about' className="relative z-0 w-full py-24 px-6 md:px-20  overflow-hidden scroll-mt-[10vh]">
      <div className="max-w-7xl mx-auto">
        
        {/* Large Statement Header */}
        <div className="mb-20 space-y-2">
          <p className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-400">
            From problem statement to production:
          </p>
          <h2 className="text-7xl md:text-[10rem] font-black text-orange-600 leading-none tracking-tighter">
            ENGINEERING
          </h2>
          <div className="flex justify-end">
            <p className="text-4xl md:text-6xl font-bold text-right max-w-2xl leading-tight">
              <span className="bg-orange-600 text-white px-4 py-1 rounded-xl inline-block mb-2">
                software products
              </span> 
              <br /> at scale!
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
          
          {/* Column 1: Identity */}
          <div className="lg:col-span-7 space-y-10">
            <div className="relative">
              <span className="absolute -left-4 top-0 w-1 h-full bg-orange-600"></span>
              <p className="text-3xl md:text-4xl leading-snug pl-6">
                I'm a curious Computer Science undergrad at{" "}
                <a 
                  href="https://www.lpu.in" 
                  target="_blank" 
                  className="italic font-black decoration-orange-600 underline underline-offset-8 hover:text-orange-600 transition-colors"
                >
                  Lovely Professional University
                </a>. 
                I don't just write code; I architect solutions by learning, exploring, and occasionally failing forward.
              </p>
            </div>

            <div className="flex gap-4 items-start">
               <div className="bg-black text-white font-mono text-xs px-2 py-1 rotate-90 origin-left translate-y-8">
                 MISSION
               </div>
               <p className="text-2xl text-zinc-600 leading-relaxed">
                Beyond the profession, I’m driven by a human-centric approach: 
                building software that doesn't just function, but actually 
                <span className="text-black font-bold"> solves real human problems.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Tech Focus (The "Spec Sheet") */}
          <div className="lg:col-span-5 bg-zinc-50 border-2 border-black p-8 self-start">
            <h3 className="text-sm font-mono font-black uppercase mb-6 tracking-[0.3em] text-zinc-400">
              Technical_Focus
            </h3>
            <ul className="space-y-6">
              <li className="group">
                <span className="text-orange-600 font-mono mr-2">01</span>
                <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-black transition-all">
                  Full-Stack Architecture
                </span>
                <p className="text-sm text-zinc-500 mt-1">MERN Stack & Scalable Web Apps</p>
              </li>
              <li className="group">
                <span className="text-orange-600 font-mono mr-2">02</span>
                <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-black transition-all">
                  Python Backends
                </span>
                <p className="text-sm text-zinc-500 mt-1">FastAPI & Robust Logic Layers</p>
              </li>
              <li className="group">
                <span className="text-orange-600 font-mono mr-2">03</span>
                <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-black transition-all">
                  AI Integration
                </span>
                <p className="text-sm text-zinc-500 mt-1">LLMs & Intelligent API Orchestration</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About