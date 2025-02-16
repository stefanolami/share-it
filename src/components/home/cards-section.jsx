import {
	Card,
	CardContent,
	Cardcontent,
	Cardicon,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { BsGrid1X2 } from 'react-icons/bs'
import { BsCamera } from 'react-icons/bs'
import { BsGraphUpArrow } from 'react-icons/bs'
import { BsBoxes } from 'react-icons/bs'
import { BsCpu } from 'react-icons/bs'
import { BsCodeSlash } from 'react-icons/bs'

import { AiFillGithub } from 'react-icons/ai'
import { getCards } from '@/actions/cards'

const CARDS = [
	{
		icon: BsCodeSlash,
	},
	{
		icon: BsGrid1X2,
	},
	{
		icon: BsCamera,
	},
	{
		icon: BsGraphUpArrow,
	},
	{
		icon: BsBoxes,
	},
	{
		icon: BsCpu,
	},
]

const CardSection = async () => {
	const cardsResponse = await getCards()
	const cards = cardsResponse
		.map((card, index) => ({
			...card,
			icon: CARDS[index].icon,
		}))
		.sort((a, b) => a.id - b.id)

	return (
		<div className="bg-primo relative shadow-xl">
			{/* <div className="absolute bg-black/60 w-full h-full"></div> */}
			<div className="w-full h-full z-10 relative py-16 px-4">
				<h2 className="font-orbitron text-secondo font-bold text-center text-3xl">
					AI Solutions
				</h2>
				<div className="mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 lg:gap-8 max-w-[900px]">
					{cards.map((card, index) => (
						<Card
							className="bg-primo-scuro border-0 text-white w-full hover:bg-primo-scuro-2 shadow-lg hover:shadow-xl"
							key={index}
						>
							<CardHeader>
								<div className="mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-secondo to-terzo w-12 h-12">
									<card.icon className="text-3xl bg" />
								</div>

								<CardTitle className="font-titillium font-bold text-xl">
									{card.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="">
								{card.content}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default CardSection

/* const CardSection = () => {
	return (
		<div className="bg-terzo h-[1000px] relative">
			<div className="absolute bg-black/60 w-full h-full"></div>
			<div className="w-full h-full z-10 relative p-8">
				<h2 className="font-orbitron text-secondo font-bold text-center text-3xl mt-20">
					AI Solutions
				</h2>
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
			</div>
		</div>
	)
}

export default CardSection */
