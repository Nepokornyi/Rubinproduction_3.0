import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { AnimatedLink } from '../../animations/words/AnimatedLink'

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

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                <li>
                    <Link to="#about" smooth>
                        <AnimatedLink title={'About'} />
                    </Link>
                </li>
                <li>
                    <Link to="#portfolio" smooth>
                        <AnimatedLink title={'Portfolio'} />
                    </Link>
                </li>
                <li>
                    <AnimatedLink title={'Rus/Ger'} />
                </li>
            </ul>
        </StyledHeaderMenu>
    )
}
