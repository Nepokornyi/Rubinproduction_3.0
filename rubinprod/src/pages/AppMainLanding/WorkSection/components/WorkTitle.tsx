import { useTranslation } from 'react-i18next'
import { Text } from '../../../../components/Text/Text'
import styled from 'styled-components'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

const StyledRelativeText = styled(Text)<LayoutFlexContainerProps>`
    position: relative;
    padding: ${(props) => props.$isDesktopLayout && 0};
`

const StyledAbsoluteText = styled(Text)<LayoutFlexContainerProps>`
    position: ${(props) => props.$isDesktopLayout && 'absolute'};
    top: 0px;
    left: -100px;
`

const StyledText = styled(Text)<LayoutFlexContainerProps>`
    padding: ${(props) => props.$isDesktopLayout && 0};
    display: block;
`

export const WorkTitle = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('sm')

    return (
        <>
            <Reveal removeRepeatedReveal={false} y={-25}>
                <StyledRelativeText
                    $isDesktopLayout={isDesktopLayout}
                    variant="h2"
                    textTransform="uppercase"
                >
                    <StyledAbsoluteText
                        $isDesktopLayout={isDesktopLayout}
                        fontFamily="Grunges"
                        variant="h3"
                        paddingOverride="5px"
                    >
                        our
                    </StyledAbsoluteText>
                    {t('workPage.title')}
                </StyledRelativeText>
                <StyledText $isDesktopLayout={isDesktopLayout} variant="p">
                    {t('workPage.description')}
                </StyledText>
            </Reveal>
        </>
    )
}
