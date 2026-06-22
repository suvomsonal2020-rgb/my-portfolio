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
        <h1 className="text-xl font-bold tracking-wide font-mono text-cyan-400">
          &gt;_ Suvom
        </h1>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition duration-300 font-mono text-xs"
        >
          {dark ? "Light_Mode" : "Dark_Mode"}
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
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4 font-mono">
            // AI_ML_ASPIRANT & COMPETITIVE_PROGRAMMER
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            Suvom
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sonal Pati
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl opacity-70 max-w-2xl leading-relaxed">
            Turning curiosity into optimized models, and data into real-world 
            solutions through core machine learning, architectural systems, and competitive problem-solving.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="https://github.com/suvomsonal2020-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-mono text-sm font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Execute_GitHub
            </a>

            <a
              href="mailto:suvomsonal2020@gmail.com"
              className="px-8 py-3 rounded-xl border border-white/20 backdrop-blur-xl font-mono text-sm hover:bg-white/10 transition duration-300"
            >
              Contact_Core
            </a>
          </div>
        </motion.div>

        {/* RIGHT TECH WIDGET (Replaces Profile Pic for Futuristic UI) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center lg:flex-1 w-full max-w-md mx-auto"
        >
          <div className="absolute w-72 h-72 md:w-[26rem] md:h-[26rem] bg-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute w-60 h-60 md:w-[22rem] md:h-[22rem] bg-purple-500/10 blur-3xl rounded-full animate-ping [animation-duration:4s]"></div>

          <div className="relative w-full aspect-square backdrop-blur-2xl bg-black/40 border border-cyan-500/20 rounded-3xl p-6 shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500"></div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4 text-xs tracking-widest text-cyan-400/70 font-mono">
              <span>SYS_STATUS: ACTIVE</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-4 py-6">
              <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-dashed border-cyan-500/30 rounded-full flex items-center justify-center relative p-4 animate-[spin_20s_linear_infinite]">
                <div className="w-full h-full border border-purple-500/40 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
                </div>
              </div>
              <div className="text-center font-mono space-y-1">
                <p className="text-sm font-bold tracking-wide text-white">AI / ML ENVIRONMENT</p>
                <p className="text-xs opacity-40">LATENCY: 12ms // CORE_INIT</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 font-mono text-[10px] opacity-30 tracking-wider truncate text-purple-400">
              01000011 01001111 01000100 01000101 // INIT_PORTFOLIO_SUCCESS
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ y: -5 }}
          className="border border-white/10 bg-white/5 backdrop-blur-xl p-10 rounded-3xl"
        >
          <h2 className="text-4xl font-bold mb-6 font-mono text-cyan-400">
            &gt;_ About Me
          </h2>

          <p className="opacity-70 leading-relaxed text-lg">
            I am a motivated student passionate about machine learning modeling architectures,
            dataset preprocessing pipelines, and algorithmic problem-solving. I believe in learning by building and
            consistently shipping production code to test theoretical foundations in real-world environments.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-28 px-6">
        <h2 className="text-4xl font-bold mb-14 text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Core Vectors
        </h2>

        <div className="flex justify-center gap-6 flex-wrap max-w-3xl mx-auto">
          {["Python", "Scikit-Learn", "Pandas", "Streamlit", "Data Structures", "Git / GitHub", "HTML & CSS"].map((s) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.08, y: -5 }}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 text-sm font-mono transition duration-300 text-cyan-300"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center tracking-wider uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
          Selected Deployments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Project 1: Student Performance Predictor */}
          <motion.div
            whileHover={{ scale: 1.01, y: -4 }}
            className="h-full border border-cyan-500/20 bg-black/40 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition duration-500 flex flex-col justify-between relative"
          >
            <div className="absolute top-0 right-12 w-12 h-[1px] bg-cyan-400/50"></div>
            
            <div className="flex-1 flex flex-col">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-black border border-white/10 relative p-1">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
                <img 
                  src="/student-performance.jpg" 
                  alt="Student Performance Predictor" 
                  className="w-full h-full object-cover object-top rounded-xl opacity-90 transition duration-300 filter brightness-[0.9] contrast-[1.1]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <h3 className="text-2xl font-mono font-bold text-cyan-400 tracking-wide">
                &gt; Student Performance Predictor
              </h3>

              <p className="opacity-70 mt-4 text-base leading-relaxed flex-1">
                Developed an end-to-end machine learning application that predicts student math scores using demographic and academic indicators. Built a preprocessing pipeline, trained a Random Forest Regression model using Scikit-learn, and deployed the application using Streamlit Cloud.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Pandas", "Scikit-learn", "Streamlit", "Joblib", "Git"].map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 rounded-md border border-cyan-500/30 bg-cyan-500/5 text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-4 border-t border-white/10">
              <a
                href="https://github.com/suvomsonal2020-rgb/my-portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-mono tracking-wide px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-sm hover:scale-[1.03] transition duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Code_Repo
              </a>
              <a
                href="https://studentperformancepredictor-szbc8jkagv69ukdrsxmjky.streamlit.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-mono tracking-wide px-4 py-3 rounded-xl border border-cyan-500/30 backdrop-blur-xl font-semibold text-sm hover:bg-cyan-500/10 text-cyan-400 transition duration-300"
              >
                Live_System
              </a>
            </div>
          </motion.div>

          {/* Project 2: Railway Management System (Futuristic Console Graphic View) */}
          <motion.div
            whileHover={{ scale: 1.01, y: -4 }}
            className="h-full border border-purple-500/20 bg-black/40 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition duration-500 flex flex-col justify-between relative"
          >
            <div className="absolute top-0 right-12 w-12 h-[1px] bg-purple-400/50"></div>

            <div className="flex-1 flex flex-col">
              <div className="w-full h-48 rounded-2xl mb-6 bg-black border border-purple-500/20 p-4 font-mono text-xs text-purple-400 overflow-hidden flex flex-col justify-between relative shadow-inner">
                <div className="absolute top-2 right-3 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                </div>
                
                <div className="space-y-1 text-purple-300/80">
                  <p className="text-cyan-400/70 text-[10px] opacity-50">// PYTHON CORE ENGINE V2.1</p>
                  <p>&gt; python railway_sys.py</p>
                  <p className="text-green-400/80">[OK] DB_FILE_HANDLER: Connected to records.dat</p>
                  <p className="text-purple-400/60">[SYS] Initializing ticket booking matrix...</p>
                  <p className="animate-pulse text-white/90">&gt; Enter Choice: [1] Book Ticket _</p>
                </div>
                <div className="text-[10px] text-purple-500/50 border-t border-purple-500/10 pt-2 flex justify-between">
                  <span>MEM_LOAD: 4.1MB</span>
                  <span>THREADS: ACTIVE</span>
                </div>
              </div>

              <h3 className="text-2xl font-mono font-bold text-purple-400 tracking-wide">
                &gt; Railway Management System
              </h3>

              <p className="opacity-70 mt-4 text-base leading-relaxed flex-1">
                Simulates railway ticket booking with structured logic and file handling while improving understanding of real-world software flow.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "File Handling", "Logic Building", "Data Streams"].map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 rounded-md border border-purple-500/30 bg-purple-500/5 text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href="https://docs.google.com/document/d/19TAvniUwonVTeIZQRWYM_kSZZm5YXsdp44GdsrgbUjs/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-mono tracking-wide px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-700 font-semibold text-sm hover:scale-[1.02] transition duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="py-28 px-6">
        <h2 className="text-4xl font-bold mb-14 text-center font-mono">
          System Profiles
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

      {/* Certifications Section */}
      <section className="py-28 px-6">
        <h2 className="text-4xl font-bold mb-14 text-center font-mono">
          Verified Keys
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-500"
          >
            <h3 className="text-xl font-mono font-semibold text-cyan-400">
              &gt;_ CSS (Basic) - HackerRank
            </h3>
            <a
              href="https://www.hackerrank.com/certificates/980de527b995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-mono text-cyan-400 hover:underline"
            >
              [Decrypt Certificate Link]
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-500"
          >
            <h3 className="text-xl font-mono font-semibold text-purple-400">
              &gt;_ Python (Basic) - HackerRank
            </h3>
            <a
              href="https://www.hackerrank.com/certificates/bf0e590d54a3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-mono text-purple-400 hover:underline"
            >
              [Decrypt Certificate Link]
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 px-6 text-center font-mono">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          Terminal_Comm
        </h2>
        <div className="space-y-4 text-lg opacity-70">
          <p>suvomsonal2020@gmail.com</p>
          <p>+91 9999328867</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center backdrop-blur-xl bg-white/5 font-mono text-xs">
        <p className="opacity-60">
          © {new Date().getFullYear()} Suvom Sonal Pati // SYSTEM_SECURE
        </p>
      </footer>
    </div>
  );
}