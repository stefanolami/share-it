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
import {
	BsTwitterX,
	BsTelegram,
	BsFacebook,
	BsInstagram,
	BsWhatsapp,
	BsLinkedin,
} from 'react-icons/bs'

const LINKS = [
	{
		icon: <BsTwitterX />,
		url: 'https://x.com/Shareitagent',
	},
	{
		icon: <BsInstagram />,
		url: 'https://www.instagram.com/shareit_robothead',
	},
	{
		icon: <BsFacebook />,
		url: 'https://www.facebook.com/share/16A8X2Mgk3/',
	},
	{
		icon: <BsLinkedin />,
		url: 'https://www.linkedin.com/in/shareit-webagency-26b348300/',
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
		const width = document.body.clientWidth
		const columns = Math.floor(width / 75)
		//const rows = Math.floor(document.body.clientWidth / 75)

		const height = width >= 768 ? 300 : 225

		const rows = Math.floor(height / 75)

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
				className={`grid h-[225px] md:h-[300px] w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]`}
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
			<div className="pointer-events-none absolute bottom-[35%] md:bottom-[35%] w-full">
				<div className="w-min mx-auto flex flex-col h-full items-center justify-center">
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
					<div className="bg-gradient-to-r from-secondo to-terzo bg-clip-text text-[42px] md:text-[50px] font-bold font-orbitron text-transparent">
						Share<span className="font-normal">IT</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
