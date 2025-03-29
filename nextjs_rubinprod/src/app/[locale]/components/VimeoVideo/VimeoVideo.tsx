import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React, { useEffect, useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { subscribe } from '../../community/utils/subscriptionApi'
import { Text } from '@/components/Text/Text'
import { Box } from '@/components/Box/Box'
import Image from 'next/image'

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
    const [thumbnail, setThumbnail] = useState('')

    useEffect(() => {
        if (!isSubscribed) setThumbnail(`https://vumbnail.com/${id}.jpg`)
    }, [id, isSubscribed])

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
            allow="fullscreen;"
            className={`w-full h-full outline-none ${className}`}
        />
    )

    const renderLockedVideo = () => (
        <>
            <Box className="w-full h-full">
                {thumbnail && (
                    <Image
                        src={thumbnail}
                        alt="video preview"
                        layout="fill"
                        objectFit="cover"
                        className="blur-sm"
                    />
                )}
            </Box>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 p-4 rounded-2xl border border-white bg-[rgba(28,28,28,0.5)]  hover:bg-[#1c1c1c] transition-colors cursor-pointer whitespace-nowrap"
                onClick={handleLockClick}
            >
                <FaLock className="mt-1.5 text-1xl transition-transform" />
                <Text padding="px-0">Odemknout za 29Kč</Text>
            </div>
        </>
    )

    return (
        <>
            <FlexContainer
                width="w-full"
                className={`bg-[#111111] relative aspect-video ${className}`}
            >
                {isSubscribed ? renderVideo() : renderLockedVideo()}
            </FlexContainer>
        </>
    )
}
