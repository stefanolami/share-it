import Header from '@/components/header/header'
import Footer from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ShareIT',
	description: 'Join the innovation!',
}

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
