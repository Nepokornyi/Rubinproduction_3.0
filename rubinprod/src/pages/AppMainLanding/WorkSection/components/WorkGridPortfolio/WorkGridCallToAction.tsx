import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'
import { Text } from '../../../../../components/Text/Text'
import { Button } from '../../../../../components/Button/Button'
import { useCurrentBreakpoint } from '../../../../../helpers/useCurrentBreakpoint'
import { Reveal } from '../../../../../components/animations/reveal/Reveal'
import { useTranslation } from 'react-i18next'

type CallToActionGridItemProps = {
    $isTabletLayout?: boolean
    $isDesktopLayout?: boolean
}

const CallToActionGridItem = styled(Box)<CallToActionGridItemProps>`
    position: relative;
    transform: ${(props) =>
        props.$isTabletLayout ? 'none' : 'translateY(calc(-35%))'};
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    max-width: ${(props) => props.$isTabletLayout && '470px'};
    z-index: 1;
`
const BoxWrapper = styled(Box)`
    width: 100%;
`

const StyledButton = styled(Button)<{
    $mediumBreakpoint: boolean
    $borderColor?: string
}>`
    margin-left: 0;
    width: 90%;
    background-color: ${(props) => props.$mediumBreakpoint && '#0C0C0C'};
    border-color: ${(props) => props.$mediumBreakpoint && props.$borderColor};
`

export const WorkGridCallToAction = () => {
    const { t } = useTranslation()

    const smallBreakpoint = useCurrentBreakpoint() === 'sm'
    const mediumBreakpoint = useCurrentBreakpoint() === 'md'
    const isTabletLayout = smallBreakpoint || mediumBreakpoint

    const tabletButtonColor = mediumBreakpoint ? '#0C0C0C' : '#d91e37'

    return (
        <CallToActionGridItem $isTabletLayout={isTabletLayout}>
            <Text variant="p" $paddingOverride="0">
                <Reveal removeRepeatedReveal={false} x={-25} delay={0}>
                    {t('workPage.callToAction')}
                </Reveal>
            </Text>
            <BoxWrapper>
                <Reveal removeRepeatedReveal={false} x={-25}>
                    <StyledButton
                        $mediumBreakpoint={mediumBreakpoint}
                        $borderColor={tabletButtonColor}
                        blockColor={tabletButtonColor}
                    >
                        Work together
                    </StyledButton>
                </Reveal>
            </BoxWrapper>
        </CallToActionGridItem>
    )
}
