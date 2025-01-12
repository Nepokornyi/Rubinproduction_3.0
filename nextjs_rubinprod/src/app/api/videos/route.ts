import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'
import { videoConfig } from '@/config/videos'

export async function GET(request: NextRequest) {
    const supabase = await createClient()

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: profile, error } = await supabase
        .from('profiles')
        .select('is_subscribed, subscription_revocation_date')
        .eq('id', user.id)
        .single()

    if (error || !profile) {
        return NextResponse.json(
            { error: 'Failed to fetch profile' },
            { status: 500 }
        )
    }

    const isRevoked =
        profile.subscription_revocation_date &&
        new Date(profile.subscription_revocation_date) <= new Date()

    const isSubscribed = profile.is_subscribed && !isRevoked

    const videos = videoConfig.map((video) => ({
        ...video,
        videoUrl: isSubscribed ? video.videoUrl : video.preview,
    }))

    return NextResponse.json({ videos })
}
