import s from './Main.module.css'

interface MainOptions {
	children: React.ReactNode
}

const Main = ({ children }: MainOptions) => {
	return <div className={s.container}>{children}</div>
}

export default Main
