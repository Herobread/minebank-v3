interface MarginOptions {
	height: number
}

const Margin = ({ height }: MarginOptions) => {
	return <div style={{ height: height }}></div>
}

export default Margin
