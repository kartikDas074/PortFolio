import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kartik Das | Full Stack MERN Developer & AI Engineer",
  description:
    "Portfolio of Kartik Das - Computer Science & Engineering student specializing in full-stack MERN development, backend architecture, REST APIs, and AI integration.",
  keywords: [
    "Kartik Das",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AI Integration",
    "Competitive Programming",
  ],
  authors: [{ name: "Kartik Das" }],
  openGraph: {
    title: "Kartik Das | Full Stack MERN Developer & AI Engineer",
    description:
      "Full Stack MERN & AI Developer portfolio showcasing high-performance web applications, REST APIs, and competitive programming.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
