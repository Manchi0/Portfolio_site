import { useState, useEffect } from 'react'

export default function useTypewriter(text, speed = 50, delay = 0) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    let timeout

    if (delay > 0 && !hasStarted) {
      timeout = setTimeout(() => {
        setHasStarted(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (!hasStarted && delay > 0) return

    if (displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1))
      }, speed)
    } else {
      setIsComplete(true)
    }

    return () => clearTimeout(timeout)
  }, [displayText, text, speed, delay, hasStarted])

  useEffect(() => {
    if (delay === 0) {
      setHasStarted(true)
    }
  }, [delay])

  return { displayText, isComplete }
}
