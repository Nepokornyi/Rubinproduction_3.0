import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { AnimatedCircleText } from './AnimatedCircleText'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

const HeadingText = styled(Text)<LayoutFlexContainerProps>`
    line-height: 1.1;
    margin-bottom: 25px;
    text-wrap: balance;
    text-align: ${(props) => props.$isDesktopLayout && 'center'};
    text-transform: ${(props) => props.$textTransform};
`
const StyledSpan = styled.span`
    background-color: #0c0c0c;
    position: relative;
`

const SpecialText = styled(Text)`
    display: inline-block;
    padding: ${(props) => props.$paddingOverride};
    text-transform: ${(props) => props.$textTransform};
`

export const AboutHeading = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    const renderCustomTextBreak = !isDesktopLayout && <br />

    return (
        <>
            <HeadingText
                $isDesktopLayout={isDesktopLayout}
                $textTransform="uppercase"
                variant="h2"
            >
                <Reveal removeRepeatedReveal={false} y={25}>
                    <StyledSpan>
                        Creating
                        <AnimatedCircleText />
                    </StyledSpan>{' '}
                    {renderCustomTextBreak}
                    <SpecialText
                        $paddingOverride="0 17px 0 0"
                        $textTransform={'uppercase'}
                        variant="h2"
                        fontFamily="Grunges"
                    >
                        the best
                    </SpecialText>
                    <br />
                    <StyledSpan>
                        videos {renderCustomTextBreak} for you
                    </StyledSpan>
                </Reveal>
            </HeadingText>
        </>
    )
}
