'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import {
	FiArrowRight,
	FiAward,
	FiCalendar,
	FiCopy,
	FiDatabase,
} from 'react-icons/fi'

const ChiSiamoComponent = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	return (
		<>
			<div
				ref={ref}
				className="relative "
			>
				{CARDS.map((c, idx) => (
					<Card
						key={c.id}
						card={c}
						scrollYProgress={scrollYProgress}
						position={idx + 1}
					/>
				))}
			</div>
		</>
	)
}

const Card = ({ position, card, scrollYProgress }) => {
	const scaleFromPct = (position - 1) / CARDS.length
	const y = useTransform(
		scrollYProgress,
		[scaleFromPct, 1],
		[0, -CARD_HEIGHT]
	)

	const isOddCard = position % 2

	return (
		<motion.div
			style={{
				height: CARD_HEIGHT,
				y: position === CARDS.length ? undefined : y,
			}}
			className={`${card.classes} sticky top-0 flex w-full origin-top flex-col items-start justify-center px-4 md:px-20 lg:px-12`}
		>
			<div className="w-full max-w-5xl mx-auto">
				<h3 className="mb-6 text-2xl font-semibold md:text-4xl">
					{card.title}
				</h3>
				<p className="mb-8 text-base md:text-lg">{card.description}</p>
			</div>
		</motion.div>
	)
}

const CARD_HEIGHT = 500

const CARDS = [
	{
		id: 1,
		Icon: FiCalendar,
		title: 'ShareIT',
		description:
			'Siamo un team di innovatori digitali che trasforma idee in esperienze tecnologiche memorabili. La nostra missione è guidare leaziende attraverso la loro evoluzione digitale, combinando expertise tecnica e creatività per risultati straordinari.',
		classes: 'bg-primo text-quarto',
		routeTo: '#',
	},
	{
		id: 2,
		Icon: FiDatabase,
		title: '#1 in data privacy',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		classes: 'bg-secondo text-primo-scuro',
		routeTo: '#',
	},
	{
		id: 3,
		Icon: FiCopy,
		title: 'Use your existing tools',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		classes: 'bg-primo text-quarto',
		routeTo: '#',
	},
	{
		id: 4,
		Icon: FiAward,
		title: 'Customers love us',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		classes: 'bg-terzo text-primo-scuro',
		routeTo: '#',
	},
]

export default ChiSiamoComponent
