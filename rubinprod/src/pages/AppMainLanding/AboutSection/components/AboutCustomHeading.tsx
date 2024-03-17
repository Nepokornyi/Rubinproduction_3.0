import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { AnimatedCircleText } from './AnimatedCircleText'

const HeadingText = styled(Text)`
    line-height: 1.1;
    margin-bottom: 25px;
    text-wrap: balance;
`
const StyledSpan = styled.span`
    background-color: #141316;
    position: relative;
`

const SpecialText = styled(Text)`
    display: inline-block;
`

export const AboutCustomHeading = () => {
    return (
        <>
            <HeadingText variant="h2" textTransform="uppercase">
                <StyledSpan>
                    Creating
                    <AnimatedCircleText />
                </StyledSpan>{' '}
                <SpecialText
                    paddingOverride="0 17px 0 0"
                    variant="h2"
                    textTransform={'uppercase'}
                    fontFamily="Grunges"
                >
                    the best
                </SpecialText>
                <br />
                <StyledSpan>videos for you</StyledSpan>
            </HeadingText>
        </>
    )
}
