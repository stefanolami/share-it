import { BsShieldCheck } from 'react-icons/bs'
import { BsCookie } from 'react-icons/bs'
import { BsLock } from 'react-icons/bs'

const PrivacyCookiesComponent = () => {
	return (
		<div className="w-full bg-primo text-white text-sm md:text-base xl:text-lg  pt-2 md:pt-4">
			<div className="w-[90%] md:w-3/5 lg:w-1/2 mx-auto max-w-4xl">
				{/* FIRST SECTION */}
				<div className="flex flex-row items-center justify-start gap-2 md:gap-6 mt-10 mt:mb-16 xl:mt-20 mb-4 mb:my-8 xl:mb-12">
					<BsShieldCheck className="text-terzo text-xl md:text-2xl xl:text-4xl" />
					<h2 className="text-terzo font-orbitron text-lg md:text-2xl xl:text-4xl">
						Informativa sulla privacy
					</h2>
				</div>
				<div className="mx-7 md:mx-12 xl:mx-16">
					<p className="mb-2">
						La presente informativa descrive le modalità di gestione
						del sito web ShareIT in riferimento al trattamento dei
						dati personali degli utenti che consultano il sito.
					</p>
					<p className=" mb-4 md:mb-6">
						Il Titolare del trattamento è ShareIT, con sede in Via
						Achille Grandi 138, 41019 Soliera (MO). Puoi contattarci
						all'indirizzo email: info@shareit.com
					</p>
					<p className="font-bold mb-2 md:mb-4">
						Durante la navigazione raccogliamo:
					</p>
					<ul className="mb-4 md:mb-6">
						<li>
							- Dati di navigazione (indirizzi IP, orari di
							visita, etc.)
						</li>
						<li>
							- Dati forniti volontariamente tramite form di
							contatto
						</li>
						<li>
							- Cookie tecnici necessari al funzionamento del sito
						</li>
						<li>- Cookie analitici per statistiche anonime</li>
					</ul>
					<p className="font-bold mb-2 md:mb-4">
						I dati verranno trattati per:
					</p>
					<ul className="mb-10 md:mb-16 xl:mb-20">
						<li>- Permettere la navigazione del sito</li>
						<li>- Rispondere alle richieste degli utenti</li>
						<li>
							- Inviare comunicazioni relative ai servizi
							richiesti
						</li>
						<li>
							- Analizzare l’utilizzo del sito per migliorarne la
							funzionalità
						</li>
					</ul>
				</div>
				<div className="w-full bg-white h-[1px]"></div>

				{/* SECOND SECTION */}
				<div className="flex flex-row items-center justify-start gap-2 md:gap-6 mt-10 mt:mb-16 xl:mt-20 mb-4 mb:my-8 xl:mb-12">
					<BsCookie className="text-terzo text-xl md:text-2xl xl:text-4xl" />
					<h2 className="text-terzo font-orbitron text-lg md:text-2xl xl:text-4xl">
						Cookie Policy
					</h2>
				</div>
				<div className="mx-7 md:mx-12 xl:mx-16">
					<p className="mb-2">
						Il nostro sito utilizza cookie per migliorare
						l'esperienza di navigazione degli utenti.
					</p>
					<p className=" mb-4 md:mb-6">
						I cookie sono piccoli file di testo che i siti visitati
						inviano al browser dell'utente, dove vengono memorizzati
						per poi essere ritrasmessi agli stessi siti alla visita
						successiva.
					</p>
					<p className="font-bold mb-1">Cookie tecnici</p>
					<p className="mb-2">
						Necessari al funzionamenteo del sito e non richiedono
						consenso.
					</p>
					<p className="font-bold mb-1">Cookie Analitici</p>
					<p className=" mb-2">
						Utilizzati per raccogliere informazioni sull'utilizzo
						del sito in forma anonima.
					</p>
					<p className="font-bold mb-1">Cookie di terze parti</p>
					<p className="mb-6 md:mb-10 xl:mb-16">
						Potrebbero essere presenti cookie di servizi esterni
						(Google Analytics, social media, etc.).
					</p>
				</div>
				<div className="w-full bg-white h-[1px]"></div>

				{/* Thirds SECTION */}
				<div className="flex flex-row items-center justify-start gap-2 md:gap-6 mt-10 mt:mb-16 xl:mt-20 mb-4 mb:my-8 xl:mb-12">
					<BsLock className="text-terzo text-xl md:text-2xl xl:text-4xl" />
					<h2 className="text-terzo font-orbitron text-lg md:text-2xl xl:text-4xl">
						I tuoi diritti
					</h2>
				</div>
				<div className="mx-7 md:mx-12 xl:mx-16">
					<p className="font-bold mb-2 md:mb-4">
						I dati verranno trattati per:
					</p>
					<ul className="">
						<li>- Accedere ai tuoi dati personali</li>
						<li>- Chiederne la rettifica o la cancellazione</li>
						<li>- Richiedere la limitazione del trattamento</li>
						<li>- Richiedere la portabilità dei dati</li>
					</ul>
				</div>
				<div className="h-20 md:h-32"></div>
			</div>
		</div>
	)
}

export default PrivacyCookiesComponent
