import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-white px-6">
      {/* Greeting */}
      <h2 className="text-lg text-gray-600 mb-2">Hello, I’m</h2>

      {/* Name */}
      <h1 className="text-8xl sm:text-6xl font-bold text-emerald-600 mb-4">
        Vaibhav Raj Harsh
      </h1>

      {/* Short Role/Intro */}
      <p className="text-gray-700 text-lg sm:text-xl text-center max-w-2xl mb-8">
        I’m a passionate <span className="font-semibold">MERN Stack Developer </span> 
        who loves building modern, responsive, and user-friendly web applications.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/projects"
          className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition duration-200"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-xl border border-emerald-500 text-emerald-500 font-medium hover:bg-emerald-50 transition duration-200"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
