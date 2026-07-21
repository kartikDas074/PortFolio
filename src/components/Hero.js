"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  FolderCode,
  Mail,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Navbar";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack & AI Systems",
    "Next.js Developer",
    "AI Integration Enthusiast",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === targetRole) {
      typingSpeed = 2200; // Pause at full text
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? targetRole.substring(0, prev.length - 1)
          : targetRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mobile Profile Image */}
          <div className="lg:hidden flex justify-center">
            <HeroProfileCard />
          </div>

          {/* Left Content (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/20 text-cyan-300 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>Full Stack MERN & AI Developer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5">
              <h2 className="text-lg sm:text-xl font-medium text-slate-400">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-200 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  Kartik Das
                </span>
              </h1>
            </div>

            {/* Rotating Typewriter Role - Smooth full text display */}
            <div className="h-9 sm:h-10 flex items-center justify-center lg:justify-start min-w-[280px]">
              <p className="text-base sm:text-xl font-medium text-slate-300 flex items-center gap-2">
                <span>I build</span>
                <span className="text-cyan-400 font-mono font-bold underline decoration-cyan-500/40 underline-offset-4">
                  {currentText}
                </span>
                <span className="w-0.5 h-5 bg-cyan-400 inline-block animate-pulse" />
              </p>
            </div>

            {/* Professional Description */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Computer Science & Engineering student at GSTU specializing in full-stack MERN architecture, backend system design, RESTful APIs, and modern LLM/AI integrations (Gemini & Groq AI).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="/document/Resume.pdf"
                download="Kartik_Das_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-300 glass-card hover:bg-slate-800/80 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <FolderCode className="w-4 h-4" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Icons & Competitive Programming Links */}
            <div className="pt-3 flex flex-col items-center lg:items-start gap-2.5">
              <span className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider">
                Connect & Profiles
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <SocialIconButton
                  href="https://github.com/kartikDas074"
                  icon={<GithubIcon className="w-4 h-4" />}
                  label="GitHub"
                />
                <SocialIconButton
                  href="https://www.linkedin.com/in/meet-kartikdas/"
                  icon={<LinkedinIcon className="w-4 h-4" />}
                  label="LinkedIn"
                />
                <SocialIconButton
                  href="mailto:kartikdas209774@gmail.com"
                  icon={<Mail className="w-4 h-4" />}
                  label="Email"
                />
                <SocialImageButton
                  href="https://leetcode.com/u/kartiksk_sk"
                  imageSrc="/leetcode.jpg"
                  label="LeetCode"
                />
                <SocialImageButton
                  href="https://codeforces.com/profile/Rdr_Kartik"
                  imageSrc="/codeforces.jpg"
                  label="Codeforces"
                />
                <SocialImageButton
                  href="https://www.codechef.com/users/kartiksk22"
                  imageSrc="/codechef.jpg"
                  label="CodeChef"
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Right Side Profile Card */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <HeroProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center p-2"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 rounded-full blur-3xl scale-105 pointer-events-none" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 p-3 sm:p-4 rounded-full glass-card border border-cyan-500/25 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-teal-300">
          <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950 border-2 border-slate-900">
            <Image
              src="/Me.jpg"
              alt="Kartik Das Profile"
              fill
              priority
              className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SocialIconButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2.5 rounded-full glass-card border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all transform hover:-translate-y-0.5 shadow-sm"
    >
      {icon}
    </a>
  );
}

function SocialImageButton({ href, imageSrc, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-full glass-card border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
    >
      <div className="w-4 h-4 relative rounded-full overflow-hidden border border-slate-700">
        <Image src={imageSrc} alt={label} fill className="object-cover" />
      </div>
    </a>
  );
}
