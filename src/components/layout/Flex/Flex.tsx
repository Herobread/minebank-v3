interface FlexOptions {
	children: React.ReactNode

	alignItems?:
		| 'stretch'
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'baseline'
		| 'initial'
		| 'inherit'

	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'center'
		| 'initial'
		| 'inherit'

	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	flexWrap?: 'wrap' | 'wrap' | 'wrap-reverse'

	alignSelf?: 'stretch' | 'center' | 'start' | 'end'
	justifySelf?: 'stretch' | 'center' | 'start' | 'end'

	gap?: number | string
	flexGrow?: number
	padding?: number | string

	width?: number | string
	maxWidth?: number | string
}

const Flex = ({
	children,
	alignItems,
	alignSelf,
	direction,
	flexWrap,
	justifyContent,
	justifySelf,
	width,
	maxWidth,
	flexGrow,
	padding,
	gap,
}: FlexOptions) => {
	return (
		<div
			style={{
				width: width,
				display: 'flex',
				alignItems: alignItems,
				alignSelf: alignSelf,
				flexDirection: direction,
				flexWrap: flexWrap,
				flexGrow: flexGrow,
				justifyContent: justifyContent,
				justifySelf: justifySelf,
				gap: gap,
				padding: padding,
				maxWidth: maxWidth,
			}}
		>
			{children}
		</div>
	)
}

export default Flex
