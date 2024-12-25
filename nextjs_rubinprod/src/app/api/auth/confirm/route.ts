import { getCurrentLocale } from '@/helpers/getCurrentLocale'
import { createClient } from '@/utils/server'
import { EmailOtpType } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const next = searchParams.get('next') ?? '/'

    const currentLocale = getCurrentLocale(request.nextUrl.pathname, 1)

    if (token_hash && type) {
        const supabase = await createClient()

        const { data: userData, error: getUserError } =
            await supabase.auth.getUser()
        if (!getUserError && userData.user.email_confirmed_at) {
            return redirect(`/${currentLocale}${next}`)
        }

        const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash,
            type,
        })

        if (!verifyError) {
            return redirect(`/${currentLocale}${next}`)
        }

        if (verifyError.status === 403 && verifyError.code === 'otp_expired') {
            console.warn('Token expired')
        } else {
            console.error('Error confirming OTP:', verifyError)
        }
    }
    redirect(`/${currentLocale}/error`)
}
