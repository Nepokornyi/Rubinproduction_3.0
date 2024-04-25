import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { AnimatedLink } from '../../animations/words/AnimatedLink'
import { Reveal } from '../../animations/reveal/Reveal'
import { AppLandingVariants } from '../Header'
import { useTranslation } from 'react-i18next'

type HeaderMenuProps = {
    variants?: AppLandingVariants
}

const StyledHeaderMenu = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 30px;
        margin-right: 15px;
        overflow: hidden;
    }
    ul > li {
        cursor: pointer;
        position: relative;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

export const HeaderMenu = ({ variants = 'main' }: HeaderMenuProps) => {
    const { t } = useTranslation()
    return (
        <StyledHeaderMenu>
            <ul>
                {variants === 'case' && (
                    <li>
                        <Link to="/" smooth>
                            <Reveal y={-25}>
                                <AnimatedLink title={t('header.menu.home')} />
                            </Reveal>
                        </Link>
                    </li>
                )}
                <li>
                    <Link to="#about" smooth>
                        <Reveal delay={0.2} y={-20}>
                            <AnimatedLink title={t('header.menu.about')} />
                        </Reveal>
                    </Link>
                </li>
                <li>
                    <Link to="#portfolio" smooth>
                        <Reveal delay={0.75} y={-15}>
                            <AnimatedLink title={t('header.menu.portfolio')} />
                        </Reveal>
                    </Link>
                </li>
                <li>
                    <Reveal delay={1} y={-10}>
                        <AnimatedLink
                            title={t('header.menu.languageSelection1')}
                        />
                    </Reveal>
                </li>
                <li>
                    <Reveal delay={1.25} y={-15}>
                        <AnimatedLink
                            title={t('header.menu.languageSelection2')}
                        />
                    </Reveal>
                </li>
            </ul>
        </StyledHeaderMenu>
    )
}
