import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { FaLock } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { subscribe } from '../../community/utils/subscriptionApi'
import { Text } from '@/components/Text/Text'

type VimeoVideoProps = {
    id: number
    className?: string
    isSubscribed?: boolean
}

export const VimeoVideo = ({
    id,
    className = 'rounded-2xl',
    isSubscribed = true,
}: VimeoVideoProps) => {
    const router = useRouter()

    const handleSubscribe = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const { url } = await subscribe(locale)
            router.push(url)
        } catch (error) {}
    }

    const handleLockClick = (e?: React.MouseEvent<HTMLDivElement>) => {
        const lockIcon = e!.currentTarget
        lockIcon.classList.add('animate-pulse')
        setTimeout(handleSubscribe, 300)
    }

    const renderVideo = () => (
        <iframe
            src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className={`w-full h-full outline-none ${className}`}
        />
    )

    const renderLockedVideo = () => (
        <FlexContainer
            width="w-auto"
            gap="gap-2"
            className="border border-white p-4 rounded-2xl cursor-pointer hover:bg-[#1c1c1c] transition-colors"
            onClick={handleLockClick}
        >
            <FaLock className="mt-1.5 text-1xl transition-transform" />
            <Text>Odemknout za 29Kč</Text>
        </FlexContainer>
    )

    return (
        <>
            <FlexContainer
                width="w-full"
                className={`bg-[#111111] relative aspect-video ${className}`}
                center
            >
                {isSubscribed ? renderVideo() : renderLockedVideo()}
            </FlexContainer>
        </>
    )
}
