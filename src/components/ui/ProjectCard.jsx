import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, Trophy } from 'lucide-react'

export default function ProjectCard({ project, featured = false }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const categoryColors = {
    'ML/AI': 'bg-purple-500/20 text-purple-400',
    'Full-Stack': 'bg-blue-500/20 text-blue-400',
    'Systems': 'bg-orange-500/20 text-orange-400',
  }

  const statusColors = {
    'In Production': 'bg-accent-green/20 text-accent-green',
    'Deployed': 'bg-accent-blue/20 text-accent-blue',
    'In Development': 'bg-yellow-500/20 text-yellow-400',
  }

  return (
    <motion.div
      className={`group relative bg-surface rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 ${
        featured ? 'col-span-1 lg:col-span-1' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      layout
    >
      {/* Window Title Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-surface-light/50 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-traffic-red" />
          <div className="w-2.5 h-2.5 rounded-full bg-traffic-yellow" />
          <div className="w-2.5 h-2.5 rounded-full bg-traffic-green" />
        </div>
        <span className="flex-1 text-center text-xs text-text-secondary font-mono truncate">
          {project.title.toLowerCase().replace(/\s+/g, '-')}.tsx
        </span>
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {project.award && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded">
                  <Trophy size={12} />
                  {project.award}
                </span>
              )}
              {project.status && (
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
              {project.title}
            </h3>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded ${categoryColors[project.category]}`}>
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        {featured && project.metrics && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map((metric, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-accent-green/10 text-accent-green text-xs font-mono rounded"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, featured ? undefined : 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/5 text-text-secondary text-xs font-mono rounded"
            >
              {tech}
            </span>
          ))}
          {!featured && project.tech.length > 3 && (
            <span className="px-2 py-1 text-text-secondary text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Expandable Details (Featured only) */}
        {featured && project.longDescription && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-accent-blue hover:text-accent-blue/80 transition-colors mb-2"
            >
              <span>{isExpanded ? 'Show less' : 'Show more'}</span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-text-secondary text-sm leading-relaxed pb-4">
                    {project.longDescription}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
