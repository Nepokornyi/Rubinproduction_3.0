import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'

const StyledFlexContainer = styled(FlexContainer)`
    position: absolute;
    bottom: 12.5%;
`
const StyledLink = styled.a`
    text-decoration: none;
    & span:hover {
        color: #fff;
        transition: 0.3s;
    }
`

export const Socials = () => {
    return (
        <StyledFlexContainer alignItems="center" justifyContent="space-evenly">
            <StyledLink href="http://">
                <Text variant="socials" color="#6e6e6e">
                    Instagram
                </Text>
            </StyledLink>
            <StyledLink href="http://">
                <Text variant="socials" color="#6e6e6e">
                    Behance
                </Text>
            </StyledLink>
            <StyledLink href="http://">
                <Text variant="socials" color="#6e6e6e">
                    Youtube
                </Text>
            </StyledLink>
        </StyledFlexContainer>
    )
}
