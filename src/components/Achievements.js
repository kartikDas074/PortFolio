"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Award, Star, ExternalLink } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Codeforces Specialist",
      category: "Competitive Programming",
      detailLabel: "Rating & Rank",
      value: "1535 Rating • Specialist",
      description: "Active competitive programmer regularly participating in Codeforces contests.",
      image: "/codeforces.jpg",
      link: "https://codeforces.com/profile/Rdr_Kartik",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
      title: "CodeChef 3★ (3 Star)",
      category: "Competitive Programming",
      detailLabel: "Rating & Rank",
      value: "1673 Rating • 3★ Star",
      description: "Achieved 3 Star rating solving algorithmic problems in long & starters contests.",
      image: "/codechef.jpg",
      link: "https://www.codechef.com/users/kartiksk22",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    {
      title: "BUET IUPC 2026",
      category: "Inter-University Contest",
      detailLabel: "Contest Status",
      value: "Participant",
      description: "Represented university in prestigious BUET Inter University Programming Contest 2026.",
      fallbackIcon: <Trophy className="w-6 h-6 text-cyan-400" />,
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    },
    {
      title: "DUET IUPC 2025",
      category: "Inter-University Contest",
      detailLabel: "Contest Status",
      value: "Participant",
      description: "Participated in national level DUET Inter University Programming Contest 2025.",
      fallbackIcon: <Award className="w-6 h-6 text-purple-400" />,
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            Honors & Competitions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Recognitions in competitive programming, algorithmic contests, and inter-university programming competitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {item.image ? (
                      <div className="w-10 h-10 relative rounded-xl overflow-hidden border border-slate-700 shrink-0 group-hover:scale-105 transition-transform">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0 group-hover:scale-105 transition-transform">
                        {item.fallbackIcon}
                      </div>
                    )}
                    <div>
                      <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                      aria-label={`${item.title} Profile Link`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {item.detailLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-100 mt-0.5 block">
                    {item.value}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
