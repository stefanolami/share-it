'use client'

import React, { useEffect, useState } from 'react'
import { useAnimate } from 'framer-motion'
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillTikTok,
	AiFillLinkedin,
} from 'react-icons/ai'
import Image from 'next/image'

const LINKS = [
	{
		icon: <AiFillInstagram />,
		url: 'https://www.instagram.com/',
	},
	{
		icon: <AiFillFacebook />,
		url: 'https://www.facebook.com/',
	},
	{
		icon: <AiFillTikTok />,
		url: 'https://www.tiktok.com/',
	},
	{
		icon: <AiFillLinkedin />,
		url: 'https://www.linkedin.com/',
	},
]

const Footer = () => {
	const [scope, animate] = useAnimate()

	const [size, setSize] = useState({ columns: 0, rows: 0 })

	useEffect(() => {
		generateGridCount()
		window.addEventListener('resize', generateGridCount)

		return () => window.removeEventListener('resize', generateGridCount)
	}, [])

	const generateGridCount = () => {
		const columns = Math.floor(document.body.clientWidth / 75)
		//const rows = Math.floor(document.body.clientWidth / 75)
		const rows = Math.floor(window.innerHeight / 2 / 75)

		setSize({
			columns,
			rows,
		})
	}

	const handleMouseLeave = (e) => {
		// @ts-ignore
		const id = `#${e.target.id}`
		animate(id, { background: 'rgba(25, 62, 118, 0)' }, { duration: 1.5 })
	}

	const handleMouseEnter = (e) => {
		// @ts-ignore
		const id = `#${e.target.id}`
		animate(id, { background: 'rgba(25, 62, 118, 1)' }, { duration: 0.15 })
	}

	return (
		<div className="bg-primo-scuro shadow-[0_35px_35px_35px_rgba(0,0,0,0.5)] relative">
			<div
				ref={scope}
				className="grid h-[50vh] w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
			>
				{[...Array(size.rows * size.columns)].map((_, i) => (
					<div
						key={i}
						id={`square-${i}`}
						onMouseLeave={handleMouseLeave}
						onMouseEnter={handleMouseEnter}
						className="h-full w-full border-[1px] border-primo-scuro-2"
					/>
				))}
			</div>
			<div className="pointer-events-none absolute bottom-[42%] md:bottom-[35%] w-full">
				<div className="w-min mx-auto flex flex-col items-center justify-center">
					<div className="flex items-center justify-between w-full md:w-4/5 mx-auto mb-3 md:mb-6">
						{LINKS.map(({ icon, url }, i) => (
							<a
								key={i}
								href={url}
								target="_blank"
								className="text-white text-3xl pointer-events-auto"
							>
								{icon}
							</a>
						))}
					</div>
					<div className="bg-gradient-to-r from-secondo to-terzo bg-clip-text text-[42px] lg:text-[50px] font-bold font-orbitron text-transparent">
						Share<span className="font-normal">IT</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
