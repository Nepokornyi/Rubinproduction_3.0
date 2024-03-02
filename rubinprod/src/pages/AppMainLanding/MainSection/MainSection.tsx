import { Header } from '../../../components/Header/Header'

import { FlexContainer } from '../../../components/layout/FlexContainer'

import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button/Button'
import { RubinTitle } from './components/RubinTitle'

import background from '../../../assets/img/mainBackground.png'
import styled from 'styled-components'

const StyledFlexContainerBackground = styled(FlexContainer)`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`

export const MainSection = () => {
    const { t } = useTranslation()

    return (
        <StyledFlexContainerBackground
            minHeight="100vh"
            justifyContent="center"
            direction="column"
        >
            <Header />
            <RubinTitle />
            <Button>{t('mainPage.button')}</Button>
        </StyledFlexContainerBackground>
    )
}
