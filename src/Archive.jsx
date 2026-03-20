import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Archive = () => {
  // Motion settings
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(128,0,128,0.5)' }, // Purple shadow
  };

  // All projects array
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
    {
      title: 'Incident Tracker Web App',
      desc: 'A robust incident tracking platform engineered to handle system-critical event logging with real-time visibility and secure access control. The application uses React for the frontend and FastAPI with PostgreSQL on the backend.',
      link: '/projects/incident-tracker',
    },
    {
      title: 'Ecommerce Store',
      desc: 'A scalable e-commerce web app built to support browsing, purchasing, and managing products with a polished and professional UI. Users can explore product listings, add items to a persistent cart, and complete secure checkouts using Stripe integration.',
      link: '/projects/ecommerce-store',
    },
    {
      title: 'Kitchen Wizard',
      desc: 'Kitchen Wizard is a collaborative, full-stack recipe discovery app that helps users find meal ideas based on dietary preferences, ingredients on hand, and nutritional goals. Built as a team project, the app empowers users to search, filter, and view detailed recipes in a user-friendly interface.',
      link: '/projects/kitchen-wizard',
    },
    {
      title: 'AI Resume Scanner',
      desc: 'Python · spaCy · HTML/CSS\nAn AI-powered resume parsing tool designed to extract key skills and qualifications using spaCy’s natural language processing capabilities. The app reads raw resume text and outputs structured data such as skills, experience sections, and contact information.',
      link: '/projects/ai-resume-scanner',
    },
    {
      title: 'Job Application Tracker',
      desc: 'Python · Flask · SQLite · Tailwind CSS\nA full-stack web application for tracking job applications across multiple stages of the hiring process. Built with Python Flask and SQLite, the app supports adding, updating, and deleting applications while persisting data reliably.',
      link: '/projects/job-application-tracker',
    },
    {
      title: 'Auto-Healing Microservice',
      desc: 'Python · Docker · Bash\nA self-recovering microservice built with Python and Docker that simulates system crashes and auto-restores functionality. The system is configured using Docker Compose with custom restart policies and includes a Bash-based monitoring script that logs restart events and sends alerts when restarts exceed safe thresholds.',
      link: '/projects/auto-healing-microservice',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#0a192f] text-white px-8 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">All Projects</h2>

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
              <p className="text-gray-400 mt-2 whitespace-pre-line">{project.desc}</p>
              <Link to={project.link} className="text-pink-600 mt-4 inline-block">
                View Project
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;