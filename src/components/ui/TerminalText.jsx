import { motion } from 'framer-motion'
import useTypewriter from '../../hooks/useTypewriter'

export default function TerminalText({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  className = '',
  onComplete
}) {
  const { displayText, isComplete } = useTypewriter(text, speed, delay)

  if (isComplete && onComplete) {
    onComplete()
  }

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && (
        <motion.span
          className="inline-block w-2 h-5 ml-1 bg-accent-green align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </span>
  )
}
