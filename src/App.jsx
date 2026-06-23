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

      {/* Projects */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: Student Performance Predictor */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-black/40 border border-white/10 flex items-center justify-center p-2">
               <img 
                 src="/student-performance.jpg" 
                 alt="Student Performance Predictor" 
                 className="w-full h-full object-contain" // Changed from object-cover
                 onError={(e) => {
                  e.target.style.display = 'none';
                 }}
               />
             </div>

              <h3 className="text-2xl font-bold text-cyan-400">
                Student Performance Predictor
              </h3>

              <p className="opacity-70 mt-4 text-base leading-relaxed">
                Developed an end-to-end machine learning application that predicts student math scores using demographic and academic indicators. Built a preprocessing pipeline, trained a Random Forest Regression model using Scikit-learn, and deployed the application using Streamlit Cloud.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Pandas", "Scikit-learn", "Streamlit", "Joblib", "Git"].map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/suvomsonal2020-rgb/StudentPerformancePredictor" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-sm hover:scale-105 transition duration-300"
              >
                GitHub Repo
              </a>
              <a
                href="https://studentperformancepredictor-szbc8jkagv69ukdrsxmjky.streamlit.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 rounded-full border border-white/20 backdrop-blur-xl font-semibold text-sm hover:bg-white/10 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

          {/* Project 2: Retro Snake Game */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] transition duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10 flex items-center justify-center">
                <img 
                  src="/snake-game.jpg" 
                  alt="Retro Snake Game" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-green-400">
                Retro Snake Game
              </h3>

              <p className="opacity-70 mt-4 text-base leading-relaxed">
                Built an interactive 2D Snake game implementing key logic structures like game loops, direction-state updates, and dynamic coordinate arrays to track snake body growth and random food item generation.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Logic Building", "Data Structures", "Game Loop"].map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/suvomsonal2020-rgb/my-portfolio/blob/main/snake_ai.py"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 font-semibold text-sm hover:scale-105 transition duration-300"
              >
                View Python Code
              </a>
            </div>
          </motion.div>

          {/* Project 3: Interactive Tic Tac Toe */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_40px_rgba(234,179,8,0.25)] transition duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10 flex items-center justify-center">
                <img 
                  src="/tic_tac_toe.jpg" 
                  alt="Interactive Tic Tac Toe" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-yellow-400">
                Interactive Tic Tac Toe
              </h3>

              <p className="opacity-70 mt-4 text-base leading-relaxed">
                Developed a responsive Tic-Tac-Toe application focusing on structural condition evaluations. Programmed win-condition matrix checks, turn-alternation algorithms, and robust draw-state processing logic.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Matrix Logic", "Algorithms", "Condition Mapping"].map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/suvomsonal2020-rgb/my-portfolio/blob/main/tic_tac_toe.py"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 font-semibold text-sm hover:scale-105 transition duration-300"
              >
                View Python Code
              </a>
            </div>
          </motion.div>

          {/* Project 4: Railway Management System */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition duration-500 flex flex-col justify-between"
          >
            <div>
              {/* Futuristic Terminal Window Simulation */}
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-black/80 border border-purple-500/30 p-4 font-mono text-[10px] md:text-xs text-purple-400 relative shadow-[inner_0_0_20px_rgba(168,85,247,0.15)] flex flex-col justify-between select-none">
                {/* Terminal Header */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 border-b border-white/10 flex items-center px-3 justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
                  </div>
                  <span className="text-[9px] opacity-40 uppercase tracking-widest text-cyan-400">core_system_v4.2</span>
                </div>

                {/* Simulated Terminal Lines */}
                <div className="mt-4 space-y-1 flex-1 flex flex-col justify-end opacity-80">
                  <div className="text-cyan-500/70 text-[9px] font-sans">Last login: {new Date().toLocaleDateString()} on ttys001</div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 animate-pulse">⚡</span>
                    <span className="text-white/40">~</span>
                    <span className="text-green-400">python3 railway_mgmt.py</span>
                  </div>
                  <div className="text-purple-300/60">[SYSTEM] Initializing secure data streams...</div>
                  <div className="text-cyan-400/80">[DB] Connected to global_transit_matrix.db</div>
                  <div className="text-emerald-400 flex justify-between">
                    <span>&gt; Syncing passenger_manifest_blocks...</span>
                    <span className="text-white/40">[OK]</span>
                  </div>
                  <div className="text-purple-400 animate-pulse flex items-center gap-1">
                    <span>&gt; Fetching PNR schedules</span>
                    <span className="w-1 h-3 bg-purple-400 inline-block animate-[ping_1s_infinite]"></span>
                  </div>
                </div>

                {/* Scanline Overlay Grid Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent pointer-events-none bg-[length:100%_4px]"></div>
              </div>

              <h3 className="text-2xl font-bold text-purple-400">
                Railway Management System
              </h3>

              <p className="opacity-70 mt-4 text-base leading-relaxed">
                Simulates railway ticket booking with structured logic and file handling while improving understanding of real-world software flow.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "File Handling", "Logic Building"].map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://docs.google.com/document/d/19TAvniUwonVTeIZQRWYM_kSZZm5YXsdp44GdsrgbUjs/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-sm hover:scale-105 transition duration-300"
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

          <motion.div
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-500"
          >
            <h3 className="text-xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              &gt;_ Problem Solving (Basic) - HackerRank
            </h3>
            <a
              href="https://www.hackerrank.com/certificates/17a0b4f1318b" // 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-mono text-cyan-400/80 hover:text-cyan-400 hover:underline"
            >
              [Decrypt Certificate Link]
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-500"
          >
            <h3 className="text-xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              &gt;_ Complete AI & Machine Learning Masterclass - Udemy
            </h3>
            <p className={`text-xs font-mono mt-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Verification ID: UC-a47956dd-6989-4654-88f8-44ee12e3f0c0
            </p>
            <a
              href="https://www.udemy.com/certificate/UC-a47956dd-6989-4654-88f8-44ee12e3f0c0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-mono text-purple-400 hover:text-purple-300 hover:underline"
            >
              [Decrypt Certificate Link]
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 px-6 text-center font-mono">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Terminal_Comm
        </h2>

        {/* Terminal Card Window */}
        <div 
          className={
            dark 
              ? "w-full max-w-2xl mx-auto text-sm bg-black/60 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.1)] overflow-hidden backdrop-blur-xl text-left"
              : "w-full max-w-2xl mx-auto text-sm bg-white/70 border border-slate-200 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl text-left"
          }
        >
          {/* Terminal Title Bar */}
          <div className={`flex items-center justify-between px-4 py-3 border-b ${dark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'}`}>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className={`text-[10px] tracking-wider uppercase select-none ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              bash — contact.json
            </span>
            <div className="w-10"></div>
          </div>

          {/* Terminal Workspace */}
          <div className="p-6 space-y-4">
            {/* Active Command Input Line */}
            <div className="flex items-center space-x-2 flex-wrap text-xs md:text-sm">
              <span className="text-cyan-400 font-bold">suvom@system</span>
              <span className={dark ? "text-white/40" : "text-slate-400"}>~</span>
              <span className="text-purple-400">cat</span>
              <span className={dark ? "text-white" : "text-slate-800"}>contact.json</span>
            </div>

            {/* Static JSON Stream Output */}
            <pre 
              className={
                dark
                  ? "pl-4 text-cyan-300/90 border-l border-white/10 select-all overflow-x-auto whitespace-pre text-xs md:text-sm bg-white/[0.02] py-3 rounded-lg font-mono"
                  : "pl-4 text-blue-600 border-l border-slate-200 select-all overflow-x-auto whitespace-pre text-xs md:text-sm bg-slate-50 py-3 rounded-lg font-mono"
              }
            >
{`{
  "identity": "Suvom Sonal Pati",
  "environment": "AI / ML Aspirant",
  "status": "Active // Seeking Internships 2026",
  "vectors": {
    "email": "suvomsonal2020@gmail.com",
    "comms": "+91 9999328867"
  }
}`}
            </pre>

            {/* Terminal Actions Line */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2 text-xs md:text-sm">
                <span className="text-cyan-400 font-bold">suvom@system</span>
                <span className={dark ? "text-white/40" : "text-slate-400"}>~</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("suvomsonal2020@gmail.com");
                    alert("Email copied system channel!");
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    dark 
                      ? 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                  }`}
                >
                  📥 Copy_Email
                </button>

                <a 
                  href="mailto:suvomsonal2020@gmail.com"
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-1 ${
                    dark 
                      ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20' 
                      : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100'
                  }`}
                >
                  ↗ Open_Mail
                </a>
              </div>
            </div>

          </div>
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