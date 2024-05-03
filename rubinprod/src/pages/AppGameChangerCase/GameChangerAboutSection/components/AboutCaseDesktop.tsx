import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import gameChangerLogo from '../../../../assets/img/gameChanger/icoGameChanger.svg'

const StyledFlexContainer = styled(FlexContainer)`
    width: 30vw;
    max-width: 375px;
`

const HeadingContainer = styled(Box)`
    height: 100px;
`

const StyledImage = styled.img`
    padding: 25px;
    width: 250px;
    height: auto;
`

export const AboutCaseDesktop = () => {
    return (
        <StyledFlexContainer gap="75px" direction="column">
            <HeadingContainer>
                <StyledImage src={gameChangerLogo} />
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
