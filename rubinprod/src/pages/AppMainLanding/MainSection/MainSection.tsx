import { useRef } from 'react'
import { Header } from '../../../components/Header/Header'

import { FlexContainer } from '../../../components/layout/FlexContainer'

import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button/Button'
import { RubinTitle } from './components/RubinTitle'

import background from '../../../assets/img/mainBackground.png'
import styled from 'styled-components'
import { Socials } from './components/Socials'
import { Contacts } from './components/Contacts'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { Reveal } from '../../../components/animations/reveal/Reveal'

const StyledFlexContainerBackground = styled(
    FlexContainer
)<LayoutFlexContainerProps>`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: ${(props) => (props.$isDesktopLayout ? 'center' : 'initial')};
    padding: 200px 0 125px 0;
    overflow: hidden;
`

const StyledDesktopFlexContainer = styled(FlexContainer)`
    width: 85%;
`

const StyledButton = styled(Button)`
    width: 100%;
    margin: 0;
    padding-left: 25px;
`

export const MainSection = () => {
    const { t } = useTranslation()
    const targetRef = useRef(null)

    const isDesktopLayout = useBreakpointBiggerThan('md')

    const renderLayoutContent = isDesktopLayout ? (
        <StyledDesktopFlexContainer>
            <Socials />
            <RubinTitle
                button={
                    <StyledButton transitionDelay={1.5}>
                        {t('mainPage.button')}
                    </StyledButton>
                }
                contacts={<Contacts />}
            />
        </StyledDesktopFlexContainer>
    ) : (
        <>
            <Contacts />
            <Reveal delay={1.25}>
                <RubinTitle ref={targetRef} />
            </Reveal>
            <Button transitionDelay={2.65}>{t('mainPage.button')}</Button>
            <Socials />
        </>
    )

    return (
        <StyledFlexContainerBackground
            $isDesktopLayout={isDesktopLayout}
            minHeight="100vh"
            justifyContent="center"
            direction="column"
        >
            <Header targetRef={targetRef} />
            {renderLayoutContent}
        </StyledFlexContainerBackground>
    )
}
