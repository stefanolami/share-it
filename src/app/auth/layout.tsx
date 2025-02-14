import { createClient } from '@/supabase/server'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const AuthLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
	const supabase = await createClient()

	const { data: authData } = await supabase.auth.getUser()

	if (authData?.user) {
		return redirect('/admin')
	}
	console.log('AUTHDATA:', authData.user)

	return <>{children}</>
}

export default AuthLayout
