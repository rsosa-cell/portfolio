const projects = [
  {
    id: "language-learning",
    title: "Language Learning App",
    description:
      "A Duolingo-inspired language learning platform built with Next.js and TypeScript. The app features structured units and lessons across multiple languages, interactive challenges, and audio-based learning to help users build vocabulary and pronunciation skills.",

    tech: "Next.js · TypeScript · Drizzle · Clerk · Tailwind CSS",

    features: [
      "User authentication with Clerk",
      "Structured units and lesson progression",
      "Interactive learning challenges",
      "Audio-based pronunciation support",
      "Responsive UI for desktop and mobile",
    ],

    images: ["/images/LL1.png", "/images/LL2.png"],

    video: "https://www.youtube.com/watch?v=ZWXECK1kl04",

    github: "https://github.com/rsosa-cell/language-learning-app",
  },

  {
    id: "cloud-tracker",
    title: "Cloud Cost Tracker",
    description:
      "Cloud Cost Tracker is a full-stack web application that helps users monitor, visualize, and optimize cloud infrastructure spending with real-time analytics and AI-driven insights.",

    tech:
      "React · TypeScript · Firebase Authentication · Firebase Functions · Firestore · Recharts",

    features: [
      "Secure Firebase Authentication",
      "Real-time cost dashboards",
      "Service-wise cost breakdown",
      "Budget alerts and anomaly detection",
      "CSV export for reports",
    ],

    images: ["/images/CloudCost1.png", "/images/CloudCost2.png"],

    video: "https://www.youtube.com/watch?v=yxVV3M3BYf0",

    github: "https://github.com/rsosa-cell/cloud-cost-dashboard",
  },

  {
    id: "ai-learning-assistant",
    title: "AI Learning Assistant",
    description:
      "An AI-powered learning platform that transforms documents into quizzes, flashcards, summaries, and interactive chat-based study sessions.",

    tech: "React · Node.js · Express · MongoDB · Tailwind CSS · Gemini API",

    features: [
      "AI-generated quizzes with scoring",
      "Flashcard generation for active recall",
      "Document-based AI chat assistant",
      "Auto summaries for learning efficiency",
      "JWT authentication system",
    ],

    images: ["/images/Ai.png", "/images/Ai2.png"], 

    video: "https://www.youtube.com/watch?v=Jn9lGxTmRb8",

    github: "https://github.com/rsosa-cell/ai-learning-assistant",
  },


];

export default projects;