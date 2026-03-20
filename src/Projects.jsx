import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  // Motion settings for reusability
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(128,0,128,0.5)' }, // Purple shadow
  };

  const projects = [
    {
      title: 'Language Learning App',
      desc: 'A full-stack language learning platform designed to help users improve vocabulary and grammar skills through personalized quizzes and real-time progress tracking. Built with Next.js and TypeScript, the app leverages Clerk for authentication and Firebase to store user progress.',
      link: '/projects/language-learning',
    },
    {
      title: 'Cloud Cost Tracker',
      desc: 'Cloud Cost Tracker is a full-stack web application that empowers users to monitor, visualize, and optimize their monthly cloud infrastructure spending. Designed for developers and engineering teams alike, it features an intuitive dashboard that transforms raw billing data into actionable insights.',
      link: '/projects/cloud-tracker',
    },
    {
      title: 'Twitter Clone',
      desc: 'Twitter Clone is a full-stack social media web application built to replicate the core experience of Twitter, enabling users to post tweets, like, comment, follow others, and personalize their profiles. The backend is powered by Python with FastAPI, offering robust RESTful APIs and JWT-based authentication.',
      link: '/projects/twitter-clone',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-8">
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">Projects</h2>
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
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.desc}</p>
              <Link to={project.link} className="text-pink-600 mt-4 inline-block">
                View Project
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <Link
          to="/archive"
          onClick={() => window.scrollTo(0, 0)}
          className="text-pink-600 mt-8 inline-block text-xl font-semibold hover:underline"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default Projects;