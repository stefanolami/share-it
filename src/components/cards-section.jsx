import {
	Card,
	CardContent,
	Cardcontent,
	Cardicon,
	CardHeader,
	CardTitle,
} from './ui/card'
import { BsGrid1X2 } from 'react-icons/bs'
import { BsCamera } from 'react-icons/bs'
import { BsGraphUpArrow } from 'react-icons/bs'
import { BsBoxes } from 'react-icons/bs'
import { BsCpu } from 'react-icons/bs'
import { BsCodeSlash } from 'react-icons/bs'

import { AiFillGithub } from 'react-icons/ai'

const CARDS = [
	{
		title: 'Sviluppo siti Web',
		content:
			'Realizziamo siti web professionali, e-commerce e applicazioni web personalizzate in base alle esigenze del cliente.',
		icon: BsCodeSlash,
	},
	{
		title: 'UI/UX design',
		content:
			'Desing per interfacce inruitive con unser experience ottimizzata per massimizzare la conversione.',
		icon: BsGrid1X2,
	},
	{
		title: 'Forografia per E-commerce',
		content: 'Servizi fotografici professionali per prodotti e-commerce.',
		icon: BsCamera,
	},
	{
		title: 'Campagne Marketing',
		content:
			'Strategia e gestione di campagne marketing digitali su tutti i principali canali.',
		icon: BsGraphUpArrow,
	},
	{
		title: 'Assistenza e consulenza',
		content:
			'Supporto tecnico e consulenza strategica per ottimizzare la tua presenza digitale.',
		icon: BsBoxes,
	},
	{
		title: 'Agenti AI',
		content:
			'Scopri i nostri agenti AI personalizzati per automatizzare e ottimizzare i processi aziendali.',
		icon: BsCpu,
	},
]

const CardSection = () => {
	return (
		<div className="bg-terzo relative shadow-xl">
			<div className="absolute bg-black/60 w-full h-full"></div>
			<div className="w-full h-full z-10 relative p-16">
				<h2 className="font-orbitron text-secondo font-bold text-center text-3xl">
					AI Solutions
				</h2>
				<div className="mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 lg:gap-8 max-w-[900px]">
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
