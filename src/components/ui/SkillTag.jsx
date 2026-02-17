import { motion } from 'framer-motion'

export default function SkillTag({ skill, index }) {
  return (
    <motion.span
      className="px-3 py-2 bg-surface border border-white/10 text-text-secondary text-sm font-mono rounded-lg hover:border-accent-blue/50 hover:text-accent-blue transition-colors cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      whileHover={{ y: -2 }}
    >
      {skill}
    </motion.span>
  )
}
