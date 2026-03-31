"use client"
import React from 'react'
import {  ExternalLink } from 'lucide-react' // Install lucide-react for icons

const projects = [
  {
    title: "Finly",
    description: "A full-stack personal finance tracker. Features automated expense categorization and real-time budget visualization using PostgreSQL.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind"],
    github: "https://github.com/THELITEESHREDDY/finly",
    live: "#",
  },
  {
    title: "DealRadar",
    description: "An Automated Competitive Intelligence Engine. Scrapes and matches prices across platforms to provide real-time market insights.",
    tech: ["Python", "BeautifulSoup", "React", "TypeScript"],
    github: "https://github.com/THEITEESHREDDY/dealradar",
    live: "#",
  }
]

function Projects() {
  return (
    <section id='projects' className="relative z-0 w-full py-20 px-6 md:px-20 scroll-mt-[10vh]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-l-8 border-orange-600 pl-6">
          <h2 className="text-6xl font-bold uppercase tracking-tighter">Selected</h2>
          <h2 className="text-orange-600 text-7xl font-black italic uppercase tracking-tighter">Works_</h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group border-2 border-black p-8 hover:bg-orange-50 transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden"
            >
              {/* Background Numbering */}
              <span className="absolute -right-4 -bottom-10 text-[12rem] font-black text-zinc-100 group-hover:text-orange-100 transition-colors -z-10">
                0{index + 1}
              </span>

              {/* Left Side: Info */}
              <div className="flex-1 z-10">
                <h3 className="text-4xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xl text-zinc-600 mb-6 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-black text-white px-3 py-1 text-sm font-mono lowercase">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Links */}
              <div className="flex flex-row md:flex-col justify-center gap-4 z-10">
                <a 
                  href={project.github} 
                  target="_blank" 
                  className="flex items-center gap-2 bg-white border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-all"
                >
                   GitHub
                </a>
                <a 
                  href={project.live} 
                  className="flex items-center gap-2 bg-orange-600 text-white border-2 border-orange-600 px-6 py-3 font-bold hover:bg-white hover:text-orange-600 transition-all"
                >
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects