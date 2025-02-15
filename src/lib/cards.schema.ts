import { z } from 'zod'

export const createCardSchema = z.object({
	title: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long' }),
	content: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long' }),
	id: z.number().optional(),
	intent: z.string().optional(),
})

export type CreateCardSchema = z.infer<typeof createCardSchema>

export const createCategorySchemaServer = z.object({
	imageUrl: z.string().min(1, { message: 'Image is required' }),
	name: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long' }),
})

export type CreateCategorySchemaServer = z.infer<
	typeof createCategorySchemaServer
>

export const updateCardSchema = z.object({
	title: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long' }),
	content: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long' }),
	id: z.number().optional(),
	intent: z.string().optional(),
})

export type UpdateCardSchema = z.infer<typeof updateCardSchema>
