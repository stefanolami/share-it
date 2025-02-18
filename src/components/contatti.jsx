'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { useState } from 'react'
import { sendEmail } from '@/actions/email'
import { BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs'

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
	message: z.string().min(2).max(50),
})

const ContattiComponent = () => {
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
		<div className="w-full bg-primo py-12">
			<div className="w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2 h-full mx-auto">
				<div className="mx-auto max-w-4xl text-white p-12 font-titillium">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8 mb-12"
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
								className="bg-gradient-to-r from-secondo to-terzo text-primo font-bold text-lg mr-auto py-5 flex shadow-lg hover:opacity-80 hover:shadow-xl"
							>
								Invia Messaggio
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
					<div className="grid grid-rows-3 md:grid-rows-0 md:grid-cols-3 gris gap-2 text-primo">
						<a href="mailto:info@shareitwebagency.com">
							<div className="px-2 py-1 h-full bg-gradient-to-r from-secondo to-terzo rounded-md flex items-center justify-center gap-2">
								<BsEnvelope className="text-sm" />
								<span className="text-sm">
									info@shareitwebagency.com
								</span>
							</div>
						</a>
						<a href="tel:+393476344646">
							<div className="px-2 h-full py-1 bg-gradient-to-r from-secondo to-terzo rounded-md flex items-center justify-center gap-2">
								<BsTelephone className="text-sm" />
								<span className="text-sm">+393476344646</span>
							</div>
						</a>
						<div className="px-2 py-1 h-full bg-gradient-to-r from-secondo to-terzo rounded-md flex items-center justify-center gap-2">
							<BsGeoAlt className="text-sm" />
							<span className="text-sm">
								Via Achille Grandi 138, 41019, Soliera (MO)
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContattiComponent
