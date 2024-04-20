import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import gameChangerLogo from '../../../../assets/img/gameChanger/gameChangerLogo.png'

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
                <StyledImage src={gameChangerLogo} />
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
                    Social media
                </Text>
                <Text $textTransform="uppercase" variant={'button'}>
                    Advertising
                </Text>
                <Text $textTransform="uppercase" variant={'button'}>
                    Motion Design
                </Text>
                <Text $textTransform="uppercase" variant={'button'}>
                    Product
                </Text>
                <Text $textTransform="uppercase" variant={'button'}>
                    Photography
                </Text>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
