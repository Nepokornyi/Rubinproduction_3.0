import styled from 'styled-components'
import { Box } from '../../layout/Box'
import { FlexContainer } from '../../layout/FlexContainer'
import { Text } from '../../Text/Text'
import { useTranslation } from 'react-i18next'
import logo from '../../../assets/img/icoRubinprodWhite.svg'
import { MobileFooterNavigation } from './MobileFooterNavigation'

const StyledBox = styled(Box)`
    padding: 50px 25px;
`

const StyledLogo = styled.img`
    width: 45px;
    height: 45px;
`

export const MobileFooter = () => {
    const { t } = useTranslation()

    return (
        <>
            <FlexContainer justifyContent="space-between">
                <StyledBox>
                    <StyledLogo src={logo} />
                </StyledBox>
                <MobileFooterNavigation />
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
        </>
    )
}
