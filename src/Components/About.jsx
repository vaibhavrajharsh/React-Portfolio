import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white  flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-emerald-600 mb-6">About Me</h1>

      {/* Description */}
      <p className="text-gray-700 text-lg max-w-2xl text-center mb-10">
        Hi 👋 I’m <span className="font-semibold">Vaibhav Raj Harsh</span>, a passionate
        MERN Stack developer who loves building modern web applications with a
        focus on clean UI, performance, and great user experience.
      </p>

      {/* Info Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-emerald-500 mb-4">
          What I Do
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>✅ Full-stack development with React & Node.js</li>
          <li>✅ Responsive UI design using Tailwind CSS</li>
          <li>✅ API development & integration</li>
          <li>✅ Open-source contributions</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
