import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Code2, 
  Palette, 
  Wrench, 
  CheckCircle2 
} from 'lucide-react'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frameworks', label: 'Frameworks', icon: Palette },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ]

  const skillsData = {
    languages: [
      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'HTML5', level: 98, color: 'from-orange-400 to-orange-600' },
      { name: 'CSS3', level: 95, color: 'from-blue-500 to-blue-700' },
      { name: 'Python', level: 75, color: 'from-green-400 to-green-600' },
      { name: 'SQL', level: 80, color: 'from-purple-400 to-purple-600' },
    ],
    frameworks: [
      { name: 'React', level: 95, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900' },
      { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-teal-600' },
      { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-800' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 92, color: 'from-orange-500 to-orange-700' },
      { name: 'VS Code', level: 98, color: 'from-blue-500 to-blue-700' },
      { name: 'Figma', level: 85, color: 'from-purple-400 to-purple-600' },
      { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'Webpack', level: 80, color: 'from-blue-600 to-blue-800' },
      { name: 'Jest', level: 78, color: 'from-red-500 to-red-700' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 bg-dark-lighter relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-9xl font-bold text-neon-purple">{'{ }'}</div>
        <div className="absolute bottom-20 left-10 text-9xl font-bold text-neon-blue">{'< />'}</div>
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                    : 'glass text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl hover:border-neon-blue/50 transition-all"
              >
                {/* Skill name and percentage */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-neon-green" />
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-neon-blue font-bold">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="relative w-full h-3 bg-dark-border rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
                  >
                    {/* Glow effect */}
                    <div className="absolute right-0 top-0 w-4 h-full bg-white opacity-50 blur-sm"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass p-8 rounded-2xl text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-dark-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-dark-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
