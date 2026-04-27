import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    p => p.id.trim() === id.trim()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="text-white p-8">
        Project not found.
      </div>
    );
  }

 return (
  <motion.div
    className="min-h-screen bg-[#0a192f] text-white px-6 py-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {/* BACK */}
    <button
      onClick={() => navigate(-1)}
      className="mb-10 text-sm text-pink-500 hover:underline hover:text-pink-400"
    >
      ← Back to Projects
    </button>

    {/* HERO - FULL WIDTH */}
    <div className="w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
        {project.title}
      </h1>

      <p className="mt-4 text-gray-300 text-lg max-w-none">
        {project.description}
      </p>

      <p className="mt-3 text-gray-400 italic">
        {Array.isArray(project.tech)
          ? project.tech.join(" · ")
          : project.tech}
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-6 flex-wrap">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 bg-pink-600 rounded"
          >
            View Code
          </a>
        )}

        {project.video && (
          <a
            href={project.video}
            target="_blank"
            className="px-4 py-2 border border-pink-500 rounded"
          >
            Watch Demo
          </a>
        )}
      </div>
    </div>

    {/* FEATURES - FULL WIDTH */}
    {project.features?.length > 0 && (
      <div className="w-full mt-14">
        <h2 className="text-2xl text-pink-500 mb-4">Key Features</h2>

        <ul className="space-y-2 text-gray-300">
          {project.features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>
    )}

    {/* IMAGES - FULL WIDTH GRID */}
    {project.images?.length > 0 && (
      <div className="w-full mt-14">
        <h2 className="text-2xl text-pink-500 mb-6">Screenshots</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="rounded-lg border border-gray-700 w-full"
              whileHover={{ scale: 1.02 }}
            />
          ))}
        </div>
      </div>
    )}
  </motion.div>
);
};

export default ProjectDetail;