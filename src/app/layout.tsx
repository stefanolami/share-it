import type { Metadata } from 'next'
import { orbitron, titillium } from './fonts'
import './globals.css'

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
				{children}
			</body>
		</html>
	)
}
