import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import scootyLogo from '../../../../assets/img/scooty/icoScootyColor.svg'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 375px;
`

const HeadingContainer = styled(Box)`
    height: 100px;
`

const StyledImage = styled.img`
    padding: 10px 25px;
    width: 250px;
    height: auto;
`

export const AboutCaseDesktop = () => {
    return (
        <StyledFlexContainer gap="50px" direction="column">
            <HeadingContainer>
                <StyledImage src={scootyLogo} />
            </HeadingContainer>
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
