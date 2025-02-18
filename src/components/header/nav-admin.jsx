import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const TABS = [
	{
		name: 'Dashboard',
		url: '/admin',
	},
	{
		name: 'Cards',
		url: '/admin/cards',
	},
]

const NavAdmin = () => {
	const [selected, setSelected] = useState()

	const pathname = usePathname()

	useEffect(() => {
		const selectedLink = TABS.filter((link) => link.url === pathname)
		if (selectedLink && selectedLink !== selected) {
			setSelected(selectedLink[0])
		}
	}, [pathname])

	return (
		<div className="px-4 flex items-center flex-wrap gap-2">
			{TABS.map((tab, index) => (
				<Link
					href={`${tab.url}`}
					key={index}
				>
					<Chip
						text={tab.name}
						selected={selected === tab}
						setSelected={setSelected}
						key={tab}
					/>
				</Link>
			))}
		</div>
	)
}

const Chip = ({ text, selected, setSelected }) => {
	return (
		<button
			onClick={() => setSelected(text)}
			className={`${
				selected
					? 'text-primo-scuro'
					: 'text-slate-300 hover:text-slate-200 hover:bg-slate-700'
			} text-sm transition-colors px-4 py-2 rounded-lg relative`}
		>
			<span className="relative z-10 font-titillium text-xl font-bold">
				{text}
			</span>
			{selected && (
				<motion.span
					layoutId="pill-tab"
					transition={{ type: 'spring', duration: 0.5 }}
					className="absolute inset-0 z-0 bg-gradient-to-r from-secondo to-terzo rounded-lg"
				></motion.span>
			)}
		</button>
	)
}

export default NavAdmin
