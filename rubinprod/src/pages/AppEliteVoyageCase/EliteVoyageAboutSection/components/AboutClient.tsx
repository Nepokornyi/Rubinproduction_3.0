import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 400px;
`

export const AboutClient = () => {
    return (
        <StyledFlexContainer
            gap="20px"
            direction="column"
            justifyContent="space-between"
        >
            <FlexContainer direction="column" gap="20px">
                <Text $textTransform="uppercase" variant={'nav'}>
                    Client
                </Text>
                <Text $textTransform="uppercase" variant={'button'}>
                    Elite Voyage
                </Text>
            </FlexContainer>
            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="20px 25px"
                    variant={'nav'}
                >
                    Client
                </Text>
                <Text variant="p">
                    <strong>EliteVoyage</strong> specializes in providing
                    hassle-free travel experiences, allowing you to discover new
                    places and create lasting memories without stress. With a
                    network of over 200 esteemed partners worldwide, they ensure
                    top-tier service on every journey, promising comfort and
                    quality every step of the way.
                </Text>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
