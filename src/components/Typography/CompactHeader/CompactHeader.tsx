import s from './CompactHeader.module.css'

interface CompactHeader {
	children: React.ReactNode
}

const CompactHeader = ({ children }: CompactHeader) => {
	return <h2 className={s.header}>{children}</h2>
}

export default CompactHeader
