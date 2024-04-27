import styled from 'styled-components'
import { CustomArrowDown } from '../../../../components/Arrow/Arrow'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Text } from '../../../../components/Text/Text'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 0 50px;
`

const StyledCustomArrowDown = styled(CustomArrowDown)`
    position: absolute;
    left: 40px;
    bottom: -15px;
    height: ${(props) =>
        props.$isFullHeight ? '100%' : 'clamp(80px, 20vw, 100px)'};
    &::before {
        height: ${(props) =>
            props.$isFullHeight ? '100%' : 'clamp(80px, 20vw, 100px)'};
    }
`

export const AboutChallengeMobile = () => {
    const render = <StyledCustomArrowDown $isFullHeight />

    return (
        <StyledFlexContainer direction="column" gap={'10px'}>
            {render}
            <Text
                $textTransform="uppercase"
                $paddingOverride="0 0 20px 25px"
                variant={'nav'}
            >
                Services
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                web development
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                schooting
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                animation
            </Text>
            <Text $textTransform="uppercase" variant={'button'}>
                instagram feed
            </Text>
        </StyledFlexContainer>
    )
}
