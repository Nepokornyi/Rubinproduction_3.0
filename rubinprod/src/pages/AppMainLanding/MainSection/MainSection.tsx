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

const StyledFlexContainerBackground = styled(FlexContainer)`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`

export const MainSection = () => {
    const { t } = useTranslation()
    const targetRef = useRef<HTMLDivElement>(null)

    const isDesktopLayout = useBreakpointBiggerThan('sm')

    const renderLayoutContent = isDesktopLayout ? null : (
        <>
            <Contacts />
            <RubinTitle ref={targetRef} />
            <Button>{t('mainPage.button')}</Button>
            <Socials />
        </>
    )

    return (
        <StyledFlexContainerBackground
            minHeight="100vh"
            justifyContent="center"
            direction="column"
        >
            <Header targetRef={targetRef} />
            {renderLayoutContent}
        </StyledFlexContainerBackground>
    )
}
