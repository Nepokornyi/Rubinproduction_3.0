import styled from 'styled-components'

const StyledHamburgerIcon = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 27px;
    height: 18px;
    cursor: pointer;

    div {
        width: 27px;
        height: 2px;
        background-color: #fff;
        transition: 350ms ease;
    }

    &:hover div {
        &:first-child {
            position: absolute;
            top: 50%;
            transform: rotate(45deg);
        }

        &:nth-child(2) {
            position: absolute;
            top: 50%;
            transform: rotate(-45deg);
        }
    }
`

export const HamburgerIcon = () => {
    return (
        <StyledHamburgerIcon>
            <div />
            <div />
        </StyledHamburgerIcon>
    )
}
