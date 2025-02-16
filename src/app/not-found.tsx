import ErrorComponent from '@/components/error-component'
import Header from '@/components/header/header'

export default function NotFound() {
	return (
		<>
			<Header />
			<main>
				<ErrorComponent text="404" />
			</main>
		</>
	)
}
