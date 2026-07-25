import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, CheckCircle2, Clock, ArrowLeft, Cpu, Sparkles, Layers, BookOpen } from "lucide-react";
import { projects } from "@/constants/projectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Force static rendering for all known project paths
export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex-grow space-y-12">
        {/* Back Navigation */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider block">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 pt-1">
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

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-350 hover:text-white bg-slate-900 border border-slate-850 hover:border-slate-700 transition-all"
            >
              <span>GitHub (Client)</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Site</span>
            </a>
          </div>
        </div>

        {/* Visual Cover & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 relative aspect-16/10 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.details.overview}
            </p>
          </div>
        </div>

        {/* Tech Stack Split */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
            <Layers className="w-5 h-5" />
            <span>Technology Stack</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(project.details.techStack).map(([layer, list]) => (
              <div key={layer} className="p-5 rounded-2xl bg-slate-950/45 border border-slate-850/60 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
                  {layer}
                </span>
                <div className="flex flex-wrap gap-2">
                  {list.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-950/45 border border-slate-850/60 space-y-4">
            <h4 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span>Architecture & Design</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.details.architecture}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/45 border border-slate-850/60 space-y-4">
            <h4 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Key Features</span>
            </h4>
            <ul className="space-y-3">
              {project.details.features.map((feature, i) => (
                <li key={i} className="text-slate-350 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Challenge Spotlight */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/25 to-indigo-950/25 border border-cyan-500/20 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-md sm:text-lg">
            <Cpu className="w-5 h-5 animate-pulse" />
            <span>Technical Spotlight: {project.details.challenge.feature}</span>
          </div>
          <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-200">The Challenge:</strong> {project.details.challenge.description}
            </p>
            <p>
              <strong className="text-cyan-300 font-semibold">How it was Solved:</strong> {project.details.challenge.solution}
            </p>
          </div>
        </div>

        {/* General Challenges & Future Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-850 pt-8">
          <div className="space-y-3">
            <h4 className="text-md sm:text-lg font-bold text-slate-200">Challenges Faced During Development</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {project.details.generalChallenges}
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-md sm:text-lg font-bold text-slate-200">Potential Improvements & Future Plans</h4>
            <ul className="space-y-2">
              {project.details.futurePlans.map((plan, i) => (
                <li key={i} className="text-slate-400 text-sm flex items-start gap-2.5 leading-relaxed">
                  <span className="text-cyan-450 font-bold">•</span>
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
