import { createClient } from '@/utils/server'
import React from 'react'
import { CommunityMainSection } from './CommunityPage/CommunityMainSection/CommunityMainSection'
import { CommunityVideosSection } from './CommunityPage/CommunityVideos/CommunityVideosSection'

export default async function Community() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()

    return <CommunityContent error={error} user={data?.user} />
}

function CommunityContent({ error, user }: { error: any; user?: any }) {
    if (error || !user) {
        return <div className="animation-container">You are not logged in!</div>
    }

    return (
        <div className="animation-container">
            <CommunityMainSection />
            <CommunityVideosSection />
        </div>
    )
}
