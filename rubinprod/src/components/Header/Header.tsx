import styled from 'styled-components'
import { FlexContainer } from '../layout/FlexContainer'

import { useBreakpointBiggerThan } from '../../helpers/useCurrentBreakpoint'
import { HeaderMenu } from './Menu/HeaderMenu'
import { LayoutFlexContainerProps } from '../layout/types'
import { HamburgerMenu } from './Menu/HamburgerMenu'
import { Reveal } from '../animations/reveal/Reveal'

import bigLogoRed from '../../assets/img/icoRubinprod.svg'
import smallLogoRed from '../../assets/img/icoRubinprodSmall.svg'
import bigLogoWhite from '../../assets/img/icoRubinpodWhite.svg'
import smallLogoWhite from '../../assets/img/icoRubinprodSmallWhite.svg'
import { useEffect, useState } from 'react'

export type AppLandingVariants = 'main' | 'case'

type StyledHeaderProps = LayoutFlexContainerProps & {
    $isDesktopLayout: boolean
    backgroundColor?: string
    boxShadow?: string
}
type HeaderProps = {
    variants?: AppLandingVariants
}

const StyledHeader = styled(FlexContainer)<StyledHeaderProps>`
    position: ${(props) => (props.$isDesktopLayout ? 'absolute' : 'fixed')};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => props.$isDesktopLayout && '85%'};
    padding: 10px 25px;
    z-index: 100;
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    transition: background-color 0.5s;
`

export const Header = ({ variants = 'main' }: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState({})
    const isDesktopLayout = useBreakpointBiggerThan('md')

    const bigLogo = variants === 'main' ? bigLogoRed : bigLogoWhite
    const smallLogo = variants === 'main' ? smallLogoRed : smallLogoWhite

    const logoSrc = isDesktopLayout ? bigLogo : smallLogo

    const renderMenu = isDesktopLayout ? (
        <HeaderMenu variants={variants} />
    ) : (
        <HamburgerMenu variants={variants} />
    )

    useEffect(() => {
        if (!isDesktopLayout) {
            const handleScroll = () => {
                const newStyle =
                    window.scrollY > 100
                        ? {
                              backgroundColor: '#0C0C0C',
                              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.5)',
                          }
                        : {}
                setHeaderStyle(newStyle)
            }

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
        // If it's desktop layout, ensure the header is reset to default styles if needed
        else {
            setHeaderStyle({})
        }
    }, [isDesktopLayout])

    return (
        <StyledHeader
            alignItems="center"
            justifyContent="space-between"
            $isDesktopLayout={isDesktopLayout}
            {...headerStyle}
        >
            <Reveal style={{ zIndex: 2 }} delay={0.25}>
                <img src={logoSrc} style={{ zIndex: 100 }} />
            </Reveal>
            {renderMenu}
        </StyledHeader>
    )
}
