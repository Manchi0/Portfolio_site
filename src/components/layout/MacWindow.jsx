import { motion } from 'framer-motion'

export default function MacWindow({
  children,
  title = 'Terminal',
  className = '',
  showButtons = true,
  variant = 'default'
}) {
  const variants = {
    default: 'bg-surface',
    terminal: 'bg-surface/95 backdrop-blur-sm',
  }

  return (
    <motion.div
      className={`rounded-xl border border-white/10 overflow-hidden shadow-2xl ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-light/50 border-b border-white/5">
        {showButtons && (
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-traffic-red" />
            <div className="w-3 h-3 rounded-full bg-traffic-yellow" />
            <div className="w-3 h-3 rounded-full bg-traffic-green" />
          </div>
        )}
        <span className="flex-1 text-center text-sm text-text-secondary font-mono">
          {title}
        </span>
        {showButtons && <div className="w-14" />} {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  )
}
