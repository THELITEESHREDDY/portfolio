"use client"
import React from 'react'

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/liteesh-reddy", color: "hover:text-blue-600" },
  { name: "X (Twitter)", url: "https://x.com/LiteeshTweets", color: "hover:text-sky-500" },
  { name: "GitHub", url: "https://github.com/THELITEESHREDDY", color: "hover:text-purple-600" },
  { name: "LeetCode", url: "https://leetcode.com/theLiteeshReddy", color: "hover:text-orange-500" }
]

function Contact() {
  return (
    <section id='contact' className="relative z-0 w-full py-20 px-6 md:px-20 scroll-mt-[10vh]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-6xl font-bold uppercase tracking-tighter">Let's</h2>
          <h2 className="text-orange-600 text-7xl font-black italic uppercase tracking-tighter">Connect_</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-2xl text-zinc-600 mb-8 leading-relaxed">
                Have a visionary idea or a complex problem to solve? 
                <span className="text-black font-bold"> Reach out and let's build something reliable.</span>
              </p>

              <div className="space-y-6">
                <div className="group">
                  <p className="text-sm font-mono text-zinc-400 uppercase">Email</p>
                  <a href="mailto:liteeshreddyofficial@gmail.com" className="text-3xl font-bold hover:text-orange-600 transition-colors">
                    liteeshreddyofficial@gmail.com
                  </a>
                </div>

                <div className="group">
                  <p className="text-sm font-mono text-zinc-400 uppercase">Phone</p>
                  <a href="tel:+918790859296" className="text-3xl font-bold hover:text-orange-600 transition-colors">
                    +91 8790859296
                  </a>
                </div>
              </div>
            </div>

            {/* Social Tags */}
            <div className="mt-12">
              <p className="text-sm font-mono text-zinc-400 uppercase mb-4">Digital Footprint</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className={`border-2 border-black px-4 py-2 font-bold transition-all hover:bg-black hover:text-white ${link.color}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Quick Message Form */}
          <div className="bg-zinc-50 border-2 border-black p-8 relative">
            <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 font-mono text-sm">
              SEND_MESSAGE
            </div>
            
            {/* ACTION: mailto:your-email
              ENCTYPE: plain text to keep the email readable
            */}
            <form 
              action="mailto:liteeshreddyofficial@gmail.com" 
              method="post" 
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Name</label>
                <input 
                  name="Name"
                  type="text" 
                  required
                  className="w-full bg-transparent border-b-2 border-zinc-300 focus:border-orange-600 outline-none py-2 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Email</label>
                <input 
                  name="Email"
                  type="email" 
                  required
                  className="w-full bg-transparent border-b-2 border-zinc-300 focus:border-orange-600 outline-none py-2 transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Message</label>
                <textarea 
                  name="Message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-2 border-zinc-300 focus:border-orange-600 outline-none p-3 transition-colors"
                  placeholder="Message here..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-600 text-black font-black text-2xl py-4 border-2 border-orange-600 hover:bg-white transition-all uppercase tracking-widest active:scale-95"
              >
                Transmit _
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Footer-style Signature */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-zinc-200 flex justify-between text-zinc-400 font-mono text-xs">
        <p>© 2026 LITEESH REDDY</p>
        <p>BUILT WITH NEXT.JS & TAILWIND</p>
      </div>
    </section>
  )
}

export default Contact