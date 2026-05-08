import { motion } from "framer-motion";
import { FaGithub, FaHackerrank, FaKaggle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-opacity-30 z-50">
        <h1 className="font-bold text-lg">Suvom</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 border rounded"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </nav>

      {/* Hero Split Layout */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10">
        {/* Left - Text */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Suvom Sonal Pati
          </motion.h1>

          <p className="text-lg opacity-70">
            Turning curiosity into code, and code into real-world solutions.
          </p>

          <p className="text-sm opacity-50">
            Aspiring Software Developer | Problem Solver
          </p>
        </div>

        {/* Right - Photo */}
        <motion.img
          src="/profile.jpg"
          alt="Suvom"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-500 shadow-xl"
        />
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="opacity-70 leading-relaxed">
          I am a motivated student passionate about software development and problem-solving. I believe in learning by building and consistently improving through hands-on projects.
        </p>
      </section>

      {/* Skills */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>
        <div className="flex justify-center gap-4 flex-wrap max-w-2xl mx-auto">
          {["Python (Basic)", "HTML", "CSS"].map((s, index) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={s}
              className="px-5 py-2 border rounded-full inline-block m-1"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="border p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold">Railway Management System</h3>
          <p className="opacity-70 mt-3">
            Simulates railway ticket booking with structured logic and file handling.
          </p>
          <ul className="text-sm opacity-60 mt-4 list-disc ml-5 space-y-1">
            <li>Learned file handling and structured programming</li>
            <li>Improved understanding of real-world system flow</li>
          </ul>
          <a
            href="https://docs.google.com/document/d/19TAvniUwonVTeIZQRWYM_kSZZm5YXsdp44GdsrgbUjs/edit?usp=sharing"
            className="text-blue-400 mt-4 inline-block"
          >
            View Project →
          </a>
        </motion.div>
      </section>

      {/* Coding Profiles */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Coding Profiles</h2>

        <div className="flex justify-center gap-10 flex-wrap text-5xl">
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.hackerrank.com/profile/suvomsonal2020"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaHackerrank />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://leetcode.com/u/suvomsonal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <SiLeetcode />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.kaggle.com/suvomsonalpati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaKaggle />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/suvomsonal2020-rgb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </motion.a>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Certifications</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="border p-6 rounded-xl space-y-2">
            <h3>CSS (Basic) - HackerRank</h3>
            <a href="https://www.hackerrank.com/certificates/980de527b995" className="text-blue-400 text-sm">View Certificate</a>
          </div>
          <div className="border p-6 rounded-xl space-y-2">
            <h3>Python (Basic) - HackerRank</h3>
            <a href="https://www.hackerrank.com/certificates/bf0e590d54a3" className="text-blue-400 text-sm">View Certificate</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 text-center space-y-2">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="opacity-70">suvomsonal2020@gmail.com</p>
        <p className="opacity-70">+91 9999328867</p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t mt-10">
        <p className="opacity-60 text-sm">
          © {new Date().getFullYear()} Suvom Sonal Pati. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
