import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    position: ${(props) => (props.$isDesktopLayout ? 'initial' : 'absolute')};
    bottom: ${(props) => !props.$isDesktopLayout && '12.5%'};
    writing-mode: ${(props) => props.$isDesktopLayout && 'vertical-rl'};
    transform: ${(props) => props.$isDesktopLayout && 'rotate(180deg)'};
    width: ${(props) => props.$isDesktopLayout && 'auto'};
    margin-left: ${(props) => props.$isDesktopLayout && '35px'};
    margin-bottom: ${(props) => props.$isDesktopLayout && '25px'};
    margin-top: ${(props) => props.$isDesktopLayout && '25px'};
`
const StyledLink = styled.a`
    text-decoration: none;
    & span:hover {
        color: #fff;
        transition: 0.3s;
    }
`

export const Socials = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    const justifyContent = isDesktopLayout ? 'space-between' : 'space-evenly'

    return (
        <StyledFlexContainer
            $isDesktopLayout={isDesktopLayout}
            alignItems="center"
            justifyContent={justifyContent}
            gap="45px"
        >
            <StyledLink href="http://">
                <Reveal delay={1.75} y={25}>
                    <Text variant="socials" paddingOverride="0" color="#6e6e6e">
                        Instagram
                    </Text>
                </Reveal>
            </StyledLink>
            <StyledLink href="http://">
                <Reveal delay={1.9} y={35}>
                    <Text variant="socials" paddingOverride="0" color="#6e6e6e">
                        Behance
                    </Text>
                </Reveal>
            </StyledLink>
            <StyledLink href="http://">
                <Reveal delay={2.05} y={45}>
                    <Text variant="socials" paddingOverride="0" color="#6e6e6e">
                        Youtube
                    </Text>
                </Reveal>
            </StyledLink>
        </StyledFlexContainer>
    )
}
