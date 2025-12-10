import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/himangshukamila",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "www.linkedin.com/in/aaditya-kamila",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:himangshukamila8@gmail.com", label: "Email" },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #00d9ff 1px, transparent 1px),
                             linear-gradient(to bottom, #00d9ff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-blue rounded-full filter blur-[100px] opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple rounded-full filter blur-[100px] opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neon-blue font-mono text-lg mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Himangshu{' '}
              <span className="gradient-text">Kamila</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8 h-12"
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Web Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              I craft beautiful, responsive, and user-friendly web applications 
              with modern technologies. Let's build something amazing together!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link to="projects" smooth={true} offset={-70} duration={200}>
                <motion.button
                  className="btn-primary px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg shadow-lg flex items-center space-x-2"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Projects</span>
                </motion.button>
              </Link>

              <motion.a
                href="/resume.pdf"
                download
                className="px-8 py-3 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg flex items-center space-x-2 hover:bg-neon-blue hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-blue transition-colors"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right side - Coding illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass p-8 rounded-2xl">
              {/* Code editor mockup */}
              <div className="space-y-4">
                {/* Editor header */}
                <div className="flex items-center space-x-2 pb-4 border-b border-dark-border">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-gray-500 font-mono">portfolio.jsx</span>
                </div>

                {/* Code lines */}
                <motion.div 
                  className="font-mono text-sm space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex">
                    <span className="text-gray-600 mr-4">1</span>
                    <span className="text-neon-purple">const</span>
                    <span className="text-white ml-2">developer</span>
                    <span className="text-gray-400 ml-2">=</span>
                    <span className="text-white ml-2">{'{'}</span>
                  </div>
                  <div className="flex ml-8">
                    <span className="text-gray-600 mr-4">2</span>
                    <span className="text-neon-blue">name:</span>
                    <span className="text-neon-green ml-2">'Himangshu Kamila'</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="flex ml-8">
                    <span className="text-gray-600 mr-4">3</span>
                    <span className="text-neon-blue">role:</span>
                    <span className="text-neon-green ml-2">'Frontend Developer'</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="flex ml-8">
                    <span className="text-gray-600 mr-4">4</span>
                    <span className="text-neon-blue">skills:</span>
                    <span className="text-white ml-2">{'['}</span>
                    <span className="text-neon-green">'React'</span>
                    <span className="text-white">,</span>
                    <span className="text-neon-green ml-2">'JS'</span>
                    <span className="text-white">{'...],'}</span>
                  </div>
                  <div className="flex ml-8">
                    <span className="text-gray-600 mr-4">5</span>
                    <span className="text-neon-blue">passion:</span>
                    <span className="text-neon-green ml-2">'Building cool stuff'</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 mr-4">6</span>
                    <span className="text-white">{'}'}</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg opacity-50"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-purple rounded-lg opacity-50"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} offset={-70} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors"
            >
              <span className="text-sm font-mono mb-2">Scroll Down</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
