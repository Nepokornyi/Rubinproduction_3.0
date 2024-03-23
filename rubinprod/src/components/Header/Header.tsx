import styled from 'styled-components'
import { FlexContainer } from '../layout/FlexContainer'
import { HamburgerIcon } from './Menu/HamburgerIcon'
import smallLogo from '../../assets/img/icoRubinprodSmall.svg'
import bigLogo from '../../assets/img/icoRubinprod.svg'
import { useHeaderStyleObserver } from '../../pages/AppMainLanding/hooks/useHeaderStyleObserver'
import { RefObject } from 'react'
import { useBreakpointBiggerThan } from '../../helpers/useCurrentBreakpoint'
import { HeaderMenu } from './Menu/HeaderMenu'
import { LayoutFlexContainerProps } from '../layout/types'

type StyledHeaderProps = LayoutFlexContainerProps & {
    backgroundColor?: string
    boxShadow?: string
}
type HeaderProps = {
    targetRef: RefObject<HTMLDivElement>
}

const StyledHeader = styled(FlexContainer)<StyledHeaderProps>`
    position: ${(props) => (props.$isDesktopLayout ? 'absolute' : 'fixed')};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => props.$isDesktopLayout && '90%'};
    padding: 25px;
    z-index: 100;
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    box-shadow: ${(props) => props.boxShadow || 'none'};
    transition: background-color 0.5s, box-shadow 0.5s;
    border: 1px solid blue;
`

export const Header = ({ targetRef }: HeaderProps) => {
    const { style } = useHeaderStyleObserver({ targetRef })

    const isDesktopLayout = useBreakpointBiggerThan('sm')

    const logoSrc = isDesktopLayout ? bigLogo : smallLogo
    const renderMenu = isDesktopLayout ? <HeaderMenu /> : <HamburgerIcon />

    return (
        <StyledHeader
            alignItems="center"
            justifyContent="space-between"
            $isDesktopLayout={isDesktopLayout}
            {...style}
        >
            <img src={logoSrc} />
            {renderMenu}
        </StyledHeader>
    )
}
