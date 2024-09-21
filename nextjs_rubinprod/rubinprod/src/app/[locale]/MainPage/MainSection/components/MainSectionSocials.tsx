import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const MainSectionSocials = () => {
    return (
        <FlexContainer
            gap="gap-16"
            alignItems="items-center"
            className="absolute bottom-0 md:-left-4 md:bottom-1/2 md:translate-y-1/2 md:[writing-mode:vertical-lr] md:rotate-180 md:w-auto"
        >
            <a href="https://www.instagram.com/who1snick">
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Instagram
                </Text>
            </a>
            <a href="https://www.behance.net/who1snick">
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Behance
                </Text>
            </a>
            <a href="https://www.youtube.com/@who1snick466/videos">
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Youtube
                </Text>
            </a>
        </FlexContainer>
    )
}
