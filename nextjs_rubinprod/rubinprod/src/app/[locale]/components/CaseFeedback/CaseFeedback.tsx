import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { Reveal } from '@/components/Reveal/Reveal'
import Image, { StaticImageData } from 'next/image'
import quoteUp from '@/assets/img/quoteUp.png'
import quoteDown from '@/assets/img/quoteDown.png'
import { BsLinkedin } from 'react-icons/bs'
import { Box } from '@/components/Box/Box'
import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import { ParallaxContainer } from '@/components/Parallax/ParallaxContainer'

export type CaseFeedbackProps = {
    img: StaticImageData
    alt: string
    feedback: string | React.ReactNode
    link: string
    name: string
    position: string
}

export const CaseFeedback = ({ config }: { config: CaseFeedbackProps }) => {
    return (
        <>
            <ParallaxContainer
                isTransparent
                text="strategy, schooting, animation, instagram feed, branding and design"
                isCase
            />
            <FlexContainer
                gap="gap-16"
                className="flex-col xl:flex-row px-6 md:px-0"
                center
            >
                <Reveal removeRepeatedReveal={false}>
                    <Image src={config.img} alt={config.alt} />
                </Reveal>
                <FlexContainer direction="flex-col" className="max-w-[725px]">
                    <Box className="mb-16">
                        <Image
                            src={quoteUp}
                            alt="quote up"
                            className="absolute -top-10 -left-0 lg:-left-14"
                        />
                        <Text>{config.feedback}</Text>
                        <Image
                            src={quoteDown}
                            alt="quote down"
                            className="absolute -bottom-10 -right-0 lg:-right-14"
                        />
                    </Box>

                    <LinkTransition href={config.link}>
                        <Text
                            variant="h5"
                            textTransform="uppercase"
                            className="flex items-center gap-2"
                        >
                            {config.name} <BsLinkedin />
                        </Text>
                    </LinkTransition>
                    <Text variant="socials">{config.position}</Text>
                </FlexContainer>
            </FlexContainer>
            <ParallaxContainer
                isTransparent
                text="photo/video editing, creative treatment, project planning, assistance"
                placeBottom
                isCase
            />
        </>
    )
}
