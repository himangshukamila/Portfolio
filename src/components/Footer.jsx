import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  Code2,
  ArrowUp 
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/himangshukamila",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aaditya-kamila",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },

    {
      icon: Mail,
      href: "mailto:himangshukamila8@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-lighter border-t border-dark-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-10 text-9xl font-bold text-neon-blue">{'< />'}</div>
        <div className="absolute top-0 right-10 text-9xl font-bold text-neon-purple">{'{ }'}</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand section */}
          <div>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-8 h-8 text-neon-blue" />
              <span className="text-2xl font-bold gradient-text font-mono">
                &lt;HK /&gt;
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Frontend Developer passionate about creating beautiful, functional, 
              and user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <motion.span
                      className="text-gray-400 hover:text-neon-blue transition-colors flex items-center space-x-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-0 h-px bg-neon-blue group-hover:w-4 transition-all"></span>
                      <span>{link.name}</span>
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:himangshu.kamila@example.com"
                  className="hover:text-neon-blue transition-colors break-all"
                >
                  himangshukamila8gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-neon-blue">📍</span>
                <span>Jamshedpur,Jharkhand, India</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-neon-blue">⏰</span>
                <span>Available for freelance work</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>© {currentYear} Himangshu Kamila. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of</span>
              <span className="text-neon-blue">{'{ code }'}</span>
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-neon-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-neon-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white shadow-lg z-30"
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer
