import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../layout/Section'
import SkillTag from '../ui/SkillTag'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all'
    ? skillCategories.flatMap(cat => cat.skills)
    : skillCategories.find(cat => cat.id === activeCategory)?.skills || []

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="what I work with"
    >
      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
            activeCategory === 'all'
              ? 'bg-accent-blue text-white'
              : 'bg-surface border border-white/10 text-text-secondary hover:border-white/20'
          }`}
        >
          All
        </button>
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
              activeCategory === category.id
                ? 'bg-accent-blue text-white'
                : 'bg-surface border border-white/10 text-text-secondary hover:border-white/20'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <SkillTag key={skill} skill={skill} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Skill Count */}
      <motion.p
        className="text-center text-text-secondary text-sm mt-8 font-mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {filteredSkills.length} skills {activeCategory !== 'all' && `in ${skillCategories.find(c => c.id === activeCategory)?.label}`}
      </motion.p>
    </Section>
  )
}
