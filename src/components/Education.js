"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  School,
} from "lucide-react";

export default function Education() {
  const highlights = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Software Engineering Principles",
    "Computer Networks & Protocols",
    "Operating Systems Architecture",
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal computer science education grounding theoretical principles and software engineering practices.
          </p>
        </div>

        {/* Hero Education Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main University Degree Card (Lg 8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all relative overflow-hidden flex flex-col justify-between group shadow-xl"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-cyan-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="space-y-6 relative z-10">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-300 shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-cyan-500/10">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                      Bachelor of Science (B.Sc.)
                    </h3>
                    <p className="text-sm font-semibold text-teal-300">
                      Computer Science & Engineering (CSE)
                    </p>
                  </div>
                </div>

                {/* Academic Status Pillar Badge */}
                <div className="px-4 py-2 rounded-2xl bg-slate-900/90 border border-slate-800 shrink-0 text-left sm:text-right space-y-0.5 shadow-inner">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Current Status
                  </span>
                  <span className="text-xs font-bold text-cyan-300 block">
                    3rd Year • 2nd Semester
                  </span>
                </div>
              </div>

              {/* Institution Details */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <School className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    University / Institution
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
                    Gopalganj Science and Technology University (GSTU)
                  </span>
                </div>
              </div>

              {/* Core Coursework Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Core Academic Specializations</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all text-xs font-medium text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar Visual */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4 text-xs">
              <span className="text-slate-400 font-medium">Academic Program Journey</span>
              <div className="flex items-center gap-2">
                <div className="w-32 sm:w-48 h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full w-[70%]" />
                </div>
                <span className="text-cyan-400 font-bold">70% Completed</span>
              </div>
            </div>
          </motion.div>

          {/* Side Focus Card (Lg 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between relative overflow-hidden group shadow-xl"
          >
            <div className="space-y-6">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                  Engineering Foundations
                </span>
                <h4 className="text-xl font-bold text-white">
                  Theoretical & Applied Computer Science
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Combining academic coursework in algorithm complexity and system design with continuous practical project building in modern web stacks.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Degree Level
                  </span>
                  <span className="text-xs font-bold text-slate-100">
                    B.Sc. Undergraduate (4 Years Program)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-xs font-bold text-slate-100 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Gopalganj, Bangladesh</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <span className="text-[11px] font-medium text-slate-400 italic">
                “Building software solutions backed by computer science fundamentals.”
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
