import { Orbitron, Poppins, Titillium_Web } from 'next/font/google'

export const orbitron = Orbitron({
	weight: ['400', '700'],
	style: 'normal',
	variable: '--font-orbitron',
})

export const poppins = Poppins({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	variable: '--font-poppins',
})

export const titillium = Titillium_Web({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	variable: '--font-titillium',
})
