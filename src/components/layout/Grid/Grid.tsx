interface GridProps {
	children: React.ReactNode
	gridTemplateColumns: string
	gap: number
}

const Grid = ({ children, gridTemplateColumns, gap }: GridProps) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: gridTemplateColumns,
				gap: gap,
			}}
		>
			{children}
		</div>
	)
}

export default Grid
