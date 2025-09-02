import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white flex flex-col items-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-emerald-600 mb-8">
        Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-white rounded-xl shadow-sm text-center text-gray-800 font-medium hover:bg-emerald-100 transition duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
