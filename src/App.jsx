
import { motion } from "framer-motion";
import { FaGithub, FaHackerrank, FaKaggle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={
        dark
          ? "bg-black text-white overflow-hidden transition duration-500"
          : "bg-[#f5f7ff] text-black overflow-hidden transition duration-500"
      }
    >
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-xl bg-black/20 border-b border-white/10 z-50">
        <h1 className="text-xl font-bold tracking-wide">
          Suvom
        </h1>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition duration-300"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 pt-32 pb-16 gap-16 overflow-hidden">

        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/20 blur-3xl rounded-full"></div>
        </div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10"
        >

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Aspiring Software Developer
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            Suvom
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sonal Pati
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl opacity-70 max-w-2xl leading-relaxed">
            Turning curiosity into code, and code into real-world
            solutions through creativity, problem solving, and continuous learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">

            <a
              href="https://github.com/suvomsonal2020-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              GitHub
            </a>

            <a
              href="mailto:suvomsonal2020@gmail.com"
              className="px-8 py-3 rounded-full border border-white/20 backdrop-blur-xl hover:bg-white/10 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >

          <div className="absolute w-72 h-72 md:w-[28rem] md:h-[28rem] bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div className="absolute w-80 h-80 md:w-[32rem] md:h-[32rem] border border-cyan-400/20 rounded-full animate-pulse"></div>

          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-4 shadow-[0_0_50px_rgba(34,211,238,0.25)]">

            <img
              src="/profile.jpg"
              alt="Suvom"
              className="w-72 h-72 md:w-[26rem] md:h-[26rem] object-cover rounded-[1.5rem] hover:scale-[1.02] transition duration-500"
            />

          </div>

        </motion.div>

      </section>

      {/* About */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ y: -5 }}
          className="border border-white/10 bg-white/5 backdrop-blur-xl p-10 rounded-3xl"
        >
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="opacity-70 leading-relaxed text-lg">
            I am a motivated student passionate about software development
            and problem-solving. I believe in learning by building and
            consistently improving through hands-on projects.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-28 px-6">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Skills
        </h2>

        <div className="flex justify-center gap-6 flex-wrap max-w-3xl mx-auto">
          {["Python (Basic)", "HTML", "CSS"].map((s) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.08, y: -5 }}
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 transition duration-300"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Projects
        </h2>

        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="border border-white/10 bg-white/5 backdrop-blur-xl p-10 rounded-3xl hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition duration-500"
        >
          <h3 className="text-2xl font-bold">
            Railway Management System
          </h3>

          <p className="opacity-70 mt-5 text-lg leading-relaxed">
            Simulates railway ticket booking with structured logic and
            file handling while improving understanding of real-world
            software flow.
          </p>

          <ul className="text-sm opacity-60 mt-6 list-disc ml-5 space-y-2">
            <li>Learned file handling and structured programming</li>
            <li>Improved understanding of real-world system flow</li>
          </ul>

          <a
            href="https://docs.google.com/document/d/19TAvniUwonVTeIZQRWYM_kSZZm5YXsdp44GdsrgbUjs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold hover:scale-105 transition duration-300"
          >
            View Project
          </a>
        </motion.div>
      </section>

      {/* Coding Profiles */}
      <section className="py-28 px-6">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Coding Profiles
        </h2>

        <div className="flex justify-center gap-10 flex-wrap text-5xl">

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.hackerrank.com/profile/suvomsonal2020"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          >
            <FaHackerrank />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://leetcode.com/u/suvomsonal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
          >
            <SiLeetcode />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.kaggle.com/suvomsonalpati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          >
            <FaKaggle />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/suvomsonal2020-rgb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
          >
            <FaGithub />
          </motion.a>

        </div>
      </section>

      {/* Certifications */}
      <section className="py-28 px-6">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Certifications
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">

          <motion.div
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-500"
          >
            <h3 className="text-xl font-semibold">
              CSS (Basic) - HackerRank
            </h3>

            <a
              href="https://www.hackerrank.com/certificates/980de527b995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-400"
            >
              View Certificate
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-500"
          >
            <h3 className="text-xl font-semibold">
              Python (Basic) - HackerRank
            </h3>

            <a
              href="https://www.hackerrank.com/certificates/bf0e590d54a3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-400"
            >
              View Certificate
            </a>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <div className="space-y-4 text-lg opacity-70">
          <p>suvomsonal2020@gmail.com</p>
          <p>+91 9999328867</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center backdrop-blur-xl bg-white/5">
        <p className="opacity-60 text-sm">
          © {new Date().getFullYear()} Suvom Sonal Pati. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

