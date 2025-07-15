const projects = [
    {
      id: "language-learning",
      title: "Language Learning App",
      description: "A full-stack language learning platform designed to help users improve vocabulary and grammar skills through personalized quizzes and real-time progress tracking. Built with Next.js and TypeScript, the app leverages Clerk for authentication and Firebase to store user progress. The frontend is responsive and mobile-friendly, designed with Tailwind CSS for a seamless UX across devices. Server-side rendering and lazy loading were used to optimize performance. The app also features a modular quiz system that adapts to the user's performance to reinforce learning effectively.",
      tech: "Next.js · TypeScript · Drizzle · Clerk · Tailwind CSS",
      features: [
        "User authentication with Clerk",
        "Real-time tracking with Firebase",
        "Server-side rendering and lazy loading",
        "Responsive UI for desktop and mobile"
      ],
      images: [
        "/images/LL1.png",
        "/images/LL2.png"
      ]
    },
  
    {
      id: "cloud-tracker",
      title: "Cloud Cost Tracker",
      description: "Cloud Cost Tracker is a full-stack web application that empowers users to monitor, visualize, and optimize their monthly cloud infrastructure spending. Designed for developers and engineering teams alike, it features an intuitive dashboard that transforms raw billing data into actionable insights. The app supports secure Firebase authentication, real-time data filtering, and exportable reports, all wrapped in a modern, responsive UI with dark mode support.",
      tech: "React · TypeScript · Firebase Authentication · Firebase Cloud Functions · Firestore · Chart.js · Recharts · CSS/Tailwind",
      features: [
        "Secure login with Firebase Authentication and JWT-protected API requests",
        "Interactive dashboard with real-time cloud cost visualizations",
        "Service-wise cost breakdown (e.g., Compute, Storage, etc.)",
        "Dark/light theme switching based on system preference",
        "Billing data filtering by date range and service type",
        "Export reports as CSV for external use in spreadsheets or BI tools",
        "User-defined budget thresholds with cost-saving suggestions",
        "Backend powered by Firebase Cloud Functions with ID token validation"
      ],
      images: [
        "/images/google1.png",
        "/images/google2.png"
      ]
    },
    {
      id: "twitter-clone",
      title: "Twitter Clone",
      description: "Twitter Clone is a full-stack social media web application built to replicate the core experience of Twitter, enabling users to post tweets, like, comment, follow others, and personalize their profiles. The backend is powered by Python with FastAPI, offering robust RESTful APIs and JWT-based authentication. On the frontend, React delivers a responsive and intuitive interface optimized for both desktop and mobile. The project features secure image uploads, real-time feed updates, and scalable cloud deployment using AWS services. This app showcases a production-ready architecture with attention to security, performance, and user experience.",
      tech: "React · JavaScript · FastAPI (Python) · PostgreSQL · AWS S3 · AWS EC2 · JWT · HTML/CSS",
      features: [
        "User authentication using JWT for secure session handling",
        "Create, delete, and display tweets with real-time updates",
        "Like and comment functionality on each tweet",
        "Follow/unfollow system with personalized timelines",
        "User profile editing with bio and profile picture upload",
        "Image handling and storage via AWS S3",
        "FastAPI-powered backend with clean RESTful routes",
        "PostgreSQL database integration for relational data",
        "Responsive UI design with mobile-first approach",
        "Cloud deployment using AWS EC2 and environment variables"
      ],
      images: [
        "/images/twitter1.png",
        "/images/twitter2.png"
      ]
    },
    {
      id: "incident-tracker",
      title: "Incident Tracker Web App",
      description: "A scalable e-commerce web app built to support browsing, purchasing, and managing products with a polished and professional UI. Users can explore product listings, add items to a persistent cart, and complete secure checkouts using Stripe integration. The backend is powered by Sanity CMS for flexible product management, while the frontend is built with Next.js and styled using Tailwind CSS. The application includes a dynamic cart system, order history, toast notifications, and admin functionality. Optimized for fast loading and built with mobile-first responsiveness in mind, the store provides a complete end-to-end online shopping experience.",
      tech: "Python · Typescript · React · FastAPI · PostgreSQL · SQLAlchemy · JWT Auth · WebSockets",
      features: [
        "JWT-based authentication for secure login and protected routes",
        "RESTful API endpoints using FastAPI and SQLAlchemy",
        "Real-time updates via WebSockets and long-polling",
        "Role-Based Access Control (RBAC) to restrict sensitive actions",
        "Automated and load testing to simulate production-scale usage"
      ],
      images: [
        "/images/incident1.png", 
        "/images/incident2.png"
      ]
    },
    {
      id: "ecommerce-store",
      title: "Ecommerce-Store",
      description: "A scalable e-commerce web app built to support browsing, purchasing, and managing products with a polished and professional UI. Users can explore product listings, add items to a persistent cart, and complete secure checkouts using Stripe integration. The backend is powered by Sanity CMS for flexible product management, while the frontend is built with Next.js and styled using Tailwind CSS. The application includes a dynamic cart system, order history, toast notifications, and admin functionality. Optimized for fast loading and built with mobile-first responsiveness in mind, the store provides a complete end-to-end online shopping experience.",
      tech: "Next.js · React · Sanity · Tailwind CSS",
      features: [
        "Secure payments with Stripe",
        "CMS for product and inventory management",
        "Persistent cart using local storage",
        "Admin dashboard for managing orders"
        
      ],
      images: [
        "/images/Store1.png",
        "/images/Store2.png"
      ]
    },
    {
      id: "kitchen-wizard",
      title: "Kitchen Wizard",
      description: "Kitchen Wizard is a collaborative, full-stack recipe discovery app that helps users find meal ideas based on dietary preferences, ingredients on hand, and nutritional goals. Built as a team project, the app empowers users to search, filter, and view detailed recipes in a user-friendly interface. It integrates Firebase Authentication to manage secure user login/logout and ensures personalized access to saved favorites. The front end is developed using React with React Router for seamless navigation between pages such as home, login, recipe list, and recipe detail views. The application emphasizes responsive design, efficient state management, and modular components to provide a clean and intuitive experience. Throughout development, the team focused on collaborative Git workflows, code quality, and accessibility, resulting in a polished and functional web app suitable for real-world use.",
      tech: "Javascript · Firebase Auth · HTML/CSS · Dynamic routing with React Router",
      features: [
        "Recipe filtering by dietary restrictions",
        "Ingredient-based search",
        "Firebase authentication",
        "Mobile-optimized design"
      ],
      images: [
        "/images/KW1.png",
        "/images/KW2.png"
      ]
    },

    {
      id: "ai-resume-scanner",
      title: "Ai Resume Scanner",
      description: "An AI-powered resume parsing tool designed to extract key skills and qualifications using spaCy's natural language processing capabilities. The app reads raw resume text and outputs structured data such as skills, experience sections, and contact information. The front end is styled with custom HTML and CSS to present extracted content cleanly and accessibly. This project focuses on exploring NLP techniques for real-world document analysis while building an intuitive user interface. It is currently in development, with final spaCy integration and UI enhancements in progress.",
      tech: "Python · spaCy ·  HTML/CSS",
      features: [
        "Skill and experience extraction using named entity recognition (NER)",
        "Custom HTML/CSS UI for uploading and viewing parsed data",
        "Section detection for improved parsing accuracy",
        "Real-time preview of structured resume data"
      ],
      images: [
        "/images/Resume1.png",
        "/images/Resume2.png"
      ]
    },

    {
      id: "job-application-tracker",
      title: "Job Application Tracker",
      description: "A full-stack web application for tracking job applications across multiple stages of the hiring process. Built with Python Flask and SQLite, the app supports adding, updating, and deleting applications while persisting data reliably. Tailwind CSS was used to create a responsive UI that adapts to different screen sizes. The application features dynamic forms, status labels, and alert notifications to help users manage their job hunt effectively. It provides a streamlined way to monitor interviews, follow-ups, and offer statuses, reducing friction in the application workflow.",
      tech: "Python · Flask · SQLite · Tailwind CSS",
      features: [
        "Add, edit, and delete job applications",
        "Status updates (e.g., Applied, Interviewing, Offer)",
        "Real-time feedback and alerts",
        "Mobile-friendly design with Tailwind CSS"
      ],
      images: [
       "/images/JobTracker1.png",
        "/images/JobTracker2.png"
      ]
    },

    {
      id: "personal-finanace-tracker",
      title: "Personal Finance Tracker",
      description: "A desktop application built with Tkinter that helps users manage income, expenses, and savings goals through a simple and clean user interface. The app supports creating and deleting financial entries, and visualizes spending trends with interactive Matplotlib graphs. It saves all user data locally using JSON, ensuring persistence across sessions. The tool is ideal for users looking for a lightweight, offline budgeting solution, and demonstrates skills in GUI design, local data handling, and data visualization.",
      tech: "Python · Tkinter · Matplotlib · JSON",
      features: [
        "Add/view/delete financial transactions",
        "Bar and pie charts for category-wise spending",
        "Goal setting for savings",
        "Persistent data saved to local JSON files"
      ],
      images: [
        "/images/FinanceTracker1.png",
        "/images/FinanceTracker2.png"
      ]
    },
    {
      id: "auto-healing-microservice",
      title: "Auto-Healing Microservice",
      description: "A self-recovering microservice built with Python and Docker that simulates system crashes and auto-restores functionality. The system is configured using Docker Compose with custom restart policies and includes a Bash-based monitoring script that logs restart events and sends alerts when restarts exceed safe thresholds. This project demonstrates an understanding of resilient architecture, container orchestration, and real-world failure recovery. It was load-tested under simulated failure conditions to validate uptime guarantees and auto-healing logic.",
      tech: "Python · Docker · Docker Compose · Bash",
      features: [
        "Self-healing with Docker restart policies",
        "Real-time logging of restarts",
        "Bash script to alert on restart threshold breaches",
        "Fully containerized using Docker Compose"
      ],
      images: [
        "/images/AutoHeal1.png",
        "/images/AutoHeal2.png"
      ]
    },

    {
      id: "file-encryption-tool",
      title: "File Encryption Tool",
      description: "A secure file encryption and decryption tool built in Java with a user-friendly Swing-based interface. The application supports AES and RSA encryption algorithms and utilizes PBKDF2 for password-based key derivation. Users can select files, enter encryption preferences, and manage keys through a clean UI. Additional features include hybrid encryption modes, log file generation for traceability, and secure key export/import. The app is intended to demonstrate both cryptographic understanding and Java desktop development.",
      tech: "Java · Swing · AES · RSA · PBKDF2",
      features: [
        "File encryption and decryption with AES and RSA",
        "Hybrid mode combining symmetric and asymmetric encryption",
        "Password-based key derivation using PBKDF2",
        "Log generation and file-based key storage"
      ],
      images: [
       "/images/Encrypt1.png",
        "/images/Encrypt2.png"
      ]
    },
    {
      id: "bank-management-system",
      title: "Bank Management System",
      description: "A console-based banking system developed in C++ using object-oriented principles and file handling. Users can create accounts, deposit or withdraw funds, and check balances. The application persists account data using text files, ensuring that transactions are saved even after the program closes. The CLI interface includes input validation and basic access control. This project was an early exploration of structured programming, OOP, and data persistence in C++.",
      tech: " C++ · OOP · File Handling",
      features: [
        "Account creation and deletion",
        "Balance inquiry, deposit, and withdrawal",
        "Data persistence via file I/O",
        "Simple command-line interface with input validation"
      ],
      images: [
         "/images/Bank1.png",
        "/images/Bank2.png"
      ]
    },
    {
      id: "tic-tac-toe",
      title: "Tic-Tac-Toe (with AI)",
      description: "A terminal-based Tic-Tac-Toe game featuring a computer-controlled opponent powered by the minimax algorithm. The game includes real-time board rendering, user input handling, win/draw detection, and AI decision-making. It was built using modular, object-oriented C++ to allow easy extension or rule customizations. The AI is capable of predicting future game states, making it an unbeatable opponent. This project demonstrates algorithmic thinking, turn-based logic, and clean console-based interaction.",
      tech: " C++ · Minimax Algorithm · OOP",
      features: [
        "Single-player mode with unbeatable AI",
        "Real-time move validation and board updates",
        "Win/draw detection logic",
        "Structured using OOP for easy extension"
      ],
      images: [
        "/images/Tac1.png",
        "/images/Tac2.png"
      ]
    },
    

    
  ];
  
  export default projects;
  