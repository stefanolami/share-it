'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form'
import { Input } from './ui/input'

const formSchema = z.object({
	nome: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
	messaggio: z.string().min(2).max(50),
})

const ContactSection = () => {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nome: '',
			email: '',
			messaggio: '',
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}
	return (
		<div className="bg-primo p-16">
			<h2 className="font-orbitron text-secondo font-bold text-center text-3xl">
				Contattaci
			</h2>
			<div className="mx-auto mt-16 max-w-[900px] text-white">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											placeholder="shadcn"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</div>
		</div>
	)
}

export default ContactSection
