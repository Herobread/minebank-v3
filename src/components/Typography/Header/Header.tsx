import s from './Header.module.css'

interface HeaderProps {
	children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
	return <h2 className={s.header}>{children}</h2>
}

// hgroup

export default Header
