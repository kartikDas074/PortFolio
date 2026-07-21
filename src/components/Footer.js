"use client";

import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Navbar";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative z-10 pt-20 pb-12 border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#hero" className="inline-block text-2xl font-extrabold tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Kartik Das
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Full Stack MERN Developer & Computer Science Engineer specializing in scalable web applications, REST APIs, and modern AI integrations.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:kartikdas209774@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-cyan-300 glass-card border border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kartikdas209774@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Skills & Tech
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Profiles & Coding
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/kartikDas074"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full glass-card border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/meet-kartikdas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full glass-card border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/kartiksk_sk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2 rounded-full glass-card border border-slate-800 text-slate-300 hover:border-cyan-500/40 transition-all flex items-center justify-center"
              >
                <div className="w-4 h-4 relative rounded-full overflow-hidden">
                  <Image src="/leetcode.jpg" alt="LeetCode" fill className="object-cover" />
                </div>
              </a>
              <a
                href="https://codeforces.com/profile/Rdr_Kartik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces"
                className="p-2 rounded-full glass-card border border-slate-800 text-slate-300 hover:border-cyan-500/40 transition-all flex items-center justify-center"
              >
                <div className="w-4 h-4 relative rounded-full overflow-hidden">
                  <Image src="/codeforces.jpg" alt="Codeforces" fill className="object-cover" />
                </div>
              </a>
              <a
                href="https://www.codechef.com/users/kartiksk22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef"
                className="p-2 rounded-full glass-card border border-slate-800 text-slate-300 hover:border-cyan-500/40 transition-all flex items-center justify-center"
              >
                <div className="w-4 h-4 relative rounded-full overflow-hidden">
                  <Image src="/codechef.jpg" alt="CodeChef" fill className="object-cover" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Kartik Das. Designed & Built with Next.js & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
