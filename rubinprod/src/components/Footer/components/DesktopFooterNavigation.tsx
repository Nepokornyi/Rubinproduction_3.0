import styled from 'styled-components'
import { Text } from '../../Text/Text'
import { useTranslation } from 'react-i18next'
import { Box } from '../../layout/Box'

const GridContainer = styled(Box)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    padding: 0 0 25px 0;

    a:nth-child(1) {
        grid-area: 1 / 3 / 2 / 4;
    }
    a:nth-child(2) {
        grid-area: 2 / 3 / 3 / 4;
    }
    a:nth-child(3) {
        grid-area: 3 / 3 / 4 / 4;
    }
    a:nth-child(4) {
        grid-area: 3 / 2 / 4 / 3;
    }
    a:nth-child(5) {
        grid-area: 2 / 2 / 3 / 3;
    }
    a:nth-child(6) {
        grid-area: 2 / 1 / 3 / 2;
    }
    a:nth-child(7) {
        grid-area: 3 / 1 / 4 / 2;
    }
`

const StyledLink = styled.a`
    text-decoration: none;
    text-align: right;
    & span:hover {
        color: #fff;
        transition: 0.3s;
    }
`

export const DesktopFooterNavigation = () => {
    const { t } = useTranslation()

    return (
        <GridContainer>
            <StyledLink href="/">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    HOME
                </Text>
            </StyledLink>
            <StyledLink href="#portfolio">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    PORTFOLIO
                </Text>
            </StyledLink>
            <StyledLink href="https://www.youtube.com/@who1snick466/videos">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    {t('footer.socials.youtube')}
                </Text>
            </StyledLink>
            <StyledLink href="https://www.instagram.com/who1snick/?hl=en">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    {t('footer.socials.instagram')}
                </Text>
            </StyledLink>
            <StyledLink href="#contact">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    CONTACT
                </Text>
            </StyledLink>
            <StyledLink href="#about">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    ABOUT
                </Text>
            </StyledLink>
            <StyledLink href="https://www.behance.net/who1snick?locale=cs_CZ">
                <Text
                    $textTransform="uppercase"
                    $color={'#6E6E6E'}
                    $textAlign="left"
                    variant="p"
                >
                    {t('footer.socials.behance')}
                </Text>
            </StyledLink>
        </GridContainer>
    )
}
