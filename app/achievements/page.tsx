import React from 'react';
import { Trophy, Code2, Target, ArrowUpRight } from 'lucide-react';

const achievements = [
  {
    title: "Problem Solving",
    value: "400+",
    desc: "Questions solved across LeetCode, HackerRank, & CodeChef.",
    icon: <Code2 className="w-8 h-8" />,
    tag: "DSA_EXPERT",
    platforms: ["LeetCode", "HackerRank", "CodeChef"]
  },
  {
    title: "Binary-Blitz Hackathon",
    value: "2nd Runner Up",
    desc: "Recognized for rapid prototyping and architectural design excellence.",
    icon: <Trophy className="w-8 h-8" />,
    tag: "COMPETITION_WIN",
    event: "University Level"
  },
  {
    title: "JEE Main 2023",
    value: "93%ile",
    desc: "Ranked among top candidates out of 1.5 million aspirants nationwide.",
    icon: <Target className="w-8 h-8" />,
    tag: "ACADEMIC_RANK",
    stat: "Top 7%"
  }
];

function Achievements() {
  return (
    <section id='achievements' className="relative z-0 w-full py-20 px-6 md:px-20 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Matching Training Style */}
        <div className="mb-20">
          <h2 className="text-6xl font-bold uppercase tracking-tighter">Verified</h2>
          <h2 className="text-orange-600 text-7xl font-black italic uppercase tracking-tighter">Impact_ & Wins</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Major Highlight (The "Hero" Achievement) */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="bg-black text-white px-3 py-1 text-sm font-mono">03</span>
              Core Strengths
            </h3>
            
            <div className="space-y-12">
              <p className="text-2xl font-medium leading-tight text-zinc-800">
                A track record of <span className="bg-orange-600 text-white px-2 italic">competitive excellence</span> and technical persistence.
              </p>
              
              {/* Quick Stats Bar */}
              <div className="border-y-2 border-black py-8 flex justify-between">
                <div>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">National_Standing</p>
                  <p className="text-3xl font-black italic underline decoration-orange-600 underline-offset-8">TOP 7%</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">Total_Solutions</p>
                  <p className="text-3xl font-black italic underline decoration-orange-600 underline-offset-8">400+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Achievement Cards Grid */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-6">
              {achievements.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative border-2 border-black p-8  hover:bg-zinc-900 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="text-orange-600 group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                          // {item.tag}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-mono font-bold text-orange-600 uppercase tracking-wider mb-1">
                          {item.title}
                        </h4>
                        <p className="text-5xl font-black group-hover:text-white transition-colors tracking-tighter">
                          {item.value}
                        </p>
                      </div>
                      
                      <p className="text-zinc-500 group-hover:text-zinc-400 max-w-md leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="hidden md:block">
                      <ArrowUpRight className="w-12 h-12 text-zinc-200 group-hover:text-orange-600 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Achievements;