'use client'

import React, { useEffect, useState } from 'react'
import { useAnimate } from 'framer-motion'

const HeroSmall = ({ title }) => {
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
		const rows = Math.floor(300 / 75)

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
		<div className="bg-primo-scuro shadow-2xl z-10 relative">
			<div
				ref={scope}
				className="grid h-[300px] w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
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
			<div className="pointer-events-none absolute bottom-6 px-6 lg:px-12 w-full">
				<div className="w-full max-w-7xl mx-auto relative">
					<h1 className="text-left text-2xl font-bold text-white md:text-2xl lg:text-5xl font-orbitron drop-shadow-lg">
						{title}
					</h1>
				</div>
			</div>
		</div>
	)
}

export default HeroSmall
