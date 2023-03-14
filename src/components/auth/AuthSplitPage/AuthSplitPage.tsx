import s from './AuthSplitPage.module.css'

interface AuthSplitPageProps {
	children: React.ReactNode[]
}

const AuthSplitPage = ({ children }: AuthSplitPageProps) => {
	return (
		<div className={s.container}>
			<div className={s.left}>{children[0]}</div>
			{children[1]}
		</div>
	)
}

export default AuthSplitPage
