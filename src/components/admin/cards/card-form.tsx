import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { CreateCardSchema } from '@/lib/cards.schema'
import { Textarea } from '@/components/ui/textarea'

export const CardForm = ({
	form,
	onSubmit,
	defaultValues,
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: any
	onSubmit: SubmitHandler<CreateCardSchema>
	defaultValues: CreateCardSchema | null
}) => {
	const isSubmitting = form.formState.isSubmitting

	useEffect(() => {
		if (defaultValues) {
			form.reset(defaultValues)
		} else {
			form.reset({ title: '', content: '' })
		}
	}, [defaultValues, form])

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 bg-primo-scuro-2 text-white font-titillium"
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input
									disabled={isSubmitting}
									placeholder="Title"
									{...field}
									className="bg-primo"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<Textarea
									disabled={isSubmitting}
									placeholder="Content"
									{...field}
									className="bg-primo"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={isSubmitting}
					type="submit"
					variant="outline"
					className="bg-terzo text-primo-scuro-2 "
				>
					Submit
				</Button>
			</form>
		</Form>
	)
}
