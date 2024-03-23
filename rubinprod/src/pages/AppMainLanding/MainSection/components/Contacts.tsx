import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    position: ${(props) => !props.$isDesktopLayout && 'absolute'};
    top: ${(props) => !props.$isDesktopLayout && 'calc(5% + 100px)'};
`

const StyledLink = styled.a`
    text-decoration: none;
    & span:hover {
        color: #fff;
        transition: 0.3s;
    }
`

export const Contacts = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    const alignItems = isDesktopLayout ? 'start' : 'end'

    return (
        <StyledFlexContainer
            $isDesktopLayout={isDesktopLayout}
            gap="10px"
            direction="column"
            alignItems={alignItems}
            justifyContent="center"
        >
            <StyledLink href="tel:+420111222333">
                <Text variant="socials" color="#6e6e6e">
                    +420 111 222 333
                </Text>
            </StyledLink>
            <StyledLink href="mailto: nikita.rubin@rubinproduction.eu">
                <Text variant="socials" color="#6e6e6e">
                    info@email.eu
                </Text>
            </StyledLink>
        </StyledFlexContainer>
    )
}
