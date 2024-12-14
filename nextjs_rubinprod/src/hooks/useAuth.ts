import { supabase } from '@/lib/supabaseClient'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
                error,
            } = await supabase.auth.getUser()
            if (user) setUser(user)
        }
        fetchUser()
    }, [])

    return { user }
}
