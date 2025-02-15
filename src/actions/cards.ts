'use server'

import { CreateCardSchema } from '@/lib/cards.schema'
import { createClient } from '@/supabase/server'
import { revalidatePath } from 'next/cache'
import { CardType } from '@/lib/cards-types'

export const getCards = async (): Promise<CardType[]> => {
	const supabase = await createClient()

	const { data, error } = await supabase.from('cards').select('*')

	if (error) {
		throw new Error(`Error fetching cards: ${error.message}`)
	}

	return data.map((card) => ({
		title: card.title,
		content: card.content,
		id: card.id,
	}))
}

export const createCard = async ({ title, content }: CreateCardSchema) => {
	const supabase = await createClient()

	const { data, error } = await supabase.from('cards').insert({
		title,
		content,
	})

	if (error) {
		throw new Error(`Error creating card: ${error.message}`)
	}

	revalidatePath('/admin/cards')

	return data
}

export const updateCard = async ({
	id,
	title,
	content,
}: CreateCardSchema & { id: number }) => {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from('cards')
		.update({
			title,
			content,
		})
		.match({ id })

	if (error) {
		throw new Error(`Error updating card: ${error.message}`)
	}

	revalidatePath('/admin/cards')

	return data
}

export const deleteCard = async (id: number) => {
	const supabase = await createClient()

	const { error } = await supabase.from('cards').delete().match({ id })

	if (error) {
		throw new Error(`Error deleting card: ${error.message}`)
	}

	revalidatePath('/admin/cards')
}
