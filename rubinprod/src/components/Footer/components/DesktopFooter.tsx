import { useTranslation } from 'react-i18next'
import { Text } from '../../Text/Text'
import { FlexContainer } from '../../layout/FlexContainer'

import styled from 'styled-components'
import { Box } from '../../layout/Box'
import logo from '../../../assets/img/icoRubinprodGray.svg'
import { DesktopFooterNavigation } from './DesktopFooterNavigation'
import { LayoutFlexContainerProps } from '../../layout/types'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    width: ${(props) => (props.$isDesktopLayout ? '80%' : '100%')};
`

const StyledBox = styled(Box)`
    padding: 25px 0;
`

const StyledLogo = styled.img`
    width: 65px;
    height: 65px;
`

export const DesktopFooter = () => {
    const { t } = useTranslation()

    const isLargeDesktopLayout = useBreakpointBiggerThan('lg')

    return (
        <StyledFlexContainer
            $isDesktopLayout={isLargeDesktopLayout}
            justifyContent="space-between"
            alignItems="end"
        >
            <StyledBox>
                <StyledLogo src={logo} />
            </StyledBox>
            <Text
                variant="socials"
                $textAlign="center"
                $textTransform="uppercase"
                $color={'#6E6E6E'}
                $paddingOverride="0 0 35px 0"
            >
                {t('footer.copyright')}
            </Text>
            <DesktopFooterNavigation />
        </StyledFlexContainer>
    )
}
