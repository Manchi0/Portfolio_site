import Section from '../layout/Section'
import TimelineItem from '../ui/TimelineItem'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="where I've worked"
    >
      <div className="max-w-3xl mx-auto">
        {experience.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}
