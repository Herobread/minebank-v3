import Flex from '../Flex'

interface MainLayoutOptions {
	children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutOptions) => {
	return (
		<Flex gap={10} direction="column">
			{children}
		</Flex>
	)
}

export default MainLayout
