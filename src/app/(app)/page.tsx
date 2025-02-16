import ContactSection from '@/components/home/contact-section'
import CardSection from '@/components/home/cards-section'
import { Hero } from '@/components/hero/hero'

export default function Home() {
	return (
		<>
			<Hero />
			<CardSection />
			<ContactSection />
		</>
	)
}
