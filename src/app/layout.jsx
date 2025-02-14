import { orbitron, titillium } from './fonts'
import './globals.css'
import Header from '../components/header'

export const metadata = {
	title: 'ShareIT',
	description: 'Join the innovation!',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${orbitron.variable} ${titillium.variable} antialiased`}
			>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
