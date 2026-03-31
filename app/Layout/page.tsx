const NavBar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Training", href: "#training" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-black p-1 shadow-[8px_8px_0px_0px_rgba(234,88,12,1)] border-2 border-black scroll-mt-[10vh]">
      {navItems.map((item, index) => (
        <a
          key={item.name}
          href={item.href}
          className={`
            px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all
            text-zinc-400 hover:text-white hover:bg-zinc-900
            ${index !== navItems.length - 1 ? 'border-r border-zinc-800' : ''}
            /* Optional: Add a specific style for the first item if desired */
            ${item.name === "Home" ? "text-orange-600" : ""} 
          `}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

const Bord = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[8%] bg-white border-b-2 border-black flex items-center justify-between px-10 z-[100] backdrop-blur-md bg-white/80">
      <div className="flex items-center gap-4">
        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-sm text-xs font-mono tracking-tighter">
          <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
          PORTFOLIO_V2.0
        </div>
        <p className="text-orange-600 font-black text-3xl uppercase tracking-tighter">
          Liteesh Reddy<span className="text-black">_</span>
        </p>
      </div>

      <div className="hidden md:block font-mono text-xs text-zinc-400">
        [ ENGINEER // BUILDER // FULL-STACK ]
      </div>
    </div>
  )
}
export default function Page() {
  return <div>Layout Page</div>;
}
export {NavBar,Bord}
