import { motion } from 'framer-motion'
import Section from '../layout/Section'
import MetricCard from '../ui/MetricCard'
import MacWindow from '../layout/MacWindow'

const stats = [
  { value: 1, suffix: 'st', label: 'Capstone (76 Teams)', icon: '🏆' },
  { value: 70, suffix: '%', label: 'Faster (WorkPro)', icon: '📈' },
  { value: 50, suffix: '%', label: 'Time Saved (RFP)', icon: '⏱️' },
  { value: 6, suffix: '', label: 'Interns Mentored', icon: '👥' },
]

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="who I am"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MacWindow title="about.md" showButtons={true}>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I build <span className="text-accent-blue">AI systems that solve real problems</span>.
                From winning 1st place at Penn State's Engineering Capstone to deploying
                production RAG systems, I turn complex ML concepts into practical tools.
              </p>
              <p>
                CS major with a Math minor, 3.88 GPA, 8x Dean's List. Currently leading
                AI projects at Nittany AI Alliance while finishing my degree. I believe
                the best code is invisible—it just works.
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="font-mono text-sm text-accent-green">
                  {'> '}<span className="text-text-primary">Available May 2026</span>
                </span>
              </div>
            </div>
          </MacWindow>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MetricCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
