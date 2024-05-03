import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { useTranslation } from 'react-i18next'
import { Box } from '../../../../components/layout/Box'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 375px;
`
const HeadingContainer = styled(Box)`
    height: 100px;
`

export const AboutClientDesktop = () => {
    const { t } = useTranslation()
    const eliteVoyageClient = t('eliteVoyageCase.client')

    return (
        <StyledFlexContainer gap="75px" direction="column">
            <HeadingContainer>
                <FlexContainer direction="column" gap="20px">
                    <Text $textTransform="uppercase" variant={'nav'}>
                        Client
                    </Text>
                    <Text $textTransform="uppercase" variant={'button'}>
                        Elite Voyage
                    </Text>
                </FlexContainer>
            </HeadingContainer>
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
