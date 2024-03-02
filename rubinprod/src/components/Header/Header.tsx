import styled from 'styled-components'
import { FlexContainer } from '../layout/FlexContainer'
import { HamburgerIcon } from './HamburgerIcon'
import logo from '../../assets/icoRubinprod.svg'

const StyledHeader = styled(FlexContainer)`
    position: fixed;
    top: 0;
    padding: 25px;
    z-index: 100;
`

export const Header = () => {
    return (
        <StyledHeader alignItems="center" justifyContent="space-between">
            <img src={logo} />
            <HamburgerIcon />
        </StyledHeader>
    )
}
