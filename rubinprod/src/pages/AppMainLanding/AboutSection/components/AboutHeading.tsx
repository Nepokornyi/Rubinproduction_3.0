import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { AnimatedCircleText } from './AnimatedCircleText'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'

const HeadingText = styled(Text)<LayoutFlexContainerProps>`
    line-height: 1.1;
    margin-bottom: 25px;
    text-wrap: balance;
    text-align: ${(props) => props.$isDesktopLayout && 'center'};
`
const StyledSpan = styled.span`
    background-color: #141316;
    position: relative;
`

const SpecialText = styled(Text)`
    display: inline-block;
`

export const AboutHeading = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    const renderCustomTextBreak = !isDesktopLayout && <br />

    return (
        <>
            <HeadingText
                $isDesktopLayout={isDesktopLayout}
                variant="h2"
                textTransform="uppercase"
            >
                <StyledSpan>
                    Creating
                    <AnimatedCircleText />
                </StyledSpan>{' '}
                {renderCustomTextBreak}
                <SpecialText
                    paddingOverride="0 17px 0 0"
                    variant="h2"
                    textTransform={'uppercase'}
                    fontFamily="Grunges"
                >
                    the best
                </SpecialText>
                <br />
                <StyledSpan>videos {renderCustomTextBreak} for you</StyledSpan>
            </HeadingText>
        </>
    )
}
