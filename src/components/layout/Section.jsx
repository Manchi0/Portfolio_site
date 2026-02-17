import { motion } from 'framer-motion'

export default function Section({
  id,
  children,
  className = '',
  title,
  subtitle
}) {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {subtitle && (
              <span className="inline-block font-mono text-sm text-accent-green mb-2">
                {'// '}{subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
