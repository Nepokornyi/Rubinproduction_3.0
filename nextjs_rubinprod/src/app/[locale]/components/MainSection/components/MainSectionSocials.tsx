import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const MainSectionSocials = () => {
    return (
        <FlexContainer
            alignItems="items-center"
            justifyContent="justify-evenly"
            className="md:gap-16 absolute -bottom-16 md:-left-4 md:bottom-1/2 md:translate-y-1/2 md:[writing-mode:vertical-lr] md:rotate-180 md:w-auto"
        >
            <LinkTransition href="https://www.instagram.com/who1snick">
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Instagram
                </Text>
            </LinkTransition>
            <LinkTransition href="https://www.behance.net/who1snick">
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Behance
                </Text>
            </LinkTransition>
            <LinkTransition href="https://www.youtube.com/@who1snick466/videos">
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Youtube
                </Text>
            </LinkTransition>
        </FlexContainer>
    )
}
