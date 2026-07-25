export const projects = [
  {
    id: "bloodnet",
    title: "BloodNet",
    category: "Full Stack Blood Donation Platform",
    status: "Completed",
    image: "/BloodeDonation.png",
    description:
      "Comprehensive blood donation platform enabling real-time donor requests, blood group filtering, recipient matching, and secure authentication.",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Better Auth", "JWT", "Stripe"],
    liveUrl: "https://blood-net-u4rt.vercel.app",
    githubUrl: "https://github.com/kartikDas074/Blood_Net",
    details: {
      overview: "BloodNet is a full-stack MERN-based blood donation platform that connects blood donors with recipients in a fast, secure, and user-friendly way. The platform provides role-based dashboards for Donors, Volunteers, and Administrators to efficiently manage blood donation requests while also supporting online funding through Stripe.",
      techStack: {
        Frontend: ["Next.js", "React", "Tailwind CSS", "Better Auth", "React Hook Form", "Lucide React", "React Icons", "React Hot Toast", "Framer Motion"],
        Backend: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "CORS", "Dotenv"]
      },
      features: [
        "Authentication & Authorization: Secure authentication with Better Auth, JWT protected private APIs, role-based access, and protected routes.",
        "User Management: Profile updates, blood group selection, district & upazila selection, avatar uploads, and active/blocked user management.",
        "Blood Donation Workflow: Create, edit, delete, and view donation requests; donate blood workflow and donation status management.",
        "Funding System: Stripe payment gateway integration, funding history, total funding statistics, and secure checkout."
      ],
      architecture: "MERN Stack architecture. Routes are protected via JWT middleware and Better Auth session checking, with a separate Client (Next.js) and Server (Express/Node.js).",
      challenge: {
        feature: "Role-Based Multi-Dashboard & Flow Synchronization",
        description: "Managing three distinct user roles (Admin, Volunteer, Donor) and updating state correctly while coordinating secure Stripe payments and donation status changes asynchronously.",
        solution: "Implemented centralized state verification using JWT combined with Better Auth middlewares, ensuring APIs are strictly protected. Created role-specific dashboards routing different users to their customized modules safely."
      },
      generalChallenges: "Integrating secure multi-step roles and protecting API gateways, coordinating donor availability matching based on districts and upazilas, and resolving complex Stripe webhook and checkout redirections.",
      futurePlans: [
        "Implement real-time donor location tracking on maps.",
        "Add email/SMS alerts for urgent blood requests.",
        "Incorporate community forums and user review systems."
      ]
    }
  },
  {
    id: "sportq",
    title: "SportQ",
    category: "Sports Facility Booking Platform",
    status: "Completed",
    image: "/SportQ.png",
    description:
      "Full-stack sports venue & court reservation platform with slot booking, facility management, and instant confirmation workflows.",
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Better Auth"],
    liveUrl: "https://sport-q-green.vercel.app",
    githubUrl: "https://github.com/kartikDas074/SportQ",
    details: {
      overview: "SportQ is a full-stack MERN-based sports facility booking platform that allows users to explore, book, and manage various sports facilities such as football turfs, badminton courts, tennis courts, and swimming lanes.",
      techStack: {
        Frontend: ["React.js", "Next.js", "Tailwind CSS / CSS Modules", "React Toastify"],
        Backend: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "CORS"]
      },
      features: [
        "Google OAuth & HTTP-only Cookie-based authentication for persistent secure logins.",
        "Browse All Facilities and book facilities by date and time slot with price calculations.",
        "Owner dashboard to add, update, and delete facilities.",
        "User dashboard to view/cancel bookings and track status (pending/cancelled)."
      ],
      architecture: "MERN Stack architecture. Session states are stored via JWT in secure, HTTP-only cookies to prevent cross-site scripting vulnerabilities.",
      challenge: {
        feature: "HTTP-Only Cookie Authentication & Session Persistence",
        description: "Maintaining persistent user session states across next.js pages securely without exposing tokens to client-side scripts.",
        solution: "Implemented JWT generation on login/signup, sending it as an HTTP-only secure cookie from the Express backend, backed by authorization middleware checking credentials on each private API request."
      },
      generalChallenges: "Developing a conflict-free booking system with time-slot management, maintaining slot counts dynamically, and preventing double-booking of a single slot.",
      futurePlans: [
        "Stripe payment gateway integration for direct bookings.",
        "Interactive map location search for nearby turfs.",
        "User reviews and rating systems for facilities."
      ]
    }
  },
  {
    id: "skillsphere",
    title: "SkillSphere",
    category: "Learning Management System",
    status: "Completed",
    image: "/OnlineLearning.png",
    description:
      "Interactive education hub allowing users to explore structured courses, monitor progress metrics, and access multimedia learning materials.",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "Better Auth", "MongoDB"],
    liveUrl: "https://online-learning-plateform-vugv.vercel.app",
    githubUrl: "https://github.com/kartikDas074/Online_Learning_Plateform",
    details: {
      overview: "SkillSphere is a modern and responsive online learning platform where users can explore courses, view detailed course info, enroll in programs, and improve skills through industry-focused learning content.",
      techStack: {
        Frontend: ["Next.js 15", "React.js", "Tailwind CSS", "DaisyUI / HeroUI", "Motion / Swiper JS"],
        Backend: ["MongoDB", "BetterAuth (Google & Email Login)"]
      },
      features: [
        "Authentication system using BetterAuth supporting Google Login and standard email/password.",
        "Protected Course Details page with static curriculum sections and video integration.",
        "User Profile page with feature to update name and avatar image URLs.",
        "Home page with Hero Banner, Popular Courses, Trending Courses, Learning Tips, and Top Instructors."
      ],
      architecture: "Next.js App Router layout integrated with BetterAuth middleware routing and MongoDB client-side validation logic.",
      challenge: {
        feature: "BetterAuth Middleware Social Integration",
        description: "Providing seamless Google social login alongside email authentication while maintaining secure page-level protection using Next.js App Router.",
        solution: "Integrated BetterAuth SDK with Next.js route handlers, defining custom session checks in layout and profile routes to prevent unauthorized client access."
      },
      generalChallenges: "Synchronizing user profile metadata updates, constructing responsive carousels with Swiper.js, and handling loading states gracefully during large-scale course filtering.",
      futurePlans: [
        "Integrate interactive video player and progress tracker.",
        "Support course creation dashboards for certified instructors.",
        "Add interactive quiz modules and automated certificate generation."
      ]
    }
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    category: "Friendship Analytics & Timeline",
    status: "Completed",
    image: "/KeenKeeper.png",
    description:
      "Dedicated analytics dashboard for tracking personal social interactions, featuring dynamic timelines and status tracking charts.",
    tech: ["React.js", "Tailwind CSS", "DaisyUI", "Recharts"],
    liveUrl: "https://keen-kepper-dusky.vercel.app",
    githubUrl: "https://github.com/kartikDas074/KeenKeeper",
    details: {
      overview: "KeenKeeper is a React-based application designed to help users track interaction history with friends, featuring friendship analytics, dynamic timelines, and smart contact status tracking.",
      techStack: {
        Frontend: ["React.js", "React Router DOM", "Tailwind CSS & DaisyUI"],
        StateAndVis: ["React Context API", "Recharts", "Lottie-React", "React-Hot-Toast", "React Icons"]
      },
      features: [
        "Friendship Analytics: Stats page featuring an interactive Recharts Pie Chart visualising communication patterns (Calls, Texts, Video Chats).",
        "Dynamic Timeline: Automated interaction logger recording 'Quick Check-ins' with category filter support.",
        "Smart Status Tracking: Color-coded indicators (Overdue, Almost Due, On-Track) based on days elapsed since the last contact."
      ],
      architecture: "React SPA with React Router, local storage for data persistence, and React Context API for global state management.",
      challenge: {
        feature: "Dynamic Status Calculations & Live Analytics",
        description: "Calculating contact status dynamically on the fly based on dates while generating clean, responsive Pie Charts of communication counts.",
        solution: "Created a lightweight date parser utility inside a Context provider that updates friend status dynamically. Fed structured interaction history records directly to Recharts for instant rendering."
      },
      generalChallenges: "Setting up the global timeline state with Context API to avoid prop drilling and designing smooth micro-animations using Lottie.",
      futurePlans: [
        "Add automated email/SMS reminders for Overdue contacts.",
        "Sync contacts via Google People API.",
        "Support exporting interaction statistics reports."
      ]
    }
  },
  {
    id: "luxe",
    title: "Luxe E-Commerce",
    category: "Next-Gen E-Commerce Platform",
    status: "Completed",
    image: "/Luxe.png",
    description:
      "Modern digital storefront featuring dynamic product cataloging, cart state synchronization, secure user profiles, and responsive checkout UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Better Auth", "MongoDB", "Stripe"],
    liveUrl: "https://luxe-a-next-gen-ecommmerce-site.vercel.app",
    githubUrl: "https://github.com/kartikDas074/Luxe-A-NextGen_Ecommmerce_Site",
    details: {
      overview: "Luxe is a modern full-stack e-commerce platform designed to deliver a seamless online shopping experience, secure authentication, and efficient product management.",
      techStack: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        Backend: ["Node.js", "Express.js", "MongoDB", "Better Auth", "JWT", "Stripe"]
      },
      features: [
        "Authentication: Email & Password, Google Social Login, JWT session management, protected routes, and Role-Based Access.",
        "Shopping: Product details, category filters, product search, cart state management, and responsive layouts.",
        "Product Management (Admin): Add, update, and delete products, manage categories, images, and inventory stock."
      ],
      architecture: "Next.js frontend communicating with a custom Express backend. MongoDB stores product, user, and order collections.",
      challenge: {
        feature: "TypeScript-Strict State Management & Type Safety",
        description: "Ensuring complete type safety across API responses, product configurations, cart state management, and user dashboards in a fast-paced development flow.",
        solution: "Defined clear interfaces for all schemas, API payloads, and cart parameters. Used TypeScript generics on fetch requests to prevent runtime errors and ensure reliable autocomplete features."
      },
      generalChallenges: "Coordinating server-side rendering (SSR) states with dynamic client-side shopping carts and handling edge cases in Stripe payment checkouts.",
      futurePlans: [
        "Incorporate product wishlist and rating systems.",
        "Integrate sales analytics graphs in the admin panel.",
        "Add AI-powered product recommendation modules."
      ]
    }
  },
  {
    id: "flavourmind-ai",
    title: "FlavourMind AI",
    category: "AI Restaurant Management & Chatbot",
    status: "Completed",
    image: "/FLavourMindAi.png",
    description:
      "Smart restaurant solution integrating Groq AI API for automated customer concierge, intelligent order recommendations, and management dashboard.",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "Groq AI", "MongoDB", "Better Auth"],
    liveUrl: "https://flavour-mind-ai.vercel.app",
    githubUrl: "https://github.com/kartikDas074/FlavourMindAi",
    details: {
      overview: "FlavourMind AI is a modern AI-powered restaurant management platform that combines online food ordering, restaurant administration, and an intelligent AI assistant powered by the Groq LLM (Llama).",
      techStack: {
        Frontend: ["Next.js", "React", "Tailwind CSS"],
        Backend: ["Node.js", "Express.js", "MongoDB", "Better Auth", "Groq API (Llama Model)"]
      },
      features: [
        "AI Assistant: Groq LLM agent providing food recommendations, budget suggestion, ingredient details, and answering restaurant FAQs.",
        "Context-Awareness: AI assistant fetches real-time restaurant menu, categories, and authenticated customer's order history to make suggestions.",
        "Admin Dashboard: Sales analytics, menu management (CRUD food items), and dashboard statistics."
      ],
      architecture: "Next.js client connecting to Express.js server which handles data orchestration. The backend constructs a structured prompt payload using database records and calls Groq's APIs.",
      challenge: {
        feature: "Context-Aware Restaurant AI Agent",
        description: "Building an AI assistant that responds with accurate, real-time menu facts, prices, availability, and user order histories without hallucinating or breaking parameters.",
        solution: "Designed a custom middleware context pipeline. Before calling Groq LLM, the backend fetches the current menu DB, user details, and restaurant FAQs, formatting them into system instructions. This structures Groq's output to strictly reference valid restaurant facts."
      },
      generalChallenges: "Optimizing token limits and latency of LLM responses while dynamically fetching multiple MongoDB collections, and constructing intuitive admin panels for managing food updates.",
      futurePlans: [
        "Add voice-controlled food ordering features.",
        "Support real-time driver delivery tracking.",
        "Implement multi-restaurant vendor configurations."
      ]
    }
  }
];
