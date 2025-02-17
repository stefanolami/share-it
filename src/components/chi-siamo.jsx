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
import {
	BsSuitHeart,
	BsLightbulb,
	BsCheck2Circle,
	BsCodeSlash,
	BsRocket,
	BsCardList,
	BsShop,
	BsMagic,
	BsFillTelephoneFill,
} from 'react-icons/bs'
import {
	Card,
	CardContent,
	Cardcontent,
	Cardicon,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

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
				<CardSection
					key={CARDS[0].id}
					card={CARDS[0]}
					scrollYProgress={scrollYProgress}
					position={CARDS[0].id}
				/>
				<CardSection
					key={CARDS[1].id}
					card={CARDS[1]}
					scrollYProgress={scrollYProgress}
					position={CARDS[1].id}
				/>
				<CardWithBoxes
					key={CARDS[2].id}
					card={CARDS[2]}
					scrollYProgress={scrollYProgress}
					position={CARDS[2].id}
				/>
				<CardSection
					key={CARDS[3].id}
					card={CARDS[3]}
					scrollYProgress={scrollYProgress}
					position={CARDS[3].id}
				/>
			</div>
		</>
	)
}

const CardSection = ({ position, card, scrollYProgress }) => {
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
			className={`${card.classes} sticky top-0 flex w-full origin-top flex-col items-start justify-center px-8 md:px-32 lg:px-48`}
		>
			<div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-center">
				<h3
					className={`${
						card.titleClass ? card.titleClass : ''
					} mb-6 md:mb-12 text-2xl font-semibold md:text-4xl`}
				>
					{card.title}
				</h3>
				<p className="mb-4 text-base md:text-lg xl:text-xl">
					{card.description[0]}
				</p>
				{card.description[1] && (
					<p className="mb-8 text-base md:text-lg xl:text-xl">
						{card.description[1]}
					</p>
				)}
				{card.smallBoxes && (
					<div>
						<h4 className="mb-4 text-lg md:text-xl xl:text-2xl font-bold">
							Le Nostre Specializzazioni
						</h4>
						<div className="flex flex-auto flex-wrap fle-row items-center justify-between gap-4 w-full">
							{card.smallBoxes.map((box, index) => (
								<div
									key={index}
									className="flex items-center justify-start gap-4 border-2 rounded-md border-primo p-2  flex-grow"
								>
									<box.icon className="text-base bg" />
									<p className="text-[10px] font-bold text-nowrap">
										{box.title}
									</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</motion.div>
	)
}

const CardWithBoxes = ({ position, card, scrollYProgress }) => {
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
			className={`${card.classes} sticky top-0 flex w-full origin-top flex-col items-start justify-center px-8 md:px-32 lg:px-48`}
		>
			<div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-center">
				<h3
					className={`${
						card.titleClass ? card.titleClass : ''
					} mb-3 md:mb-12 text-2xl font-semibold md:text-4xl`}
				>
					{card.title}
				</h3>
				<div className="grid w-full sm:grid-cols-3 lg:grid-cols-3 gap-4">
					{card.boxes.map((box, index) => (
						<Box
							card={box}
							index={index}
							key={index}
						/>
					))}
				</div>
			</div>
		</motion.div>
	)
}

const Box = ({ card, index }) => {
	return (
		<Card
			className="bg-primo-scuro border-0 text-quarto w-full hover:bg-primo-scuro-2 shadow-lg hover:shadow-xl"
			key={index}
		>
			<div className="flex flex-row items-center justify-start gap-4 md:block p-3 md:p-6">
				<div className="md:mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-secondo to-terzo w-9 h-9 md:w-12 md:h-12">
					<card.icon className="text-lg md:text-3xl bg text-white" />
				</div>

				<CardTitle className="font-titillium font-bold text-base md:text-xl">
					{card.title}
				</CardTitle>
			</div>
			<div className="text-sm md:text-base xl:text-lg p-3 pt-0 md:p-6">
				{card.text}
			</div>
		</Card>
	)
}

const CARD_HEIGHT = 500

const CARDS = [
	{
		id: 1,
		Icon: FiCalendar,
		title: 'ShareIT',
		description: [
			'Siamo un team di innovatori digitali che trasforma idee in esperienze tecnologiche memorabili. La nostra missione è guidare leaziende attraverso la loro evoluzione digitale, combinando expertise tecnica e creatività per risultati straordinari.',
		],
		classes: 'bg-primo text-quarto',
		titleClass: 'font-orbitron text-terzo',
		routeTo: '#',
	},
	{
		id: 2,
		Icon: FiDatabase,
		title: 'La Nostra Storia',
		description: [
			"ShareIT nasce dall'unione di professionisti con anni di esperienza nel settore digitale. Prima di fondare l'azienda, il nostro team ha collaborato a numerosi progettiweb, sviluppato strategie di marketing innovative e gestito con successo piattaforme di e-commerce.",
			'Questa solida base di esperienza ci ha permesso di comprendere profondamente le sfide che le aziende affrontano nel loro percorso di digitalizzazione. Oggi,mettiamo questa conoscenza al servizio dei nostri clienti, guidandoli verso il futuro digitale.',
		],
		classes: 'bg-white text-primo-scuro',
		titleClass: 'font-orbitron text-terzo',
		routeTo: '#',
	},
	{
		id: 3,
		Icon: FiCopy,
		title: 'I Nostri Valori',
		description: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		],
		classes: 'bg-primo text-quarto',
		titleClass: 'font-orbitron text-terzo',
		routeTo: '#',
		boxes: [
			{
				title: 'Innovazione',
				text: "Esploriamo costantemente nuovetecnologie e approcci creativi per offriresoluzioni all'avanguardia.",
				icon: BsLightbulb,
			},
			{
				title: 'Passione',
				text: "L'interesse per il design e per le nuovetecnologie ci portano sempre a scoprirenuove cose.",
				icon: BsSuitHeart,
			},
			{
				title: 'Risultati',
				text: 'Ci impegniamo per garantire risultaticoncreti e misurabili per ogni progetto.',
				icon: BsCheck2Circle,
			},
		],
	},
	{
		id: 4,
		Icon: FiAward,
		title: 'Il Nostro Approccio',
		description: [
			'Combiniamo creatività e metodologia agile per garantire risultati di qualità in tempi rapidi. Il nostro processo è trasparente e collaborativo, permettendo ai clienti di essere sempre aggiornati e coinvolti in ogni fase del progetto.',
		],
		smallBoxes: [
			{
				icon: BsCodeSlash,
				title: 'Sviluppo Web e Mobile',
			},
			{
				icon: BsRocket,
				title: 'Marketing Digitale',
			},
			{
				icon: BsCardList,
				title: 'Consulenza IT',
			},
			{
				icon: BsShop,
				title: 'Presentazione Prodotti',
			},
			{
				icon: BsMagic,
				title: 'Rebranding',
			},
			{
				icon: BsFillTelephoneFill,
				title: 'Assistenza diretta',
			},
		],
		classes: 'bg-white text-primo-scuro',
		titleClass: 'font-orbitron text-terzo',
		routeTo: '#',
	},
]

export default ChiSiamoComponent
