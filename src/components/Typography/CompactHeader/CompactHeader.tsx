import s from './CompactHeader.module.css'

interface CompactHeader {
	children: React.ReactNode
}

const CompactHeader = ({ children }: CompactHeader) => {
	return <h3 className={s.header}>{children}</h3>
}

export default CompactHeader
