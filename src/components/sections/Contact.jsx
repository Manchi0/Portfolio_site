import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import Section from '../layout/Section'
import MacWindow from '../layout/MacWindow'

const contactLinks = [
  {
    label: 'Email',
    value: 'manasmunjial@icloud.com',
    href: 'mailto:manasmunjial@icloud.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: '/in/manas-munjial',
    href: 'https://linkedin.com/in/manas-munjial',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: '@Manchi0',
    href: 'https://github.com/Manchi0',
    icon: Github,
  },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="let's connect"
      className="pb-32" // Extra padding for navbar
    >
      <div className="max-w-2xl mx-auto">
        <MacWindow title="contact.sh">
          <div className="text-center space-y-6">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                Let's Build Something
              </h3>
              <p className="text-text-secondary">
                Open to full-time opportunities starting <span className="text-accent-green font-mono">May 2026</span>
              </p>
            </motion.div>

            {/* Terminal-style CTA */}
            <motion.div
              className="bg-background rounded-lg p-4 font-mono text-sm text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-text-secondary">
                <span className="text-accent-green">{'>'}</span> Looking for a developer who can:
              </div>
              <div className="text-text-secondary pl-4 mt-2 space-y-1">
                <div>• Build production ML/AI systems</div>
                <div>• Lead technical teams</div>
                <div>• Ship quality code fast</div>
              </div>
              <div className="text-accent-blue mt-4">
                <span className="text-accent-green">{'>'}</span> manas.contact()
              </div>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-2 px-4 py-3 bg-surface-light/50 border border-white/10 rounded-lg hover:border-accent-blue/50 transition-colors group w-full sm:w-auto justify-center"
                  >
                    <Icon size={18} className="text-text-secondary group-hover:text-accent-blue transition-colors" />
                    <span className="text-text-primary">{link.label}</span>
                    <ArrowUpRight size={14} className="text-text-secondary group-hover:text-accent-blue transition-colors" />
                  </a>
                )
              })}
            </motion.div>
          </div>
        </MacWindow>

        {/* Footer */}
        <motion.p
          className="text-center text-text-secondary text-sm mt-8 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Built with React + Tailwind + Framer Motion
        </motion.p>
      </div>
    </Section>
  )
}
