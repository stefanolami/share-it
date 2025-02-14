import { Orbitron, Titillium_Web } from 'next/font/google'

export const orbitron = Orbitron({
	weight: ['400', '700'],
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-orbitron',
})

export const titillium = Titillium_Web({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin', 'latin-ext'],
	variable: '--font-titillium',
})
