import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/Reveal/Reveal'
import Image from 'next/image'
import author from '@/assets/img/scooty/author.png'
import quoteUp from '@/assets/img/quoteUp.png'
import quoteDown from '@/assets/img/quoteDown.png'
import { BsLinkedin } from 'react-icons/bs'
import { Box } from '@/components/Box/Box'
import { LinkTransition } from '@/components/LinkTransition/LinkTransition'

export const Feedback = () => {
    const t = useTranslations('ScootyCase')

    return (
        <FlexContainer
            gap="gap-16"
            className="flex-col xl:flex-row px-6 md:px-0"
            center
        >
            <Reveal removeRepeatedReveal={false}>
                <Image src={author} alt="Nikita portrait" />
            </Reveal>
            <FlexContainer direction="flex-col" className="max-w-[725px]">
                <Box className="mb-16">
                    <Image
                        src={quoteUp}
                        alt="quote up"
                        className="absolute -top-10 -left-0 lg:-left-14"
                    />
                    <Text>{t('feedback')}</Text>
                    <Image
                        src={quoteDown}
                        alt="quote down"
                        className="absolute -bottom-10 -right-0 lg:-right-14"
                    />
                </Box>

                <LinkTransition href="https://www.linkedin.com/in/nikita-rubin-a4a04b190/">
                    <Text
                        variant="h5"
                        textTransform="uppercase"
                        className="flex items-center gap-2"
                    >
                        Nikita Rubin <BsLinkedin />
                    </Text>
                </LinkTransition>
                <Text variant="socials">Founder of Rubin Production</Text>
            </FlexContainer>
        </FlexContainer>
    )
}
