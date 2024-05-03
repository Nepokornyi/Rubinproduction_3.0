import styled from 'styled-components'
import { Reveal } from '../../../../components/animations/reveal/Reveal'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { CustomArrowDown } from '../../../../components/Arrow/Arrow'
import { Text } from '../../../../components/Text/Text'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 0 50px;
`

const StyledCustomArrowDown = styled(CustomArrowDown)`
    position: absolute;
    height: ${(props) =>
        props.$isFullHeight ? '100%' : 'clamp(80px, 20vw, 100px)'};
    &::before {
        height: ${(props) =>
            props.$isFullHeight ? '100%' : 'clamp(80px, 20vw, 100px)'};
    }
`

export const AboutChallengeMobile = () => {
    const render = <StyledCustomArrowDown $isFullHeight />

    return (
        <StyledFlexContainer direction="column" gap={'10px'}>
            <Reveal
                style={{
                    position: 'absolute',
                    height: '100%',
                    left: '40px',
                    bottom: '-15px',
                }}
                y={-25}
                delay={1}
                removeRepeatedReveal={false}
            >
                {render}
            </Reveal>
            <Text
                $textTransform="uppercase"
                $paddingOverride="0 0 20px 25px"
                variant={'nav'}
            >
                <Reveal delay={0.6} removeRepeatedReveal={false}>
                    Services
                </Reveal>
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                <Reveal delay={0.9} removeRepeatedReveal={false}>
                    Social Media
                </Reveal>
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                <Reveal delay={1.2} removeRepeatedReveal={false}>
                    Advertising, motion
                </Reveal>
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                <Reveal delay={1.5} removeRepeatedReveal={false}>
                    Design, product
                </Reveal>
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                <Reveal delay={1.8} removeRepeatedReveal={false}>
                    Photography
                </Reveal>
            </Text>
        </StyledFlexContainer>
    )
}
