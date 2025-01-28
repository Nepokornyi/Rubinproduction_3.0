import { Box } from '@/components/Box/Box'
import React from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { useRouter } from 'next/navigation'
import { Text } from '@/components/Text/Text'
import { subscribe } from '../../utils/subscriptionApi'
import { useSubscriptionContext } from '../../context/SubscriptionContext'
import { VimeoVideo } from '../../../components/VimeoVideo/VimeoVideo'
import { communityGridStyles, CommunityVideosGridTypes } from './const'
import { FaLock } from 'react-icons/fa'

type CommunityVideosGridProps = {
    content: any[]
    variant: CommunityVideosGridTypes
}

export const CommunityVideosGrid = ({
    content,
    variant,
}: CommunityVideosGridProps) => {
    const { isSubscribed } = useSubscriptionContext()
    const router = useRouter()

    const handleSubscribe = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const { url } = await subscribe(locale)
            router.push(url)
        } catch (error) {}
    }

    const handleLockClick = (e: React.MouseEvent<SVGElement>) => {
        const lockIcon = e.currentTarget
        lockIcon.classList.add('animate-pulse')
        setTimeout(handleSubscribe, 300)
    }

    return (
        <Box className="w-full grid grid-cols-1 px-5 gap-5 lg:grid-cols-2 auto-rows-auto">
            {content.map(({ title, description, videoUrl }) => (
                <FlexContainer
                    key={title}
                    direction="flex-col"
                    className={`${communityGridStyles[variant].background} rounded-2xl`}
                >
                    <Box className="w-full">
                        <VimeoVideo id={videoUrl} className="rounded-t-2xl" />
                        <FlexContainer className="px-3 py-3">
                            <Text
                                variant="socials"
                                className={`${communityGridStyles[variant].title} w-full`}
                            >
                                {title}
                            </Text>
                            {!isSubscribed && variant === 'paid' && (
                                <FaLock
                                    className="mt-1.5 cursor-pointer transition-transform"
                                    onClick={handleLockClick}
                                />
                            )}
                        </FlexContainer>
                        <Text
                            padding="px-3 pb-6"
                            className={`${communityGridStyles[variant].text} w-full`}
                        >
                            {description}
                        </Text>
                    </Box>
                </FlexContainer>
            ))}
        </Box>
    )
}
