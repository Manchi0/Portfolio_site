import { motion } from 'framer-motion'
import Section from '../layout/Section'
import ProjectCard from '../ui/ProjectCard'
import { featuredProjects, otherProjects } from '../../data/projects'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="what I've built"
    >
      {/* Featured Projects */}
      <div className="mb-12">
        <motion.h3
          className="text-sm font-mono text-accent-green mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {'// Featured'}
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <motion.h3
          className="text-sm font-mono text-text-secondary mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {'// Other projects'}
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
