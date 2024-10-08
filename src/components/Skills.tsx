import React from "react";

interface SkillProps {
  skills: {
    category: string;
    skillList: {
      name: string;
      level: number; 
    }[];
  }[];
}

const Skills: React.FC<SkillProps> = ({ skills }) => {
  return (
    <section className="my-20 px-4 md:px-10 bg-gradient-to-r from-purple-400 to-pink-400 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 text-center">Habilidades</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl">
          {skills.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.category}</h3>
              <ul>
                {category.skillList.map((skill, skillIndex) => (
                  <li key={skillIndex} className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-lg">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
