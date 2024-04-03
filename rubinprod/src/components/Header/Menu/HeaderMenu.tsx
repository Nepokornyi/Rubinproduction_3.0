import styled from 'styled-components'
import { Text } from '../../Text/Text'
import { HashLink as Link } from 'react-router-hash-link'

const StyledHeaderMenu = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 30px;
        margin-right: 15px;
    }
    ul > li {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                <li>
                    <Link to="#about" smooth>
                        <Text
                            paddingOverride="0"
                            textTransform="uppercase"
                            variant="nav"
                        >
                            About
                        </Text>
                    </Link>
                </li>
                <li>
                    <Link to="#portfolio" smooth>
                        <Text
                            paddingOverride="0"
                            textTransform="uppercase"
                            variant="nav"
                        >
                            Portfolio
                        </Text>
                    </Link>
                </li>
                <li>
                    <Text
                        paddingOverride="0"
                        textTransform="uppercase"
                        variant="nav"
                    >
                        Rus/Ger
                    </Text>
                </li>
            </ul>
        </StyledHeaderMenu>
    )
}
