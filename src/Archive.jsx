import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#0a192f] text-white px-8 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">All Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

          {/* React + Firebase */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Language Learning App</h3>
            <p className="text-gray-400 mt-2">
              A full-stack language learning platform designed to help users improve vocabulary and grammar skills through personalized quizzes and real-time progress tracking. 
              Built with Next.js and TypeScript, the app leverages Clerk for authentication and Firebase to store user progress.</p>
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

          {/* Twitter Clone */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
          <h3 className="text-2xl font-bold text-white">Twitter Clone</h3>
          <p className="text-gray-400 mt-2">
          Twitter Clone is a full-stack social media web application built to replicate the core experience of Twitter, enabling users to post tweets, like, comment, follow others, and personalize their profiles.
          The backend is powered by Python with FastAPI, offering robust RESTful APIs and JWT-based authentication.
          </p>
          <Link to="/projects/twitter-clone" className="text-pink-600 mt-4 inline-block">View Project</Link>
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

          {/* Ecommerce */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Ecommerce Store</h3>
            <p className="text-gray-400 mt-2"> 
              A scalable e-commerce web app built to support browsing, purchasing, and managing products with a polished and professional UI. 
              Users can explore product listings, add items to a persistent cart, and complete secure checkouts using Stripe integration.</p>
            <Link to="/projects/ecommerce-store" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>


          {/* Kitchen Wizard */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Kitchen Wizard</h3>
            <p className="text-gray-400 mt-2">
            Kitchen Wizard is a collaborative, full-stack recipe discovery app that helps users find meal ideas based on dietary preferences, ingredients on hand, and nutritional goals. 
            Built as a team project, the app empowers users to search, filter, and view detailed recipes in a user-friendly interface. </p>
            <Link to="/projects/kitchen-wizard" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          {/* Python Projects */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">AI Resume Scanner</h3>
            <p className="text-gray-400 mt-2">Python · spaCy · HTML/CSS<br />
            An AI-powered resume parsing tool designed to extract key skills and qualifications using spaCy’s natural language processing capabilities. 
            The app reads raw resume text and outputs structured data such as skills, experience sections, and contact information.</p>
            <Link to="/projects/ai-resume-scanner" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Job Application Tracker</h3>
            <p className="text-gray-400 mt-2">Python · Flask · SQLite · Tailwind CSS<br />
            A full-stack web application for tracking job applications across multiple stages of the hiring process. 
            Built with Python Flask and SQLite, the app supports adding, updating, and deleting applications while persisting data reliably.</p>
            <Link to="/projects/job-application-tracker" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Personal Finance Tracker</h3>
            <p className="text-gray-400 mt-2">Python · Tkinter · Matplotlib · JSON<br />
            A desktop application built with Tkinter that helps users manage income, expenses, and savings goals through a simple and clean user interface. 
            The app supports creating and deleting financial entries, and visualizes spending trends with interactive Matplotlib graphs. </p>
            <Link to="/projects/personal-finanace-tracker" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Auto-Healing Microservice</h3>
            <p className="text-gray-400 mt-2">Python · Docker · Bash<br />
            A self-recovering microservice built with Python and Docker that simulates system crashes and auto-restores functionality. 
            The system is configured using Docker Compose with custom restart policies and includes a Bash-based monitoring script that logs restart events and sends alerts when restarts exceed safe thresholds..</p>
            <Link to="/projects/auto-healing-microservice" className="text-pink-600 mt-4 inline-block">View Project</Link>
            </div>

          {/* Java Project */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">File Encryption Tool</h3>
            <p className="text-gray-400 mt-2">Java · Swing · AES · RSA<br />
            A secure file encryption and decryption tool built in Java with a user-friendly Swing-based interface. 
            The application supports AES and RSA encryption algorithms and utilizes PBKDF2 for password-based key derivation. </p>
            <Link to="/projects/file-encryption-tool" className="text-pink-600 mt-4 inline-block">View Project</Link>
            </div>

          {/* C++ Projects */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Bank Management System</h3>
            <p className="text-gray-400 mt-2">C++ · File Handling · OOP<br />
            A console-based banking system developed in C++ using object-oriented principles and file handling. 
            Users can create accounts, deposit or withdraw funds, and check balances.</p>
            <Link to="/projects/bank-management-system" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white">Tic-Tac-Toe with AI</h3>
            <p className="text-gray-400 mt-2">C++ · Minimax · OOP<br />
            A terminal-based Tic-Tac-Toe game featuring a computer-controlled opponent powered by the minimax algorithm. 
            The game includes real-time board rendering, user input handling, win/draw detection, and AI decision-making.</p>
            <Link to="/projects/tic-tac-toe" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>

          {/* C# Projects */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50 hover:shadow-lg">
          <h3 className="text-2xl font-bold text-white">Student Grade Tracker</h3>
          <p className="text-gray-400 mt-2">C# · Console Application · JSON · OOP<br />
          A console-based student grade tracker built in C#. Users can add students, record grades, and view all students with letter grade representations. Student data is saved to a JSON file for persistence across sessions.</p>
          <Link to="/projects/student-grade-tracker" className="text-pink-600 mt-4 inline-block">View Project</Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
