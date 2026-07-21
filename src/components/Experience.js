"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  Code2,
  Cpu,
  Database,
  Layers,
  CheckCircle2,
  Sparkles,
  Trophy,
  Globe,
  Terminal,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: "fullstack",
      period: "2024 - Present",
      roleBadge: "Full Stack & AI Architect",
      title: "MERN Stack & AI Systems Engineering",
      subtitle: "Personal Full Stack Software Engineering",
      description:
        "Architected and shipped multiple end-to-end full stack web applications. Designed database schemas in MongoDB with Mongoose, built RESTful APIs in Express.js/Node.js, developed responsive interfaces in Next.js/React with Tailwind CSS, and integrated modern LLM APIs (Gemini API & Groq AI).",
      deliverables: [
        { name: "FlavourMind AI", desc: "AI-powered restaurant management with Groq AI chatbot" },
        { name: "Luxe E-Commerce", desc: "Next-gen TypeScript storefront with cart state synchronization" },
        { name: "BloodNet", desc: "Full-stack blood donation & donor request matching platform" },
        { name: "SportQ", desc: "Sports venue & court reservation slot booking application" },
      ],
      skills: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Better Auth", "Gemini API", "Groq AI"],
      accentColor: "from-cyan-500/20 via-teal-500/10 to-transparent",
      borderColor: "hover:border-cyan-500/40",
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: "cp",
      period: "2023 - Present",
      roleBadge: "Algorithmic Engineer",
      title: "Competitive Programming & Problem Solving",
      subtitle: "Data Structures & Algorithmic Optimization",
      description:
        "Practiced advanced problem-solving techniques, graph algorithms, dynamic programming, and data structures across Codeforces, LeetCode, and CodeChef. Represented university in national level IUPC contests.",
      deliverables: [
        { name: "Codeforces Specialist", desc: "Peak Rating: 1535 • Active Contest Competitor" },
        { name: "CodeChef 3★ Star", desc: "Peak Rating: 1673 • Algorithmic Problem Solving" },
        { name: "BUET IUPC 2026", desc: "National Inter-University Programming Contest Participant" },
        { name: "DUET IUPC 2025", desc: "National Inter-University Programming Contest Participant" },
      ],
      skills: ["C++", "Algorithms", "Data Structures", "Dynamic Programming", "Graph Theory"],
      accentColor: "from-indigo-500/20 via-purple-500/10 to-transparent",
      borderColor: "hover:border-indigo-500/40",
      icon: <Trophy className="w-6 h-6 text-indigo-400" />,
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hands-on Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Personal Project <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive track record building production-grade full stack web applications and solving complex algorithmic challenges.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 ${exp.borderColor} transition-all relative overflow-hidden group shadow-2xl`}
            >
              {/* Top Accent Gradient Glow */}
              <div
                className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-bl ${exp.accentColor} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700`}
              />

              <div className="space-y-6 relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                      {exp.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                          {exp.roleBadge}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium">
                        {exp.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-cyan-300 border border-slate-800 shrink-0 w-fit self-start md:self-auto shadow-inner">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                  {exp.description}
                </p>

                {/* Key Deliverables & Projects Grid */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Featured Engineering Deliverables</span>
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.deliverables.map((item) => (
                      <div
                        key={item.name}
                        className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-1 group/item"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 group-hover/item:scale-110 transition-transform" />
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover/item:text-cyan-300 transition-colors">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 pl-6 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-1">Technologies Used:</span>
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
