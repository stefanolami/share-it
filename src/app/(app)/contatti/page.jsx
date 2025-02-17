import React from 'react'
import HeroSmall from '@/components/hero/hero-small'

const ContattiPage = () => {
	return (
		<>
			<HeroSmall title="Contatti" />
			<div className="w-full h-[800px] grid grid-rows-5">
				<div className="bg-primo-scuro-2"></div>
				<div className="bg-primo-scuro"></div>
				<div className="bg-primo"></div>
				<div className="bg-primo-chiaro"></div>
				<div className="bg-primo-chiaro-2"></div>
			</div>
		</>
	)
}

export default ContattiPage
