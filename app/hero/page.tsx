"use client"
import Typewriter from 'typewriter-effect';
import Image from 'next/image'; // If using Next.js

function Hero() {
  const handleResumeClick = () => {
    // Replace this with your actual Google Drive or hosted PDF link
    window.open("https://drive.google.com/file/d/1nA9aRm3RfG5xPdmG6A4mRLlaiCAoQfCt/view?usp=sharing", "_blank");
  };

  return (
    // Changed h-auto to min-h-screen to ensure the borders look correct 
    // while allowing content to grow if needed
    <div id='home' className="min-h-screen w-screenrelative overflow-hidden">
      
      <main className="min-h-screen w-full flex flex-col md:flex-row border-b-2 border-black pt-[8vh]">
        
        {/* LEFT PANEL: Branding & Identity */}
        <div className="w-full md:w-3/5 border-r-2 border-black flex flex-col justify-center p-8 md:p-20 relative z-10">
          
          <div className="absolute top-10 left-10 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-600 animate-pulse"></span>
            <span className="font-mono text-sm font-bold tracking-widest uppercase">System_Active // Port: 3000</span>
          </div>

          <div className="space-y-2 mt-10 md:mt-0">
            <p className="text-4xl md:text-5xl font-medium text-zinc-400 italic">I'm</p>
            <h1 className="text-7xl md:text-[8rem] leading-none font-black tracking-tighter text-black">
              Liteesh <span className="text-orange-600">Reddy</span>
            </h1>
            
            <div className="text-3xl md:text-5xl font-mono text-zinc-800 mt-4 flex items-center">
              <Typewriter
                options={{
                  strings: ["// Engineer", "// Builder", "// Full-Stack Dev"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  wrapperClassName: "text-orange-600 font-bold",
                  cursorClassName: "text-orange-600"
                }}
              />
            </div>
          </div>

          <div className="mt-12 max-w-xl">
            <p className="text-2xl md:text-3xl leading-snug font-medium border-l-4 border-orange-600 pl-6 text-zinc-800">
              Building Visionary Ideas into <span className="text-orange-600 font-bold underline decoration-2 underline-offset-4">Reliable Software Products</span>: 
              Combining Design, Architecture, and Problem Solving.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-wrap gap-6 mb-10 md:mb-0">
            <button 
              onClick={handleResumeClick}
              className="bg-orange-600 text-white font-black text-2xl px-8 py-4 border-2 border-orange-600 hover:bg-white hover:text-orange-600 transition-all cursor-pointer uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              Get Resume
            </button>
            <a 
              href="#contact"
              className="border-2 border-black text-black font-black text-2xl px-8 py-4 hover:bg-black hover:text-white transition-all cursor-pointer uppercase tracking-tighter text-center"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* RIGHT PANEL: Design + Your Photo */}
        <div className="hidden md:flex md:w-[40%] bg-zinc-50 flex-col justify-between p-10 font-mono self-stretch relative overflow-hidden">
          
          {/* 1. Terminal Mockup (Stays in background) */}
          <div className="space-y-6 text-sm text-zinc-400 mt-10 relative z-10">
            <div>
               <p className="text-orange-600"> {">"} Initializing portfolio_v2.0...</p>
               <p className="text-zinc-500"> [SYSTEM] Calibration complete.</p>
            </div>
            
            <div className="space-y-1">
               <p> {">"} Fetching core_competencies...</p>
               <p className="text-black font-bold bg-zinc-200 px-2 w-fit"> [OK] React.js / FastAPI / PostgreSQL </p>
            </div>

            <div className="space-y-1">
               <p> {">"} Checking mission_statement...</p>
               <p className="text-black font-bold italic border-l-2 border-black pl-2"> 
                "Solve human problems with code." 
               </p>
            </div>
          </div>

          {/* 2. THE PHOTO (Floating Sticker) */}
          {/* CHANGE MADE HERE: Removed flex centering and used absolute positioning on the bottom-left */}
          <div className="absolute bottom-0 left-0 z-20 pointer-events-none p-4">
             <img 
               src="/right_image1.png" 
               alt="Liteesh Reddy"
               // Adjusted size slightly for better fit when aligned to the edge
               className="w-[60%] md:w-[70%] h-[80%] object-contain drop-shadow-2xl translate-y-8 scale-110"
             />
          </div>

          {/* 3. Bottom Visual Elements */}
          <div className="relative h-64 flex flex-col justify-end z-10">
            {/* The Large "LR" Watermark (Stays on the right) */}
            <h2 className="text-[12rem] font-black text-zinc-200 absolute -bottom-10 -right-6 leading-none select-none z-0">
              LR
            </h2>
            
            {/* Current Location Text (Stays on the right) */}
            <div className="relative z-10 space-y-2 text-right">
               <p className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-400">Current_Location</p>
               <p className="text-2xl font-black text-black">Phagwara, Punjab [IN]</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Hero;