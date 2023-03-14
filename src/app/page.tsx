import CompactHeader from '@/components/Typography/CompactHeader'
import Header from '@/components/Typography/Header'
import Paragraph from '@/components/Typography/Paragraph'
import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import MainLayout from '../components/layout/MainLayout/MainLayout'

export default function Home() {
	return (
		<MainLayout>
			<Header>Buttons</Header>
			<Button>aaa</Button>
			<Button disabled>aaa</Button>
			<Button appearence="accent">aaa</Button>
			<Button disabled appearence="accent">
				aaa
			</Button>

			<Header>Input</Header>
			<Input label="Username" error="Something is wrong" value={'abcde'} />
			<Input label="Password" type="password" />
			<Input label="Password 2" type="password" />
		</MainLayout>
	)
}
