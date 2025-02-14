import type { Metadata } from 'next'
import { orbitron, titillium } from './fonts'
import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

export const metadata: Metadata = {
	title: 'ShareIT',
	description: 'Join the innovation!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${orbitron.variable} ${titillium.variable} antialiased`}
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
