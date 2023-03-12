import s from './BigText.module.css'

interface BigTextProps {
	children: React.ReactNode
}

const BigText = ({ children }: BigTextProps) => {
	return <h1 className={s.BigText}>{children}</h1>
}

export default BigText
