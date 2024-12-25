import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { createClient } from '@/utils/server'
import React from 'react'

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
            <FlexContainer className="relative h-screen bg-no-repeat bg-[url('/img/showreel.jpg')] bg-top bg-cover pt-52 pb-32 overflow-hidden md:items-center items-start">
                <Text variant="h2" textTransform="uppercase">
                    Community
                </Text>
                {user.email}
            </FlexContainer>
        </div>
    )
}
