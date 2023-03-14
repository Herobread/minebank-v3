import cn from '@/lib/cn'
import s from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string
	disabled?: boolean
	appearence?: 'normal' | 'accent'
	[key: string]: any
}

const Button = ({ disabled, appearence, children, ...props }: ButtonProps) => {
	let styles = [s.button]
	appearence ??= 'normal'

	if (disabled) {
		styles.push(s.disabled)
	}

	if (appearence) {
		styles.push(s[appearence])
	}

	return (
		<button className={cn(styles)} disabled={disabled} {...props}>
			{children}
		</button>
	)
}

export default Button
