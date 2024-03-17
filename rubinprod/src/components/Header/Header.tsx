import styled from 'styled-components'
import { FlexContainer } from '../layout/FlexContainer'
import { HamburgerIcon } from './HamburgerIcon'
import logo from '../../assets/img/icoRubinprod.svg'
import { useHeaderStyleObserver } from '../../pages/AppMainLanding/hooks/useHeaderStyleObserver'
import { RefObject } from 'react'

type StyledHeaderProps = {
    backgroundColor?: string
    boxShadow?: string
}

type HeaderProps = {
    targetRef: RefObject<HTMLDivElement>
}

const StyledHeader = styled(FlexContainer)<StyledHeaderProps>`
    position: fixed;
    top: 0;
    padding: 25px;
    z-index: 100;
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    box-shadow: ${(props) => props.boxShadow || 'none'};
    transition: background-color 0.5s, box-shadow 0.5s;
`

export const Header = ({ targetRef }: HeaderProps) => {
    const { style } = useHeaderStyleObserver({ targetRef })

    return (
        <StyledHeader
            alignItems="center"
            justifyContent="space-between"
            {...style}
        >
            <img src={logo} />
            <HamburgerIcon />
        </StyledHeader>
    )
}
