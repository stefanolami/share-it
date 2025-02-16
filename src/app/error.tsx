'use client' // Error boundaries must be Client Components

import ErrorComponent from '@/components/error-component'
import Header from '@/components/header/header'
import { useEffect } from 'react'

export default function Error({
	error,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<>
			<Header />
			<main>
				<ErrorComponent text="ERROR" />
			</main>
		</>
	)
}
