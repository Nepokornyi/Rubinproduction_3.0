import { Arrow } from '@/components/Arrow/Arrow'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import solution from '@/assets/img/scooty/solution/solution.png'
import solutionMobile from '@/assets/img/scooty/solution/solutionMobile.png'
import { Reveal } from '@/components/Reveal/Reveal'

export const ScootySolutionSection = () => {
    const t = useTranslations('ScootyCase')

    return (
        <FlexContainer
            className="pt-36 pb-24"
            gap="gap-10"
            direction="flex-col"
            center
        >
            <FlexContainer
                gap="gap-10"
                justifyContent="justify-center"
                className="flex-col lg:flex-row px-6 md:px-16 lg:px-0"
            >
                <FlexContainer width="w-auto" direction="flex-col">
                    <Text
                        variant="h2"
                        textTransform="uppercase"
                        className="mb-5"
                    >
                        Landing
                    </Text>
                    <LinkTransition
                        href="https://www.scooty.cz"
                        className="text-left lg:text-right"
                    >
                        <Text variant="nav">Scooty.cz</Text>
                    </LinkTransition>
                </FlexContainer>
                <Arrow direction="down" className="h-28 hidden lg:block" />
                <Text className="max-w-[700px]">{t('solution')}</Text>
            </FlexContainer>

            <Reveal y={20} removeRepeatedReveal={false}>
                <Image src={solution} alt="" className="hidden md:block" />
            </Reveal>
            <Reveal y={20} removeRepeatedReveal={false}>
                <Image
                    src={solutionMobile}
                    alt=""
                    className="block md:hidden"
                />
            </Reveal>
        </FlexContainer>
    )
}
