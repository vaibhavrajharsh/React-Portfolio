import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "https://your-portfolio-link.com",
    },
    {
      title: "Music Player App",
      description: "A Spotify-like music player with playlist support.",
      link: "https://github.com/yourusername/music-player",
    },
    {
      title: "E-commerce Store",
      description: "Full-stack MERN e-commerce app with cart & payment integration.",
      link: "https://github.com/yourusername/ecommerce-store",
    },
    {
      title: "Blog Platform",
      description: "A blogging platform with authentication and CRUD features.",
      link: "https://github.com/yourusername/blog-platform",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white px-6 py-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-emerald-600 mb-8">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
