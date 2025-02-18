import { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'

/* import { Card } from '@/components/ui/card' */
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
/* import { ScrollArea } from '@/components/ui/scroll-area' */
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { TableCell, TableRow } from '@/components/ui/table'
import { CreateCardSchema } from '@/lib/cards.schema'

type CardType = {
	title: string
	content: string
	id: number
}

export const CardRow = ({
	card,
	setCurrentCard,
	setIsCreateCardModalOpen,
	deleteCardHandler,
}: {
	card: CardType
	setCurrentCard: (category: CreateCardSchema | null) => void
	setIsCreateCardModalOpen: (isOpen: boolean) => void
	deleteCardHandler: (id: number) => Promise<void>
}) => {
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

	const handleEditClick = (card: CreateCardSchema) => {
		setCurrentCard({
			title: card.title,
			content: card.content,
			intent: 'update',
			id: card.id,
		})
		setIsCreateCardModalOpen(true)
	}

	const handleDelete = async () => {
		await deleteCardHandler(card.id)
		setIsDeleteDialogOpen(false)
	}

	return (
		<>
			<TableRow className="hover:bg-primo/70">
				<TableCell className="font-medium p-4">{card.title}</TableCell>
				<TableCell className="font-medium">{card.content}</TableCell>

				<TableCell>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger>
							<div>
								<MoreHorizontal className="h-4 w-4" />
								<span className="sr-only">Open menu</span>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className="w-[160px] bg-primo-scuro-2 text-white font-titillium"
						>
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuItem
								className="cursor-pointer hover:bg-secondo"
								onClick={() => handleEditClick(card)}
							>
								Edit
							</DropdownMenuItem>
							<DropdownMenuItem
								className="cursor-pointer"
								onClick={() => setIsDeleteDialogOpen(true)}
							>
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</TableCell>
			</TableRow>

			<Dialog
				open={isDeleteDialogOpen}
				onOpenChange={() => setIsDeleteDialogOpen(!isDeleteDialogOpen)}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently
							delete this category.
						</DialogDescription>
					</DialogHeader>
					<div className="flex justify-end gap-4">
						<Button
							variant="outline"
							onClick={() => setIsDeleteDialogOpen(false)}
						>
							Cancel
						</Button>
						<Button
							variant="destructive"
							onClick={handleDelete}
						>
							Confirm Delete
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
