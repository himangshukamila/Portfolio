import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Award, Coffee, BookOpen, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Award, value: '15+', label: 'Awards Won' },
  ]

  const highlights = [
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks, always staying ahead of the curve.'
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code is my top priority.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Constantly upgrading my skills through courses, books, and hands-on projects.'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 text-9xl font-bold text-neon-blue">&lt;/&gt;</div>
        <div className="absolute bottom-1/4 right-10 text-9xl font-bold text-neon-purple">{ }</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Image and bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile card */}
              <div className="glass p-8 rounded-2xl">
                <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl overflow-hidden relative">
                  {/* Placeholder for profile image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple opacity-50"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-32 h-32 text-white" />
                  </div>
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, #00d9ff, #a855f7, #ec4899, #00d9ff)',
                      backgroundSize: '300% 300%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                </div>

                {/* Quick info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 glass rounded-lg">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white font-semibold">Himangshu Kamila</span>
                  </div>
                  <div className="flex items-center justify-between p-3 glass rounded-lg">
                    <span className="text-gray-400">Role:</span>
                    <span className="text-neon-blue font-semibold">Frontend Developer</span>
                  </div>
                  <div className="flex items-center justify-between p-3 glass rounded-lg">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white font-semibold">3+ Years</span>
                  </div>
                  <div className="flex items-center justify-between p-3 glass rounded-lg">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white font-semibold">India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hey there! I'm <span className="text-neon-blue font-semibold">Himangshu Kamila</span>, 
                a passionate Frontend Developer with a love for creating beautiful, intuitive, and 
                performant web applications.
              </p>
              
              <p>
                With over <span className="text-neon-purple font-semibold">3 years of experience</span> in 
                the web development industry, I've had the privilege of working on diverse projects ranging 
                from small business websites to large-scale enterprise applications.
              </p>
              
              <p>
                My journey in web development started with HTML and CSS, and has evolved into mastering 
                modern frameworks like <span className="text-neon-blue font-semibold">React</span>, 
                <span className="text-neon-purple font-semibold"> Vue</span>, and 
                <span className="text-neon-pink font-semibold"> Angular</span>. I'm constantly learning 
                and experimenting with new technologies to stay at the forefront of web development.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                projects, or sharing my knowledge with the developer community through blog posts and tutorials.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 mt-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    className="glass p-4 rounded-lg flex items-start space-x-4 hover:border-neon-blue/50 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{highlight.title}</h3>
                      <p className="text-gray-400 text-sm">{highlight.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl text-center group hover:border-neon-blue/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-neon-blue group-hover:text-neon-purple transition-colors" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
