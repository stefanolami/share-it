'use client'

import React, { useState } from 'react'
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import {
	useMotionValueEvent,
	AnimatePresence,
	useScroll,
	motion,
} from 'framer-motion'
import useMeasure from 'react-use-measure'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './nav-bar'

const Header = () => {
	return (
		<>
			<FlyoutNav />
			{/* <div
				className="relative min-h-screen"
				style={{
					backgroundImage: 'url(/)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/90 to-neutral-950/0" />
			</div>
			<div className="h-screen bg-neutral-50" /> */}
		</>
	)
}

const FlyoutNav = () => {
	const [scrolled, setScrolled] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setScrolled(latest > 100 ? true : false)
	})

	return (
		<nav
			className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-500 ease-out lg:px-12
      ${
			scrolled
				? 'bg-primo-scuro-2 py-3 shadow-xl'
				: 'bg-transparent py-6 shadow-none'
		}`}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				<Logo />
				<div className="hidden gap-6 lg:flex">
					<NavBar />
				</div>
				<MobileMenu />
			</div>
		</nav>
	)
}

const Logo = ({ color = 'white' }) => {
	// Temp logo from https://logoipsum.com/
	return (
		<div className="flex items-center gap-2">
			<Link href="/">
				<div className=" bg-gradient-to-r from-secondo to-terzo bg-clip-text text-3xl md:text-[42px] lg:text-[50px] font-bold font-orbitron text-transparent">
					Share<span className="font-normal">IT</span>
					{/* <Image
					alt="pic"
					fill
					src={'/logo.png'}
				/> */}
				</div>
			</Link>

			{/* <svg
				width="50"
				height="39"
				viewBox="0 0 50 39"
				fill={color}
				xmlns="http://www.w3.org/2000/svg"
				className="w-10"
			>
				<path
					d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
					stopColor={color}
				></path>
				<path
					d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
					stopColor={color}
				></path>
			</svg> */}
		</div>
	)
}

const Links = () => {
	return (
		<div className="flex items-center gap-6">
			{LINKS.map((l) => (
				<NavLink
					key={l.text}
					href={l.href}
				>
					{l.text}
				</NavLink>
			))}
		</div>
	)
}

const NavLink = ({ children, href, FlyoutContent }) => {
	return (
		<div className="relative h-fit w-fit">
			<a
				href={href}
				className="relative"
			>
				{children}
				<span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out" />
			</a>
		</div>
	)
}

/* const CTAs = () => {
	return (
		<div className="flex items-center gap-3">
			<button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
				<FaUserCircle />
				<span>Sign in</span>
			</button>
			<button className="rounded-lg border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
				Schedule a Demo
			</button>
		</div>
	)
} */

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }) => {
	const [ref, { height }] = useMeasure()
	const [open, setOpen] = useState(false)

	return (
		<div className="relative text-white">
			{FoldContent ? (
				<div
					className="flex w-full cursor-pointer items-center justify-between border-b border-primo-scuro-2 py-6 text-start text-2xl font-semibold"
					onClick={() => setOpen((pv) => !pv)}
				>
					<a
						onClick={(e) => {
							e.stopPropagation()
							setMenuOpen(false)
						}}
						href={href}
					>
						{children}
					</a>
					<motion.div
						animate={{ rotate: open ? '180deg' : '0deg' }}
						transition={{
							duration: 0.3,
							ease: 'easeOut',
						}}
					>
						<FiChevronDown />
					</motion.div>
				</div>
			) : (
				<a
					onClick={(e) => {
						e.stopPropagation()
						setMenuOpen(false)
					}}
					href="#"
					className="flex w-full cursor-pointer items-center justify-between border-b border-terzo py-6 text-start text-2xl font-semibold"
				>
					<span>{children}</span>
					<FiArrowRight className="text-" />
				</a>
			)}
			{FoldContent && (
				<motion.div
					initial={false}
					animate={{
						height: open ? height : '0px',
						marginBottom: open ? '24px' : '0px',
						marginTop: open ? '12px' : '0px',
					}}
					className="overflow-hidden"
				>
					<div ref={ref}>
						<FoldContent />
					</div>
				</motion.div>
			)}
		</div>
	)
}

const MobileMenu = () => {
	const [open, setOpen] = useState(false)
	return (
		<div className="block lg:hidden">
			<button
				onClick={() => setOpen(true)}
				className="block text-3xl"
			>
				<FiMenu />
			</button>
			<AnimatePresence>
				{open && (
					<motion.nav
						initial={{ x: '100vw' }}
						animate={{ x: 0 }}
						exit={{ x: '100vw' }}
						transition={{ duration: 0.15, ease: 'easeOut' }}
						className="fixed left-0 top-0 flex h-screen w-full flex-col bg-primo-scuro"
					>
						<div className="flex items-center justify-between p-6">
							<Logo color="black" />
							<button onClick={() => setOpen(false)}>
								<FiX className="text-3xl text-white" />
							</button>
						</div>
						<div className="h-screen bg-primo p-6">
							{LINKS.map((l) => (
								<MobileMenuLink
									key={l.text}
									href={l.href}
								>
									{l.text}
								</MobileMenuLink>
							))}
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Header

const LINKS = [
	{
		text: 'Chi Siamo',
		href: '/chi-siamo',
	},
	{
		text: 'Portfolio',
		href: '/portfolio',
	},
	{
		text: 'Contatti',
		href: '/contatti',
	},
]
