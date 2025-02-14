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
import { Textarea } from './ui/textarea'

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
		<div className="bg-terzo relative">
			<div className="absolute bg-black/60 w-full h-full"></div>
			<div className="w-full h-full z-10 relative py-16 px-4">
				<h2 className="font-orbitron text-secondo font-bold text-center text-3xl">
					Contattaci
				</h2>
				<div className="mx-auto mt-16 max-w-[900px] text-white bg-primo p-12 rounded-xl shadow-lg font-titillium">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<div className="md:grid grid-cols-2 gap-8">
								<FormField
									control={form.control}
									name="nome"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-lg">
												Nome
											</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder=""
													{...field}
													className="bg-primo-chiaro/50 border-primo-scuro"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-lg">
												Email
											</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder=""
													{...field}
													className="bg-primo-chiaro/50 border-primo-scuro"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="messaggio"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-lg">
											Messaggio
										</FormLabel>
										<FormControl>
											<Textarea
												placeholder=""
												{...field}
												className="bg-primo-chiaro/50 border-primo-scuro h-32"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="bg-secondo text-primo font-bold text-lg px-10 py-5 mx-auto flex shadow-lg hover:bg-secondo/80 hover:shadow-xl"
							>
								Invia
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default ContactSection
