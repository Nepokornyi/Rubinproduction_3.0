import { useBreakpointBiggerThan } from '../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../layout/types'
import { Box } from '../layout/Box'
import styled from 'styled-components'

type GradientProps = {
    children: React.ReactNode
}

const StyledBox = styled(Box)<LayoutFlexContainerProps>`
    background-image: ${(props) =>
        props.$isDesktopLayout && 'linear-gradient(#0C0C0C 50%, #BF1B32)'};
    clip-path: polygon(0 0, 100% 0, 100% 97%, 0% 100%);
`

export const Gradient = ({ children }: GradientProps) => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    return <StyledBox $isDesktopLayout={isDesktopLayout}>{children}</StyledBox>
}
