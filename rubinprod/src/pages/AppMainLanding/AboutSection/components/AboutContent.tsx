import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { ArrowDown } from '../../../../components/Arrow/variants'
import { Text } from '../../../../components/Text/Text'
import { useTranslation } from 'react-i18next'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

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
                <Reveal removeRepeatedReveal={false} x={-25}>
                    {t('aboutPage.clients')}
                </Reveal>
                <Reveal
                    style={{
                        width: '80px',
                        height: '22px',
                        position: 'absolute',
                        left: '115px',
                        top: '0',
                    }}
                    delay={0.35}
                    removeRepeatedReveal={false}
                >
                    <StyledArrowDown $isDesktopLayout />
                </Reveal>
            </StyledClientsTitle>

            <StyledClientsDescription variant="p">
                <Reveal removeRepeatedReveal={false} x={25}>
                    {t('aboutPage.description')}
                </Reveal>
            </StyledClientsDescription>
        </StyledDesktopFlexContainer>
    )

    const mobileContent = (
        <>
            <Text variant="p">
                <Reveal y={25} removeRepeatedReveal={false}>
                    {t('aboutPage.description')}
                </Reveal>
            </Text>
            <FlexContainer justifyContent="center">
                <StyledClientsTitle textTransform="uppercase" fontWeight="600">
                    <Reveal y={-25} removeRepeatedReveal={false}>
                        {t('aboutPage.clients')}
                    </Reveal>
                    <Reveal
                        style={{
                            width: '80px',
                            height: '22px',
                            position: 'absolute',
                            right: '145px',
                            top: '0',
                        }}
                        delay={0.35}
                        y={25}
                        removeRepeatedReveal={false}
                    >
                        <StyledArrowDown />
                    </Reveal>
                </StyledClientsTitle>
            </FlexContainer>
        </>
    )

    const renderAboutContent = isDesktopLayout ? desktopContent : mobileContent

    return <>{renderAboutContent}</>
}
