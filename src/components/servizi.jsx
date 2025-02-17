'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import {
	BsCodeSlash,
	BsPalette,
	BsCamera,
	BsGraphUpArrow,
	BsFillPeopleFill,
	BsRobot,
} from 'react-icons/bs'

const ServiziComponent = () => {
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
				{CARDS.map((card, index) => (
					<CardSection
						key={card.id}
						card={card}
						scrollYProgress={scrollYProgress}
						position={card.id}
					/>
				))}
			</div>
		</>
	)
}

const CardSection = ({ position, card, scrollYProgress }) => {
	const scaleFromPct = (position - 1) / CARDS.length
	const cardHeight = window.innerHeight
	const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -cardHeight])

	return (
		<motion.div
			style={{
				height: cardHeight,
				y: position === CARDS.length ? undefined : y,
			}}
			className={`${card.classes} sticky top-0 flex w-full origin-top flex-col items-start justify-center px-8 md:px-32 lg:px-48`}
		>
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-row items-center justify-start mb-4 md:mb-12">
					<div>
						<card.icon className="text-2xl md:text-4xl mr-4 md:mr-8" />
					</div>
					<div className="flex flex-col items-start justify-start">
						<h2 className="text-terzo mb-2 font-orbitron text-xl font-semibold md:text-4xl">
							{card.title}
						</h2>
						<p className="hidden md:block text-base">
							{card.subtitle}
						</p>
					</div>
				</div>
				<div className=" md:mx-16 flex flex-col items-start justify-start">
					{card.content.map((content, index) => (
						<div
							key={index}
							className="mb-4 md:mb-8"
						>
							<h3 className="text-terzo md:text-lg mb-2">
								{content.title}
							</h3>
							<p className="text-sm md:text-base">
								{content.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	)
}

const CARDS = [
	{
		id: 1,
		icon: BsCodeSlash,
		title: 'Sviluppo siti Web',
		subtitle:
			'Realizziamo siti web professionali, e-commerce e applicazioni web personalizzate in base alle esigenze delcliente.',
		content: [
			{
				title: 'Design Responsivo e Performance',
				text: "Sviluppiamo siti web che si adattano perfettamente a qualsiasi dispositivo, garantendo un'esperienza utente ottimale sia su desktop che su mobile. Ogniprogetto viene ottimizzato per ottenere le massime performance in termini di velocità di caricamento e reattività dell'interfaccia.",
			},
			{
				title: 'E-commerce e Soluzioni Custom',
				text: "Le nostre piattaforme e-commerce sono progettate per massimizzare le conversioni e semplificare la gestione del tuo negozio online. Integriamo sistemidi pagamento sicuri, gestione del magazzino e analisi delle vendite in un'unica soluzione personalizzata sulle tue esigenze.",
			},
			{
				title: 'Manutenzione e Supporto Continuo',
				text: "Il nostro impegno non si ferma al lancio del sito. Offriamo servizi di manutenzione continua, aggiornamenti di sicurezza e ottimizzazioni periodiche pergarantire che la tua presenza online rimanga sempre all'avanguardia e competitiva.",
			},
		],
		classes: 'bg-primo text-quarto',
	},
	{
		id: 2,
		icon: BsPalette,
		title: 'UI/UX Design',
		subtitle:
			'Design per interfacce intuitive con user experience ottimizzata per massimizzare la conversione.',
		content: [
			{
				title: 'Ricerca e Analisi Utente',
				text: 'Il nostro processo di design inizia con una profonda comprensione dei tuoi utenti. Conduciamo ricerche approfondite per identificare comportamenti,esigenze e punti critici, creando personas e journey maps che guidano le nostre decisioni di design.',
			},
			{
				title: "Design dell'Interfaccia",
				text: "Creiamo interfacce belle e funzionali che riflettono l'identità del tuo brand. Ogni elemento è attentamente progettato per garantire coerenza visiva efacilità d'uso, creando un'esperienza memorabile per i tuoi utenti.",
			},
			{
				title: 'Rebranding e Comunicazione Omogenea',
				text: "Offriamo un servizio completo di rebranding che va oltre il semplice restyling grafico. Progettiamo una nuova identità visiva coerente su tutti i touchpointdigitali e tradizionali. Dalla definizione delle linee guida del brand al design system, garantiamo una comunicazione uniforme e riconoscibile che rafforzal'identità del tuo marchio e migliora la percezione da parte del pubblico.",
			},
		],
		classes: 'bg-white text-primo-scuro',
	},
	{
		id: 3,
		icon: BsCamera,
		title: 'Fotografia per Ecommerce',
		subtitle: 'Servizi fotografici professionali per prodotti e-commerce.',
		content: [
			{
				title: 'Servizio Fotografico Professionale',
				text: 'Realizziamo servizi fotografici di alta qualità nel nostro studio attrezzato. Utilizziamo attrezzature professionali e tecniche di illuminazione avanzate percatturare ogni dettaglio dei tuoi prodotti, garantendo immagini che si distinguono nel mercato digitale.',
			},
			{
				title: 'Post-Produzione e Ottimizzazione',
				text: "Ogni immagine viene accuratamente post-prodotta per garantire la massima qualità. Ottimizziamo colori, contrasto e nitidezza, assicurando che le fotosiano perfette sia per l'uso web che per eventuali materiali stampati.",
			},
			{
				title: 'Gestione Archivio Digitale',
				text: "Organizziamo e gestiamo il tuo archivio fotografico digitale, garantendo che tutte le immagini siano facilmente accessibili e pronte all'uso per le tuediverse esigenze di marketing e comunicazione.",
			},
		],
		classes: 'bg-primo text-quarto',
	},
	{
		id: 4,
		icon: BsGraphUpArrow,
		title: 'Campagne Marketing & Social',
		subtitle:
			'Strategia e gestione di campagne marketing digitali su tutti i principali canali.',
		content: [
			{
				title: 'Strategia Digitale Integrata',
				text: "Sviluppiamo strategie di marketing digitale complete e personalizzate, integrando diversi canali di comunicazione per massimizzare l'impatto delle tuecampagne. Analizziamo il tuo mercato di riferimento e definiamo obiettivi chiari e misurabili.",
			},
			{
				title: 'Analisi e Ottimizzazione',
				text: "Monitoriamo costantemente le performance delle campagne attraverso analisi dettagliate dei dati. Questo ci permette di ottimizzare continuamente lestrategie, allocare il budget in modo efficiente e massimizzare il ritorno sull'investimento.",
			},
			{
				title: 'Gestione e Strategia Social',
				text: 'Ci occupiamo della gestione completa dei tuoi profili social, dalla creazione dei contenuti alla pianificazione del calendario editoriale. Manteniamo attivi eaggiornati i tuoi canali social con contenuti pertinenti e coinvolgenti, interagiamo con la tua community e monitoriamo la reputazione',
			},
		],
		classes: 'bg-white text-primo-scuro',
	},
	{
		id: 5,
		icon: BsFillPeopleFill,
		title: 'Assistenza e Consulenza',
		subtitle:
			'Supporto tecnico e consulenza strategica per ottimizzare la tua presenza digitale.',

		content: [
			{
				title: '',
				text: '',
			},
			{
				title: 'Consulenza Strategica',
				text: "Offriamo consulenza personalizzata per guidare la tua trasformazione digitale. Analizziamo la tua situazione attuale, identifichiamo opportunità dimiglioramento e definiamo insieme un piano d'azione concreto per raggiungere i tuoi obiettivi.",
			},
			{
				title: 'Supporto Tecnico Continuo',
				text: 'Il nostro team di esperti è sempre a tua disposizione per risolvere problemi tecnici, implementare nuove funzionalità e garantire che i tuoi sistemi digitalifunzionino sempre al meglio.',
			},
			{
				title: 'Formazione e Crescita',
				text: 'Organizziamo sessioni di formazione personalizzate per il tuo team, condividendo conoscenze e best practice per permetterti di gestire in autonomia latua presenza digitale.',
			},
		],
		classes: 'bg-primo text-quarto',
	},
	{
		id: 6,
		icon: BsRobot,
		title: 'Agenti AI',
		subtitle:
			'Scopri i nostri agenti AI personalizzati per automatizzare e ottimizzare i processi aziendali.',
		content: [
			{
				title: 'Soluzioni AI Personalizzate',
				text: 'Sviluppiamo soluzioni di intelligenza artificiale su misura per le tue esigenze aziendali. Dai chatbot per il servizio clienti agli strumenti di analisi predittiva,creiamo agenti AI che automatizzano e ottimizzano i tuoi processi.',
			},
			{
				title: 'Integrazione e Implementazione',
				text: "Integriamo le soluzioni AI con i tuoi sistemi esistenti, garantendo una transizione fluida e minimizzando l'impatto sulle operazioni quotidiane. Ogniimplementazione è accompagnata da test approfonditi e formazione del personale.",
			},
			{
				title: 'Evoluzione Continua',
				text: 'I nostri agenti AI apprendono e si evolvono continuamente grazie al machine learning, migliorando costantemente le loro prestazioni nel tempo.Monitoriamo e ottimizziamo regolarmente le performance per garantire risultati sempre migliori.',
			},
		],
		classes: 'bg-white text-primo-scuro',
	},
]

export default ServiziComponent
