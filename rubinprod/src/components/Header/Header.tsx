import styled from 'styled-components'
import { FlexContainer } from '../layout/FlexContainer'

import { useHeaderStyleObserver } from '../../pages/AppMainLanding/hooks/useHeaderStyleObserver'
import { RefObject } from 'react'
import { useBreakpointBiggerThan } from '../../helpers/useCurrentBreakpoint'
import { HeaderMenu } from './Menu/HeaderMenu'
import { LayoutFlexContainerProps } from '../layout/types'
import { HamburgerMenu } from './Menu/HamburgerMenu'
import { Reveal } from '../animations/reveal/Reveal'

import bigLogoRed from '../../assets/img/icoRubinprod.svg'
import smallLogoRed from '../../assets/img/icoRubinprodSmall.svg'
import bigLogoWhite from '../../assets/img/icoRubinpodWhite.svg'
import smallLogoWhite from '../../assets/img/icoRubinprodSmallWhite.svg'

export type AppLandingVariants = 'main' | 'case'

type StyledHeaderProps = LayoutFlexContainerProps & {
    backgroundColor?: string
    boxShadow?: string
}
type HeaderProps = {
    targetRef: RefObject<HTMLDivElement>
    variants?: AppLandingVariants
}

const StyledHeader = styled(FlexContainer)<StyledHeaderProps>`
    position: ${(props) => (props.$isDesktopLayout ? 'absolute' : 'fixed')};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => props.$isDesktopLayout && '85%'};
    padding: 25px;
    z-index: 100;
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    transition: background-color 0.5s, box-shadow 0.5s;
`

export const Header = ({ targetRef, variants = 'main' }: HeaderProps) => {
    const { style } = useHeaderStyleObserver({ targetRef })

    const isDesktopLayout = useBreakpointBiggerThan('md')

    const bigLogo = variants === 'main' ? bigLogoRed : bigLogoWhite
    const smallLogo = variants === 'main' ? smallLogoRed : smallLogoWhite

    const logoSrc = isDesktopLayout ? bigLogo : smallLogo

    const renderMenu = isDesktopLayout ? (
        <HeaderMenu variants={variants} />
    ) : (
        <HamburgerMenu variants={variants} />
    )

    return (
        <StyledHeader
            alignItems="center"
            justifyContent="space-between"
            $isDesktopLayout={isDesktopLayout}
            {...style}
        >
            <Reveal style={{ zIndex: 2 }} delay={0.25}>
                <img src={logoSrc} style={{ zIndex: 100 }} />
            </Reveal>
            {renderMenu}
        </StyledHeader>
    )
}
