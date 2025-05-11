import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-8">
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">Projects</h2>
        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          Here are a few of the projects I’ve worked on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

          {/* Language Learning App */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Language Learning App</h3>
            <p className="text-gray-400 mt-2">
            A full-stack language learning platform designed to help users improve vocabulary and grammar skills through personalized quizzes and real-time progress tracking. 
            Built with Next.js and TypeScript, the app leverages Clerk for authentication and Firebase to store user progress.
            </p>
            <Link to="/projects/language-learning" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          {/* Google Cloud */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Cloud Cost Tracker</h3>
            <p className="text-gray-400 mt-2">
            Cloud Cost Tracker is a full-stack web application that empowers users to monitor, visualize, and optimize their monthly cloud infrastructure spending. 
            Designed for developers and engineering teams alike, it features an intuitive dashboard that transforms raw billing data into actionable insights.
            </p>
            <Link to="/projects/cloud-tracker" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          {/* Incident Tracker */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
          <h3 className="text-2xl font-bold text-white">Incident Tracker Web App</h3>
          <p className="text-gray-400 mt-2">
          A robust incident tracking platform engineered to handle system-critical event logging with real-time visibility and secure access control. 
          The application uses React for the frontend and FastAPI with PostgreSQL on the backend. 
          </p>
          <Link to="/projects/incident-tracker" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>
        </div>

        <Link
          to="/archive"
          className="text-pink-600 mt-8 inline-block text-xl font-semibold"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default Projects;
