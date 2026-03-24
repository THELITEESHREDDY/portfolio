"use client"


const skillsData = [
  {
    category: "Languages",
    items: ["C", "C++", "JavaScript", "SQL", "Python"],
  },
  {
    category: "Web & Frameworks",
    items: ["HTML", "Tailwind CSS", "PHP", "React.js", "FastAPI","Express.js","Node.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["GitHub", "Git", "XAMPP", "VS Code", "Postman", "Vite"],
  },
  {
    category: "Course Work",
    items: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
  },
  {
    category: "Soft Skills",
    items: ["Problem-Solving", "Critical Thinking", "Team Work", "Adaptability"],
  },
]

function Skills() {
  return (
    <div id="skills" className="relative z-0 w-full py-20 px-6 md:px-20 scroll-mt-[10vh]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-6xl font-bold mb-2">Technical</h2>
          <h2 className="text-orange-600 text-7xl font-bold italic">Arsenal_</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <div 
              key={index} 
              className="border-2 border-black hover:border-orange-600 transition-colors duration-300 p-6 bg-white/50 backdrop-blur-sm group"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-orange-600 mr-3 group-hover:w-4 transition-all"></span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="border border-zinc-300 px-3 py-1 text-lg font-medium hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills