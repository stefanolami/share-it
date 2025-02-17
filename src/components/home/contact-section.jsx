'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/actions/email'
import { useState } from 'react'

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
	message: z.string().min(2).max(50),
})

const ContactSection = () => {
	const [responseMessage, setResponseMessage] = useState('')
	const [responseError, setResponseError] = useState('')
	const [isSending, setIsSending] = useState(false)

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})

	// 2. Define a submit handler.
	const onSubmit = (values) => {
		setIsSending(true)
		const { response, err } = sendEmail(values)

		if (!response || err) {
			setResponseMessage('')
			setResponseError("Errore nell'invio del messaggio")
			setIsSending(false)
			console.log(err)
		}
		setResponseError('')
		setResponseMessage('Messaggio inviato con successo')
		setIsSending(false)
		form.reset()
	}
	return (
		<div className="bg-terzo relative inset-shadow">
			<div className="absolute bg-black/70 w-full h-full"></div>
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
									name="name"
									render={({ field }) => (
										<FormItem className="mb-4 md:mb-0">
											<FormLabel className="text-lg">
												Nome
											</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder=""
													{...field}
													className="bg-primo-chiaro/70 border-primo-scuro"
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
													className="bg-primo-chiaro/70 border-primo-scuro"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-lg">
											Messaggio
										</FormLabel>
										<FormControl>
											<Textarea
												placeholder=""
												{...field}
												className="bg-primo-chiaro/70 border-primo-scuro h-32"
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
							{responseMessage && (
								<div className="mx-auto font-titillium text-green-600 text-center">
									{responseMessage}
								</div>
							)}
							{responseError && (
								<div className="mx-auto font-titillium text-red-600 text-center">
									{responseError}
								</div>
							)}
						</form>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default ContactSection
