import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(128,0,128,0.5)" },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-8"
    >
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">
          Projects
        </h2>

        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          Here are a few of the projects I’ve worked on.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] p-6 rounded-lg shadow-lg cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              <Link
                to={`/projects/${project.id}`}
                className="text-pink-600 mt-4 inline-block"
              >
                View Project
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;