'use server'

import { createClient } from '@/utils/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('login') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.error('Login error:', error)
        redirect(`/${formData.get('locale')}/error`)
    }

    revalidatePath('/', 'layout')

    const locale = formData.get('locale') as string
    redirect(`/${locale}/community`)
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('login') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.error('Signup error:', error)
        redirect(`/${formData.get('locale')}/error`)
    }

    revalidatePath('/', 'layout')
    redirect(`/${formData.get('locale')}`)
}
