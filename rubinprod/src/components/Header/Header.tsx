import styled from 'styled-components'
import { FlexContainer } from '../layout/FlexContainer'

const StyledHeader = styled(FlexContainer)`
    position: fixed;
    top: 0;
    border: 1px solid blue;
    padding: 25px;
`

export const Header = () => {
    return (
        <StyledHeader justifyContent="space-between">
            <div>icon</div>
            <div>hamburger</div>
        </StyledHeader>
    )
}
