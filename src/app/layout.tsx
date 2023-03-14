import Main from '@/components/layout/Main'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<>{children}</>
			</body>
		</html>
	)
}
