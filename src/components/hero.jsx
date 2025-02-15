'use client'

import React, { useEffect, useState } from 'react'
import { useAnimate } from 'framer-motion'

export const Hero = () => {
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
		const rows = Math.floor(window.innerHeight / 75)

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
		<div className="bg-primo-scuro shadow-xl">
			<div
				ref={scope}
				className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
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
			<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
				<h1 className="text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl font-orbitron drop-shadow-lg">
					JOIN THE FUTURE
				</h1>
				<p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light font-titillium text-quarto md:text-xl"></p>
				{/* <button className="font-titillium pointer-events-auto bg-secondo px-4 py-2 text-xl font-bold uppercase text-neutral-950">
					Join waitlist
				</button> */}
			</div>
		</div>
	)
}
