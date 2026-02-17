import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

export default function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      className="relative pl-8 pb-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-accent-blue to-transparent" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface border-2 border-accent-blue flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent-blue" />
      </div>

      {/* Content Card */}
      <div className="bg-surface rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
        {/* Window Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-light/50 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-traffic-red" />
            <div className="w-2 h-2 rounded-full bg-traffic-yellow" />
            <div className="w-2 h-2 rounded-full bg-traffic-green" />
          </div>
          <span className="flex-1 text-center text-xs text-text-secondary font-mono">
            {item.company.toLowerCase().replace(/\s+/g, '-')}.exp
          </span>
        </div>

        <div className="p-5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
              <p className="text-accent-blue font-medium">{item.company}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {item.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {item.description.map((point, i) => (
              <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                <span className="text-accent-green mt-1">{'>'}</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/5 text-text-secondary text-xs font-mono rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
