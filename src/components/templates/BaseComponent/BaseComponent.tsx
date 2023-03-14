import s from './BaseComponent.module.css'

interface BaseComponentProps {
	children: React.ReactNode
}

const BaseComponent = ({ children }: BaseComponentProps) => {
	return <div className={s.name}>{children}</div>
}

export default BaseComponent
