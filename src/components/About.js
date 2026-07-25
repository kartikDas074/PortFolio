"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Layout,
  Download,
} from "lucide-react";

export default function About() {
  const personalInfo = [
    {
      icon: <User className="w-4 h-4 text-cyan-400" />,
      label: "Name",
      value: "Kartik Das",
    },
    {
      icon: <MapPin className="w-4 h-4 text-cyan-400" />,
      label: "Location",
      value: "Gopalganj, Bangladesh",
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
      label: "Education",
      value: "B.Sc. in CSE (GSTU)",
    },
    {
      icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
      label: "Current Status",
      value: "3rd Year • 2nd Semester",
    },
  ];

  const whatIDo = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: "Full Stack Development",
      description: "Building scalable web apps using React, Next.js, Node.js, and Express.",
    },
    {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      title: "REST API Development",
      description: "Designing robust, secure RESTful APIs with clean backend architecture.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Database Architecture",
      description: "Modeling MongoDB collections and schema optimization with Mongoose.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "Authentication",
      description: "Implementing secure Auth solutions using Better Auth and JWT tokens.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "AI Feature Integration",
      description: "Integrating Gemini & Groq LLM APIs for smart chatbots and automation.",
    },
    {
      icon: <Layout className="w-5 h-5 text-rose-400" />,
      title: "Responsive UI Design",
      description: "Crafting mobile-first, fast, accessible interfaces with Tailwind CSS.",
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            Get To Know Me
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Computer Science & Engineering student specializing in full-stack MERN systems, backend architecture, and AI integrations.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center sticky top-28"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-2xl blur-xl -z-10" />

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card rounded-2xl p-2.5 sm:p-3 border border-cyan-500/20 shadow-xl overflow-hidden"
              >
                <div className="relative aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden border border-slate-800">
                  <Image
                    src="/Coding.jpg"
                    alt="Kartik Das Coding"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg glass-card backdrop-blur-md border border-white/10">
                    <p className="text-[10px] text-cyan-300 font-semibold uppercase tracking-wider">
                      Focus & Specialization
                    </p>
                    <p className="text-xs font-medium text-slate-100 mt-0.5">
                      Full-Stack MERN Architecture & AI Systems
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Refined Bio Paragraph */}
            <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <p>
                I&apos;m <strong className="text-cyan-400">Kartik Das</strong>, a Computer Science & Engineering student at Gopalganj Science and Technology University (GSTU). I am deeply passionate about <strong className="text-cyan-300">website building, complex problem solving, critical thinking, error fixing</strong>, and constantly <strong className="text-cyan-300">exploring new technologies</strong> to build elegant full-stack applications.
              </p>
              <p>
                My development stack is anchored around the MERN ecosystem (MongoDB, Express.js, React, Node.js) with Next.js and TypeScript. I specialize in backend system design, RESTful API architecture, optimized MongoDB schemas, and integrating cutting-edge LLM/AI APIs like Google Gemini API and Groq AI.
              </p>
              <p>
                Outside of my coding setup, I love staying active and exploring new horizons. My favorite hobbies include <strong className="text-indigo-400">traveling</strong> to discover scenic places, playing strategic <strong className="text-indigo-400">card games</strong>, and playing <strong className="text-indigo-400">cricket</strong>.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl glass-card border border-slate-800/80 hover:border-cyan-500/20 transition-all flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {info.label}
                    </span>
                    <span className="text-xs font-medium text-slate-100 mt-0.5 block">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* What I Do Grid */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>What I Do</span>
                <span className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whatIDo.map((card, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="p-3.5 rounded-xl glass-card border border-slate-800 hover:border-cyan-500/20 transition-all space-y-1.5 group"
                  >
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 w-fit group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <div>
              <a
                href="/document/Resume.pdf"
                download="Kartik_Das_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/15 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
