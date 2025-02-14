import {
	Card,
	CardContent,
	Cardcontent,
	Cardicon,
	CardHeader,
	CardTitle,
} from './ui/card'

import { AiFillGithub } from 'react-icons/ai'

const CARDS = [
	{
		title: 'Card 1',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		icon: AiFillGithub,
	},
	{
		title: 'Card 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		icon: AiFillGithub,
	},
	{
		title: 'Card 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		icon: AiFillGithub,
	},
	{
		title: 'Card 1',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum',
		icon: AiFillGithub,
	},
	{
		title: 'Card 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		icon: AiFillGithub,
	},
	{
		title: 'Card 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipis',
		icon: AiFillGithub,
	},
]

const CardSection = () => {
	return (
		<div className="bg-terzo h-[1000px] relative shadow-xl">
			<div className="absolute bg-black/60 w-full h-full"></div>
			<div className="w-full h-full z-10 relative p-8">
				<h2 className="font-orbitron text-secondo font-bold text-center text-3xl mt-20">
					AI Solutions
				</h2>
				<div className="mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-[900px]">
					{CARDS.map((card, index) => (
						<Card
							className="bg-primo border-0 text-white w-full hover:bg-primo/80 shadow-lg hover:shadow-xl"
							key={index}
						>
							<CardHeader>
								<div className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-secondo to-terzo w-12 h-12">
									<card.icon className="text-3xl bg" />
								</div>

								<CardTitle className="font-titillium font-bold text-xl m">
									{card.title}
								</CardTitle>
							</CardHeader>
							<CardContent>{card.content}</CardContent>
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
