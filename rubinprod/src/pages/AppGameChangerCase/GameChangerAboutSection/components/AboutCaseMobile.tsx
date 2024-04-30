import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Text } from '../../../../components/Text/Text'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

import gameChangerLogo from '../../../../assets/img/gameChanger/icoGameChanger.svg'

const StyledImage = styled.img`
    padding: 10px 25px 50px 25px;
    width: 250px;
    height: auto;
`

const ContentContainer = styled(FlexContainer)`
    padding: 0px 25px;
`

export const AboutCaseMobile = () => {
    return (
        <FlexContainer direction="column" alignItems="center" gap="75px">
            <FlexContainer justifyContent="space-between">
                <ContentContainer gap="10px" direction="column">
                    <Text $textTransform="uppercase" variant={'nav'}>
                        <Reveal y={-20} removeRepeatedReveal={false}>
                            Client
                        </Reveal>
                    </Text>
                    <Text $textTransform="uppercase" variant={'button'}>
                        <Reveal
                            delay={0.25}
                            y={-10}
                            removeRepeatedReveal={false}
                        >
                            Game Changer
                        </Reveal>
                    </Text>
                </ContentContainer>

                <ContentContainer gap="10px" direction="column">
                    <Text $textTransform="uppercase" variant={'nav'}>
                        <Reveal
                            delay={0.5}
                            y={-20}
                            removeRepeatedReveal={false}
                        >
                            Industry
                        </Reveal>
                    </Text>
                    <Text $textTransform="uppercase" variant={'button'}>
                        <Reveal
                            delay={0.75}
                            y={-10}
                            removeRepeatedReveal={false}
                        >
                            Hangover Patches
                        </Reveal>
                    </Text>
                </ContentContainer>
            </FlexContainer>

            <Reveal delay={1} y={20} removeRepeatedReveal={false}>
                <StyledImage src={gameChangerLogo} />
            </Reveal>
        </FlexContainer>
    )
}
