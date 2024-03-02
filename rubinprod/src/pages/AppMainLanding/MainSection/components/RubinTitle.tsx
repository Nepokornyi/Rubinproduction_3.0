import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'

import logo from '../../../../assets/img/icoRubinprod.svg'
import { useTranslation } from 'react-i18next'

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

export const RubinTitle = () => {
    const { t } = useTranslation()

    return (
        <>
            <HeadingText variant="h1" textTransform="uppercase">
                <RedText>
                    <img src={logo} />
                    {t('mainPage.title_name')} <br />
                </RedText>
                {t('mainPage.header')}
            </HeadingText>
            <SubHeadingText variant="p">{t('mainPage.content')}</SubHeadingText>
        </>
    )
}
