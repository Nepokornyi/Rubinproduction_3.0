import styled from 'styled-components'
import { FlexContainer } from '../../components/layout/FlexContainer'
import { FooterNavigation } from './FooterNavigation'
import logo from '../../assets/img/icoRubinprodWhite.svg'
import { Box } from '../layout/Box'
import { Text } from '../Text/Text'
import { useTranslation } from 'react-i18next'

const StyledFlexContainer = styled(FlexContainer)`
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
`

const StyledBox = styled(Box)`
    padding: 50px 25px;
`

const StyledLogo = styled.img`
    width: 45px;
    height: 45px;
`

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <StyledFlexContainer direction="column">
            <FlexContainer justifyContent="space-between">
                <StyledBox>
                    <StyledLogo src={logo} />
                </StyledBox>
                <FooterNavigation />
            </FlexContainer>

            <Text
                textAlign="center"
                variant="socials"
                textTransform="uppercase"
                color={'#6E6E6E'}
                paddingOverride="0 0 15px 0"
            >
                {t('footer.copyright')}
            </Text>
        </StyledFlexContainer>
    )
}
