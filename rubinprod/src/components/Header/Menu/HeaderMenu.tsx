import styled from 'styled-components'
import { Text } from '../../Text/Text'

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
`

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                <li>
                    <Text
                        paddingOverride="0"
                        textTransform="uppercase"
                        variant="nav"
                    >
                        About
                    </Text>
                </li>
                <li>
                    <Text
                        paddingOverride="0"
                        textTransform="uppercase"
                        variant="nav"
                    >
                        Portfolio
                    </Text>
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
