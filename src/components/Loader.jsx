import { motion } from 'framer-motion'
import { Code2, Terminal, Braces } from 'lucide-react'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #00d9ff 1px, transparent 1px),
                           linear-gradient(to bottom, #00d9ff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Rotating code icons */}
        <div className="relative w-40 h-40 mb-8">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Code2 className="w-16 h-16 text-neon-blue" />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute top-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Terminal className="w-10 h-10 text-neon-purple" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <Braces className="w-10 h-10 text-neon-pink" />
            </motion.div>
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text font-mono">
            Initializing Portfolio
          </h2>
          
          {/* Code-like loading bar */}
          <div className="w-64 h-2 bg-dark-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>
          
          {/* Loading percentage */}
          <motion.p
            className="mt-4 text-sm text-gray-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              key="loading"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading assets...
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Floating code symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {['{', '}', '<', '>', '/', '*', '+', '='].map((symbol, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl font-mono text-neon-blue opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
