'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PlusCircle } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
/* import { v4 as uuid } from 'uuid' */

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import { CardRow } from '@/components/admin/cards/card-row'
import { createCardSchema, CreateCardSchema } from '@/lib/cards.schema'
import { CardForm } from '@/components/admin/cards/card-form'
/* import {
	createCard,
	deleteCard,
	imageUploadHandler,
	updateCard,
} from '@/actions/categories' */
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { createCard, deleteCard, updateCard } from '@/actions/cards'
import { CardType } from '@/lib/cards-types'

type Props = {
	cards: CardType[]
}

const CardsAdmin = ({ cards }: Props) => {
	const [isCreateCardModalOpen, setIsCreateCardModalOpen] = useState(false)
	const [currentCard, setCurrentCard] = useState<CreateCardSchema | null>(
		null
	)

	const form = useForm<CreateCardSchema>({
		resolver: zodResolver(createCardSchema),
		defaultValues: {
			title: '',
			content: '',
		},
	})

	const router = useRouter()

	const submitCardHandler: SubmitHandler<CreateCardSchema> = async (data) => {
		const { title, content, intent = 'create' } = data

		switch (intent) {
			case 'create':
				{
					await createCard({ title, content })
					form.reset()
					router.refresh()
					setIsCreateCardModalOpen(false)
					toast.success('Card created successfully')
				}
				break
			case 'update': {
				if (currentCard?.id) {
					try {
						await updateCard({
							title,
							content,
							id: currentCard.id,
						})
						setIsCreateCardModalOpen(false)
						toast.success('Category updated successfully')
						form.reset()
						router.refresh()
					} catch (error) {
						console.error('Error updating category', error)
						toast.error('Error updating category')
					}
				}

				break
			}
			default:
				console.error('Invalid intent')
		}
	}

	const deleteCardHandler = async (id: number) => {
		await deleteCard(id)
		router.refresh()
		toast.success('Category deleted successfully')
	}

	return (
		<div className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 pt-36 mx-auto w-3/4">
			<div className="flex items-center my-10 px-8">
				<h1 className="text-2xl font-bold text-white font-titillium">
					Cards
				</h1>
				<div className="ml-auto flex items-center gap-2">
					<Dialog
						open={isCreateCardModalOpen}
						onOpenChange={() =>
							setIsCreateCardModalOpen(!isCreateCardModalOpen)
						}
					>
						<DialogTrigger asChild>
							<Button
								size="sm"
								className="bg-secondo text-primo font-bold text-lg px-10 py-5 mx-auto flex shadow-lg hover:bg-secondo/80 hover:shadow-xl"
								onClick={() => {
									setIsCreateCardModalOpen(true)
									setCurrentCard(null)
								}}
							>
								<PlusCircle className="h-3.5 w-3.5" />
								<span className="sr-only sm:not-sr-only sm:whitespace-nowrap font-semi-bold">
									Add Card
								</span>
							</Button>
						</DialogTrigger>
						<DialogContent className="bg-primo-scuro-2 text-white font-titillium">
							<DialogHeader>
								<DialogTitle>Create Card</DialogTitle>
							</DialogHeader>
							<CardForm
								defaultValues={currentCard}
								form={form}
								onSubmit={submitCardHandler}
							/>
						</DialogContent>
					</Dialog>
				</div>
			</div>
			<Card className="overflow-x-auto bg-primo hover:bg-primo/70 text-white">
				<CardContent>
					<Table className="min-w-[600px]">
						<TableHeader>
							<TableRow className="hover:bg-primo/70">
								<TableHead>Name</TableHead>
								<TableHead className="md:table-cell">
									Content
								</TableHead>
								<TableHead>
									<span className="sr-only">Actions</span>
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{cards?.map((card) => (
								<CardRow
									key={card.id}
									card={card}
									setCurrentCard={setCurrentCard}
									setIsCreateCardModalOpen={
										setIsCreateCardModalOpen
									}
									deleteCardHandler={deleteCardHandler}
								/>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	)
}

export default CardsAdmin
