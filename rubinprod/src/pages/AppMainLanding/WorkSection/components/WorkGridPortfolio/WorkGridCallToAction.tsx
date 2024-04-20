import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'
import { Text } from '../../../../../components/Text/Text'
import { Button } from '../../../../../components/Button/Button'
import { useCurrentBreakpoint } from '../../../../../helpers/useCurrentBreakpoint'
import { Reveal } from '../../../../../components/animations/reveal/Reveal'

type CallToActionGridItemProps = {
    $isTabletLayout?: boolean
    $isDesktopLayout?: boolean
}

const CallToActionGridItem = styled(Box)<CallToActionGridItemProps>`
    transform: translateY(calc(-35%));
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    max-width: ${(props) => props.$isTabletLayout && '470px'};
`
const BoxWrapper = styled(Box)`
    width: 100%;
`

const StyledButton = styled(Button)`
    margin-left: 0;
    width: 90%;
`

export const WorkGridCallToAction = () => {
    const smallBreakpoint = useCurrentBreakpoint() === 'sm'
    const mediumBreakpoint = useCurrentBreakpoint() === 'md'
    const isTabletLayout = smallBreakpoint || mediumBreakpoint

    return (
        <CallToActionGridItem $isTabletLayout={isTabletLayout}>
            <Text variant="p" $paddingOverride="0">
                <Reveal removeRepeatedReveal={false} x={-25} delay={0}>
                    Regardless of the projects complexity, we will provide a
                    cost estimate during the first consultation.
                </Reveal>
            </Text>
            <BoxWrapper>
                <Reveal removeRepeatedReveal={false} x={-25}>
                    <StyledButton>Work together</StyledButton>
                </Reveal>
            </BoxWrapper>
        </CallToActionGridItem>
    )
}
