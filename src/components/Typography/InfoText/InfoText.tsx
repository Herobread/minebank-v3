import cn from '@/lib/cn'
import s from './InfoText.module.css'

interface InfoTextProps {
	children: React.ReactNode
	type?: 'error' | 'success' | 'normal' | 'dimmed'
}

const InfoText = ({ type, children }: InfoTextProps) => {
	let styles = [s.normal]

	if (type && type !== 'normal') {
		styles.push(s[type])
	}

	return <p className={cn(styles)}>{children}</p>
}

export default InfoText
