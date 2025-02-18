import { getCards } from '@/actions/cards'
import CardsAdmin from '@/components/admin/cards/cards-admin'
import React from 'react'

const CardsAdminPage = async () => {
	const cards = await getCards()
	return (
		<div className="pb-32 bg-primo-scuro">
			<CardsAdmin cards={cards} />
		</div>
	)
}

export default CardsAdminPage
