"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Wrench,
  Trophy,
  Sparkles,
  GitBranch,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Layout className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: "HTML5", image: "/Html.jpg" },
        { name: "CSS3", image: "/css.jpg" },
        { name: "JavaScript", image: "/js.jpg" },
        { name: "TypeScript", image: "/ts.jpg" },
        { name: "React.js", image: "/react.jpg" },
        { name: "Next.js", image: "/next.jpg" },
        { name: "Tailwind CSS", image: "/tailwindcss.jpg" },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-4 h-4 text-indigo-400" />,
      skills: [
        { name: "Node.js", image: "/nodejs.jpg" },
        { name: "Express.js", image: "/express.jpg" },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      skills: [
        { name: "MongoDB", image: "/mongodb.jpg" },
        // { name: "Mongoose", fallbackIcon: <Database className="w-4 h-4 text-emerald-400" /> },
      ],
    },
    {
      category: "Authentication",
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: "JWT", image: "/jwt.jpg" },
        { name: "Better Auth", image: "/betterauth.jpg" },
      ],
    },
    {
      category: "AI & LLM Integration",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      skills: [
        { name: "Gemini API", image: "/antigravity.jpg" },
        { name: "Prompt Engineering", fallbackIcon: <Sparkles className="w-4 h-4 text-purple-400" /> },
      ],
    },
    {
      category: "Tools & Ecosystem",
      icon: <Wrench className="w-4 h-4 text-rose-400" />,
      skills: [
        { name: "VS Code", image: "/vs.jpg" },
        { name: "Antigravity IDE", image: "/antigravity.jpg" },
        { name: "Git", fallbackIcon: <GitBranch className="w-4 h-4 text-orange-400" /> },
        { name: "GitHub", image: "/github.jpg" },
        { name: "Vercel", image: "/vercel.jpg" },
      ],
    },
    {
      category: "Competitive Programming",
      icon: <Trophy className="w-4 h-4 text-amber-300" />,
      skills: [
        { name: "Codeforces", image: "/codeforces.jpg" },
        { name: "CodeChef", image: "/codechef.jpg" },
        { name: "LeetCode", image: "/leetcode.jpg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            Technical Proficiency
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Core frameworks, databases, libraries, and competitive programming tools I build with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-2.5 border-b border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all shadow-sm hover:scale-105 cursor-default"
                    >
                      {skill.image ? (
                        <div className="w-4 h-4 relative rounded-full overflow-hidden border border-slate-700 shrink-0">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="shrink-0">{skill.fallbackIcon}</div>
                      )}
                      <span className="text-xs font-semibold text-slate-200">
                        {skill.name}
                      </span>
                    </div>
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
