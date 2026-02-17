import { motion } from 'framer-motion'
import useCountUp from '../../hooks/useCountUp'

export default function MetricCard({ value, suffix = '', prefix = '', label, icon }) {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <motion.div
      ref={ref}
      className="relative bg-surface rounded-xl border border-white/10 p-6 text-center group hover:border-white/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Window dots */}
      <div className="absolute top-3 left-3 flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-traffic-red/50" />
        <div className="w-2 h-2 rounded-full bg-traffic-yellow/50" />
        <div className="w-2 h-2 rounded-full bg-traffic-green/50" />
      </div>

      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
        {prefix}
        <span className="tabular-nums">{count}</span>
        {suffix}
      </div>
      <div className="text-sm text-text-secondary">{label}</div>
    </motion.div>
  )
}
