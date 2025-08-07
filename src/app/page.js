'use client';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { motion } from 'framer-motion';
import { contact } from '@/data/contact';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#0a192f]">
      {/* Navigation */}
      <nav className="fixed w-full flex justify-between items-center p-6 z-50">
        <div className="text-[#64ffda] font-bold text-xl">Mazeedah O</div>
        <div className="flex gap-6">
          <Link href="#home" className="text-[#e6f1ff] hover:text-[#64ffda]">Home</Link>
          <Link href="#about" className="text-[#e6f1ff] hover:text-[#64ffda]">About</Link>
          <Link href="#skills" className="text-[#e6f1ff] hover:text-[#64ffda]">Skills</Link>
          <Link href="#projects" className="text-[#e6f1ff] hover:text-[#64ffda]">Projects</Link>
          <Link href="#contact" className="text-[#e6f1ff] hover:text-[#64ffda]">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-8 py-20">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-[#64ffda]">
            Hi, I'm Mazeedah O
          </h1>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-xl text-white font-bold tracking-tight">
            Data Analyst | Business Intelligence Analyst | Accountant | Customer Experience Support
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto px-6 py-8 bg-[#112240]/70 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-[#e6f1ff] text-center">
            I'm a data professional passionate about turning numbers into actionable insights. 
            With expertise in analytics, accounting, and customer experience, I bridge the gap 
            between data and business decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            className="bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-lg font-medium text-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#52e3d4" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center text-[#64ffda]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-[#112240] rounded-xl p-6 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3 group-hover:text-[#64ffda] transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-[#e6f1ff] mb-2">{skill.name}</h3>
              <span className="text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded-full">
                {skill.type}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center text-[#64ffda]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#112240] rounded-lg p-6 hover:-translate-y-2 transition-transform"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#e6f1ff]">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-[#52e3d4]"
                  aria-label={`View ${project.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <p className="text-[#a8b2d1] mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="text-xs text-[#64ffda]">{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
  <motion.h2
    className="text-3xl font-bold mb-16 text-center text-[#64ffda]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Get In Touch
  </motion.h2>
  
  <motion.div
    className="bg-[#112240] rounded-lg p-8 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-[#e6f1ff] mb-8 text-lg">
      Feel free to reach out for collaborations or just to say hi!
    </p>

    {/* Social Links with Email Icon */}
    <div className="flex flex-wrap justify-center gap-6">
      {/* Email Icon - Now properly clickable */}
      <motion.button
        className="flex flex-col items-center"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = `mailto:${contact.email}`}
        aria-label="Send email"
      >
        <svg 
          className="w-10 h-10 text-[#64ffda] hover:text-[#52e3d4] transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="text-xs text-[#a8b2d1] mt-2">Email</span>
      </motion.button>

      {/* Other Social Links */}
      {contact.socials.filter(social => social.name !== "Email").map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
          whileHover={{ y: -3 }}
          aria-label={`Visit my ${social.name}`}
        >
          {social.name === "GitHub" && (
            <svg className="w-10 h-10 text-[#64ffda] hover:text-[#52e3d4] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          )}
          {social.name === "LinkedIn" && (
            <svg className="w-10 h-10 text-[#64ffda] hover:text-[#52e3d4] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )}
          {social.name === "Medium" && (
            <svg className="w-10 h-10 text-[#64ffda] hover:text-[#52e3d4] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.538v-10.91l-5.461 13.89h-.738l-6.275-13.89v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
            </svg>
          )}
          <span className="text-xs text-[#a8b2d1] mt-2">{social.name}</span>
        </motion.a>
      ))}
    </div>
  </motion.div>
</section>
</main>
);
}
