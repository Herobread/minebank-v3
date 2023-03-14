import AuthSplitPage from '@/components/auth/AuthSplitPage'
import BigLeftSplit from '@/components/layout/BigLeftSplit'
import MainLayout from '@/components/layout/MainLayout'
import Paragraph from '@/components/Typography/Paragraph'
import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import Section from '@/components/UI/Section'
import Link from 'next/link'
import Steve from '@/public/art/Steve.svg'
import Header from '@/components/Typography/Header'

export default function Login() {
	return (
		<AuthSplitPage>
			<div>
				<Steve />
			</div>
			<MainLayout>
				<Header>Login</Header>
				<Input label="Email" />
				<Input label="Password" error={'This field is required'} />
				<Section>
					<Paragraph type="error">Any server-side error here.</Paragraph>
				</Section>
				<BigLeftSplit>
					<Paragraph>
						Don&#39;t have an account? <Link href={'/'}>Sign up</Link>.
					</Paragraph>
					<Button>Log in</Button>
				</BigLeftSplit>
			</MainLayout>
		</AuthSplitPage>
	)
}
