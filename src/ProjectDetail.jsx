import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from './data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="text-white p-8">Project not found.</div>;
  }

  return (
    <motion.div
  className="min-h-screen bg-[#0a192f] text-white px-6 py-16"  
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
    >
      <button
  onClick={() => navigate(-1)}
  className="mb-8 text-sm text-pink-500 hover:underline hover:text-pink-400"
>
  ← Back to Projects
</button>
      <h1 className="text-4xl font-bold text-pink-600 scroll-mt-24">{project.title}</h1>

      <p className="mt-4 text-gray-300">{project.description}</p>

      {/* Safe tech rendering */}
      <p className="mt-2 text-gray-400 italic">
        Tech Stack: {Array.isArray(project.tech) ? project.tech.join(', ') : project.tech}
      </p>

      {project.features?.length > 0 && (
        <ul className="mt-6 list-disc list-inside text-gray-300 space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {project.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {project.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg border border-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(128,0,128,0.5)' }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;