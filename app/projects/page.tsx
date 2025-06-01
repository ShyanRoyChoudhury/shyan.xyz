import React from 'react';

const projects = [
  {
    title: "EcoTrack - Carbon Footprint Calculator",
    description: "A web application that helps users track and reduce their carbon footprint by analyzing their daily activities and suggesting eco-friendly alternatives. It aims to promote environmental awareness and sustainable living.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    links: [
      { name: "GitHub", url: "#" }, // Replace with actual URL
      { name: "Live Demo", url: "#" }, // Replace with actual URL
    ],
  },
  {
    title: "Portfolio Architect - Dynamic Portfolio Generator",
    description: "A tool for developers to quickly generate and customize their personal portfolio websites using predefined templates and a simple interface. Simplifies the process of creating a professional online presence.",
    technologies: ["React", "Firebase", "Material UI", "Node.js"],
    links: [
      { name: "GitHub", url: "#" }, // Replace with actual URL
    ],
  },
  {
    title: "TaskMaster Pro - Kanban Project Management",
    description: "A collaborative Kanban-style project management tool designed for agile teams. Features include drag-and-drop task boards, real-time updates, and progress tracking to enhance productivity.",
    technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
    links: [
      { name: "GitHub", url: "#" }, // Replace with actual URL
      { name: "Live Demo", url: "#" }, // Replace with actual URL
    ],
  },
];

function ProjectsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-accent mb-3">
              {project.links.find(link => link.name === "Live Demo") ? (
                <a href={project.links.find(link => link.name === "Live Demo")!.url} target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors duration-300">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>
            <p className="text-slate-300 mb-4 text-sm flex-grow">{project.description}</p>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-200 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-primary text-accent px-3 py-1 rounded-full text-xs hover:opacity-80 cursor-default transition-opacity duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-4 mt-auto">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white border border-accent hover:border-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
