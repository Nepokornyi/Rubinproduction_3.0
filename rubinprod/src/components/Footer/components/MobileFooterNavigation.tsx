import styled from 'styled-components'
import { Text } from '../../Text/Text'
import { useTranslation } from 'react-i18next'

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 25px;
`

const StyledLink = styled.a`
    margin: 10px 0;
    text-decoration: none;
    text-align: right;
    & span:hover {
        color: #fff;
        transition: 0.3s;
    }
`

export const MobileFooterNavigation = () => {
    const { t } = useTranslation()

    return (
        <StyledNav>
            <StyledLink href="https://www.behance.net/who1snick?locale=cs_CZ">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    {t('footer.socials.behance')}
                </Text>
            </StyledLink>
            <StyledLink href="https://www.instagram.com/who1snick/?hl=en">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    {t('footer.socials.instagram')}
                </Text>
            </StyledLink>
            <StyledLink href="https://www.youtube.com/@who1snick466/videos">
                <Text $textTransform="uppercase" variant="p" $color={'#6E6E6E'}>
                    {t('footer.socials.youtube')}
                </Text>
            </StyledLink>
        </StyledNav>
    )
}
