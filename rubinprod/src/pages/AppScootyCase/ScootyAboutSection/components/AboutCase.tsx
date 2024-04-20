import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import scootyLogo from '../../../../assets/img/scooty/icoScootyLanding.svg'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 400px;
`

const StyledImage = styled.img`
    padding: 0 25px;
    width: 100%;
    height: auto;
`

// TODO: add green icon

export const AboutCase = () => {
    return (
        <StyledFlexContainer
            gap="20px"
            direction="column"
            justifyContent="space-between"
        >
            <Box>
                <StyledImage src={scootyLogo} />
            </Box>
            <FlexContainer direction="column" gap={'10px'}>
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="20px 25px"
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
            </FlexContainer>
        </StyledFlexContainer>
    )
}
