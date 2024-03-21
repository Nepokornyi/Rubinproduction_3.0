import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'

const StyledFlexContainer = styled(FlexContainer)`
    position: absolute;
    top: calc(5% + 100px);
`

const StyledLink = styled.a`
    text-decoration: none;
    & span:hover {
        color: #fff;
        transition: 0.3s;
    }
`

export const Contacts = () => {
    return (
        <StyledFlexContainer gap="10px" direction="column" alignItems="end">
            <StyledLink href="tel:+420111222333">
                <Text variant="socials" color="#6e6e6e">
                    +420 111 222 333
                </Text>
            </StyledLink>
            <StyledLink href="mailto: nikita.rubin@rubinproduction.eu">
                <Text variant="socials" color="#6e6e6e">
                    info@rubinproduction.eu
                </Text>
            </StyledLink>
        </StyledFlexContainer>
    )
}
