import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'

import logo from '../../../../assets/img/icoRubinprod.svg'
import { useTranslation } from 'react-i18next'
import { forwardRef } from 'react'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const HeadingText = styled(Text)`
    line-height: 1.1;
`
const RedText = styled.span`
    color: #d91e37;
    position: relative;
`

const SubHeadingText = styled(Text)`
    margin-top: 10px;
    margin-bottom: 20px;
`

export const RubinTitle = forwardRef<HTMLDivElement>((props, ref) => {
    const { t } = useTranslation()

    return (
        <StyledContainer ref={ref}>
            <HeadingText variant="h1" textTransform="uppercase">
                <RedText>
                    <img src={logo} />
                    {t('mainPage.title_name')} <br />
                </RedText>
                {t('mainPage.subtitle')}
            </HeadingText>
            <SubHeadingText variant="p">{t('mainPage.content')}</SubHeadingText>
        </StyledContainer>
    )
})

RubinTitle.displayName = 'RubinTitle'
