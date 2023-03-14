import cn from '@/lib/cn'
import s from './Paragraph.module.css'

interface ParagraphProps {
	children: React.ReactNode
	type?: 'error' | 'success'
}

const Paragraph = ({ type, children }: ParagraphProps) => {
	let styles = [s.paragraph]
	let ariaLabel = type || 'Paragraph'

	if (type) {
		styles.push(s[type])
	}

	return (
		<p className={cn(styles)} aria-label={ariaLabel}>
			{children}
		</p>
	)
}

export default Paragraph
