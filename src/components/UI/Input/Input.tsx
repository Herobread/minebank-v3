import cn from '@/lib/cn'
import s from './Input.module.css'

interface InputProps {
	label?: string
	placeholder?: string
	error?: string
	[key: string]: any
}

const Input = ({ label, placeholder, error, ...props }: InputProps) => {
	let inputStyles = [s.input]
	let labelStyles = [s.labelText]
	let messageStyles = []

	if (error) {
		inputStyles.push(s.errorInput)
		labelStyles.push(s.error)
		messageStyles.push(s.errorMessage)
		messageStyles.push(s.error)
	}

	return (
		<div className={s.container}>
			<label>
				<p className={cn(labelStyles)}>{label}</p>
				<input
					className={cn(inputStyles)}
					placeholder={placeholder}
					{...props}
				/>
			</label>
			<p className={cn(messageStyles)}>{error}</p>
		</div>
	)
}

export default Input
