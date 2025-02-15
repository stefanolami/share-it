import HeaderAdmin from '@/components/admin/header-admin'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ShareIT',
	description: 'Join the innovation!',
}

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<HeaderAdmin />
			<main className="bg-primo-scuro pt-48 min-h-screen">
				{children}
			</main>
		</>
	)
}
