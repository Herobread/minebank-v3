import Flex from '../Flex'

interface CenterOptions {
	children: React.ReactNode
}

const Center = ({ children }: CenterOptions) => {
	return (
		<Flex gap={10} direction="column">
			{children}
		</Flex>
	)
}

export default Center
