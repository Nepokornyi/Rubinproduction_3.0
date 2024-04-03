import { useTranslation } from 'react-i18next'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import styled from 'styled-components'
import { ArrowRight, CustomArrowDown } from '../../../../components/Arrow/Arrow'
import { Box } from '../../../../components/layout/Box'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    width: ${(props) => (props.$isDesktopLayout ? '40%' : '100%')};
    max-width: ${(props) => props.$isDesktopLayout && '550px'};
`

const StyledText = styled(Text)<LayoutFlexContainerProps>`
    position: relative;
    line-height: 1;
    display: ${(props) => props.$isDesktopLayout && 'block'};
`

const StyledCustomArrowDown = styled(CustomArrowDown)`
    position: absolute;
    right: -42.5px;
    bottom: -10px;
`

const StyledCustomArrowRight = styled(ArrowRight)<LayoutFlexContainerProps>`
    position: absolute;
    left: ${(props) => (props.$isDesktopLayout ? '0px' : '20px')};
    bottom: -20px;
`

export const ContactTitle = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isLargeDesktopLayout = useBreakpointBiggerThan('lg')

    const renderArrowDown = !isDesktopLayout && <StyledCustomArrowDown />
    const renderArrowLeft = isDesktopLayout && (
        <StyledCustomArrowRight
            $isDesktopLayout={isLargeDesktopLayout}
            isFullWidth
        />
    )

    const applyCustomLayoutPadding = isLargeDesktopLayout ? '0' : '0 0 0 25px'

    return (
        <StyledFlexContainer
            $isDesktopLayout={isLargeDesktopLayout}
            direction="column"
            alignItems="start"
        >
            <Box>
                <Text
                    variant="h2"
                    paddingOverride={applyCustomLayoutPadding}
                    textTransform="uppercase"
                >
                    {t('contactPage.title')}
                </Text>
                <Box>
                    <StyledText
                        $isDesktopLayout={isDesktopLayout}
                        variant="h3"
                        textTransform="uppercase"
                        paddingOverride={applyCustomLayoutPadding}
                        fontFamily="Grunges"
                    >
                        {t('contactPage.subtitle')}
                        {renderArrowDown}
                    </StyledText>
                </Box>
                {renderArrowLeft}
            </Box>
        </StyledFlexContainer>
    )
}
