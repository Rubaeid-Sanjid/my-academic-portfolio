import React from "react";

const Skills = () => {
  const hardSkills = [
    { name: "C++", level: 60 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 60 },
    { name: "Python", level: 40 },
  ];

  const softSkills = [
    { name: "Communication", icon: "🗣️" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Problem Solving", icon: "🧠" },
    { name: "Adaptability", icon: "🔄" },
  ];

  return (
    <section id="skills" className="py-10 px-5 text-neutral-content relative">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/hexabump.png')] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10 text-center text-neutral-content">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <div className="p-5 bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Hard Skills</h3>
            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <div key={index}>
                  <p className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </p>
                  <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-5 bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-gray-700 p-3 rounded-lg shadow transition-transform hover:scale-105"
                  title={skill.name}
                >
                  <span className="text-4xl">{skill.icon}</span>
                  <span className="text-sm mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
