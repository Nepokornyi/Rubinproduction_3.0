import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { ArrowDown } from '../../../../components/Arrow/variants'
import { Text } from '../../../../components/Text/Text'
import { useTranslation } from 'react-i18next'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'

const StyledClientsDescription = styled(Text)<LayoutFlexContainerProps>`
    max-width: 450px;
`

const StyledDesktopFlexContainer = styled(FlexContainer)`
    padding: 25px 0px 125px 0;
`

const StyledClientsTitle = styled(Text)<LayoutFlexContainerProps>`
    position: relative;
    margin: ${(props) =>
        props.$isDesktopLayout ? '0 0 0 75px' : '75px 0 100px 0'};
    word-spacing: ${(props) => !props.$isDesktopLayout && '30px'};
    letter-spacing: 3px;
    pointer-events: none;
`

const StyledArrowDown = styled(ArrowDown)<LayoutFlexContainerProps>`
    left: ${(props) => (props.$isDesktopLayout ? 'auto' : '90px')};
    top: ${(props) => (props.$isDesktopLayout ? '-35px' : '-35px')};
    right: ${(props) => (props.$isDesktopLayout ? '-80px' : 'auto')};
    transform-origin: left;
`

export const AboutContent = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')

    const desktopContent = (
        <StyledDesktopFlexContainer gap="5px" center>
            <StyledClientsTitle
                $isDesktopLayout
                textTransform="uppercase"
                fontWeight="600"
            >
                {t('aboutPage.clients')}
                <StyledArrowDown $isDesktopLayout />
            </StyledClientsTitle>
            <StyledClientsDescription variant="p">
                {t('aboutPage.description')}
            </StyledClientsDescription>
        </StyledDesktopFlexContainer>
    )

    const mobileContent = (
        <>
            <Text variant="p">{t('aboutPage.description')}</Text>
            <FlexContainer justifyContent="center">
                <StyledClientsTitle textTransform="uppercase" fontWeight="600">
                    {t('aboutPage.clients')}
                    <StyledArrowDown />
                </StyledClientsTitle>
            </FlexContainer>
        </>
    )

    const renderAboutContent = isDesktopLayout ? desktopContent : mobileContent

    return <>{renderAboutContent}</>
}
