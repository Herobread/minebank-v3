import s from './Section.module.css'

interface SectionProps {
	children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
	return <section className={s.container}>{children}</section>
}

export default Section
