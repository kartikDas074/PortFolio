"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { GithubIcon } from "@/components/Navbar";

export default function Projects() {
  const projects = [
    {
      title: "BloodNet",
      category: "Full Stack Blood Donation Platform",
      status: "Completed",
      image: "/BloodeDonation.png",
      description:
        "Comprehensive blood donation platform enabling real-time donor requests, blood group filtering, recipient matching, and secure authentication.",
      tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Better Auth", "JWT"],
      liveUrl: "https://blood-net-u4rt.vercel.app",
      githubUrl: "https://github.com/kartikDas074/Blood_Net",
    },
    {
      title: "SportQ",
      category: "Sports Facility Booking Platform",
      status: "Completed",
      image: "/SportQ.png",
      description:
        "Full-stack sports venue & court reservation platform with slot booking, facility management, and instant confirmation workflows.",
      tech: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Better Auth"],
      liveUrl: "https://sport-q-green.vercel.app",
      githubUrl: "https://github.com/kartikDas074/SportQ",
    },
    {
      title: "Luxe E-Commerce",
      category: "Next-Gen E-Commerce Platform",
      status: "Ongoing",
      image: "/Luxe.png",
      description:
        "Modern digital storefront featuring dynamic product cataloging, cart state synchronization, secure user profiles, and responsive checkout UI.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Better Auth", "MongoDB"],
      liveUrl: "https://luxe-a-next-gen-ecommmerce-site.vercel.app",
      githubUrl: "https://github.com/kartikDas074/Luxe-A-NextGen_Ecommmerce_Site",
    },
    {
      title: "FlavourMind AI",
      category: "AI Restaurant Management & Chatbot",
      status: "Ongoing",
      image: "/FLavourMindAi.png",
      description:
        "Smart restaurant solution integrating Groq AI API for automated customer concierge, intelligent order recommendations, and management dashboard.",
      tech: ["Next.js", "Tailwind CSS", "Express.js", "Groq AI", "MongoDB", "Better Auth"],
      liveUrl: "https://flavour-mind-ai.vercel.app",
      githubUrl: "https://github.com/kartikDas074/FlavourMindAi",
    },
    {
      title: "Online Learning Platform",
      category: "Learning Management System",
      status: "Completed",
      image: "/OnlineLearning.png",
      description:
        "Interactive education hub allowing users to explore structured courses, monitor progress metrics, and access multimedia learning materials.",
      tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      liveUrl: "https://online-learning-plateform-j5u6.vercel.app",
      githubUrl: "https://github.com/kartikDas074/Online_Learning_Plateform",
    },
    {
      title: "KeenKeeper",
      category: "Productivity Task & Notes App",
      status: "Completed",
      image: "/KeenKeeper.png",
      description:
        "Lightweight productivity dashboard for managing daily tasks, custom notes, and priority lists with instant filtering.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://keen-kepper-dusky.vercel.app",
      githubUrl: "https://github.com/kartikDas074/KeenKeeper",
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A selection of production-ready full stack web applications, AI integrations, and digital platforms I have built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                        project.status === "Completed"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                          : "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      }`}
                    >
                      {project.status === "Completed" ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub Repository`}
                  className="p-2.5 rounded-xl glass-card border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
