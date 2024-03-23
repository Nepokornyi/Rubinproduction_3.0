import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'

import logo from '../../../../assets/img/icoRubinprod.svg'
import { useTranslation } from 'react-i18next'
import { ReactNode, forwardRef } from 'react'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'

type RubinTitleProps = {
    button?: ReactNode
    contacts?: ReactNode
}

type SubHeadingTextProps = {
    $isDesktopLayout?: boolean
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const HeadingText = styled(Text)`
    line-height: 1.1;
`
const RedText = styled.span`
    color: #d91e37;
    position: relative;
    &::first-letter {
        opacity: 0;
        font-size: clamp(45px, 8.5vw + 1rem, 130px);
    }
`

const SubHeadingText = styled(Text)<SubHeadingTextProps>`
    margin-top: 10px;
    margin-bottom: 20px;
    max-width: ${(props) => props.$isDesktopLayout && '400px'};
`

export const RubinTitle = forwardRef<HTMLDivElement, RubinTitleProps>(
    (props, ref) => {
        const { t } = useTranslation()

        const isDesktopLayout = useBreakpointBiggerThan('md')

        const renderContacts = isDesktopLayout ? (
            <FlexContainer justifyContent="space-around">
                {props.contacts}
                <SubHeadingText $isDesktopLayout variant="p">
                    {t('mainPage.content')}
                </SubHeadingText>
            </FlexContainer>
        ) : (
            <SubHeadingText variant="p">{t('mainPage.content')}</SubHeadingText>
        )

        return (
            <StyledContainer ref={ref}>
                <HeadingText variant="h1" textTransform="uppercase">
                    <FlexContainer alignItems="center">
                        <RedText>
                            <img src={logo} />
                            {t('mainPage.title_name')}
                        </RedText>
                        {props.button}
                    </FlexContainer>
                    {t('mainPage.subtitle')}
                </HeadingText>
                {renderContacts}
            </StyledContainer>
        )
    }
)

RubinTitle.displayName = 'RubinTitle'
