'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LINKS = [
	{ name: 'Chi Siamo', url: '/chi-siamo' },
	{ name: 'Servizi', url: '/servizi' },
	{ name: 'Contatti', url: '/contatti' },
]

const NavBar = () => {
	const [selected, setSelected] = useState()

	const pathname = usePathname()

	useEffect(() => {
		const selectedLink = LINKS.filter((link) => link.url === pathname)
		if (selectedLink && selectedLink !== selected) {
			setSelected(selectedLink[0])
		}
	}, [pathname])

	return (
		<div className="px-4 flex items-center flex-wrap gap-2">
			{LINKS.map((link, index) => (
				<Link
					href={`${link.url}`}
					key={index}
				>
					<Chip
						link={link}
						selected={selected === link}
						setSelected={setSelected}
						key={link}
						isHome={pathname === '/'}
					/>
				</Link>
			))}
		</div>
	)
}

const Chip = ({ link, selected, setSelected, isHome }) => {
	return (
		<button
			onClick={() => setSelected(link)}
			className={`${
				selected
					? 'text-primo-scuro'
					: 'text-white/80 hover:text-slate-200 hover:bg-slate-700'
			} text-sm transition-colors px-4 py-2 rounded-lg relative`}
		>
			<span className="relative z-10 font-titillium text-xl font-bold">
				{link.name}
			</span>
			{selected && (
				<motion.span
					layoutId="pill-tab"
					transition={{ type: 'spring', duration: 0.5, from: 0 }}
					className={`${
						isHome ? 'opacity-0' : 'opacity-100'
					} absolute inset-0 z-0 bg-gradient-to-r from-secondo to-terzo rounded-lg`}
				></motion.span>
			)}
		</button>
	)
}

export default NavBar
