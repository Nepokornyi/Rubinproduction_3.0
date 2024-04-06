import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { AnimatedLink } from '../../animations/words/AnimatedLink'
import { Reveal } from '../../animations/reveal/Reveal'
import { AppLandingVariants } from '../Header'

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
    return (
        <StyledHeaderMenu>
            <ul>
                {variants === 'case' && (
                    <li>
                        <Link to="/" smooth>
                            <Reveal y={-25}>
                                <AnimatedLink title={'Home'} />
                            </Reveal>
                        </Link>
                    </li>
                )}

                <li>
                    <Link to="#about" smooth>
                        <Reveal delay={0.2} y={-20}>
                            <AnimatedLink title={'About'} />
                        </Reveal>
                    </Link>
                </li>
                <li>
                    <Link to="#portfolio" smooth>
                        <Reveal delay={0.75} y={-15}>
                            <AnimatedLink title={'Portfolio'} />
                        </Reveal>
                    </Link>
                </li>
                <li>
                    <Reveal delay={1} y={-10}>
                        <AnimatedLink title={'Rus/Ger'} />
                    </Reveal>
                </li>
            </ul>
        </StyledHeaderMenu>
    )
}
