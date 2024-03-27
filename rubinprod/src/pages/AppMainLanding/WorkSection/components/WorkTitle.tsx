import { useTranslation } from 'react-i18next'
import { Text } from '../../../../components/Text/Text'
import styled from 'styled-components'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'

const StyledRelativeText = styled(Text)<LayoutFlexContainerProps>`
    position: relative;
    padding: ${(props) => props.$isDesktopLayout && 0};
`

const StyledAbsoluteText = styled(Text)<LayoutFlexContainerProps>`
    position: ${(props) => props.$isDesktopLayout && 'absolute'};
    top: -10px;
    left: -130px;
`

const StyledText = styled(Text)<LayoutFlexContainerProps>`
    padding: ${(props) => props.$isDesktopLayout && 0};
    display: block;
`

export const WorkTitle = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isLargeDesktopLayout = useBreakpointBiggerThan('lg')
    const textBreakpoint = isDesktopLayout && <br />

    return (
        <>
            <StyledRelativeText
                $isDesktopLayout={isDesktopLayout}
                variant="h3"
                textTransform="uppercase"
            >
                <StyledAbsoluteText
                    $isDesktopLayout={isDesktopLayout}
                    fontFamily="Grunges"
                    paddingOverride="5px"
                >
                    our
                </StyledAbsoluteText>
                {t('workPage.title')}
            </StyledRelativeText>
            {textBreakpoint}
            <StyledText $isDesktopLayout={isLargeDesktopLayout} variant="p">
                {t('workPage.description')}
            </StyledText>
        </>
    )
}
