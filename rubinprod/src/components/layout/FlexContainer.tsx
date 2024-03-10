import { ReactNode } from 'react'
import styled from 'styled-components'
import { Direction, HorizontalAlign, VerticalAlign } from './types'

type FlexContainerProps = {
    children: ReactNode
    direction?: Direction
    minHeight?: string

    justifyContent?: HorizontalAlign
    alignItems?: VerticalAlign
    center?: boolean
    gap?: string

    className?: string
}

type StyledFlexContainerProps = {
    $direction: Direction
    $horizontalAlign: HorizontalAlign
    $verticalAlign: VerticalAlign
    $minHeight: string
    $gap?: string
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
    display: flex;
    position: relative;
    flex-direction: ${(props) => props.$direction};
    align-items: ${(props) => props.$verticalAlign};
    justify-content: ${(props) => props.$horizontalAlign};
    gap: ${(props) => props.$gap};
    min-height: ${(props) => props.$minHeight};
    width: 100%;
`

export const FlexContainer = ({
    children,
    direction = 'row',
    minHeight = 'auto',
    justifyContent: horizontalAlignPassed,
    alignItems: verticalAlignPassed,
    center = false,
    gap = '0',
    className,
}: FlexContainerProps) => {
    const defaultAlign = center ? 'center' : 'none'
    const horizontalAlign = horizontalAlignPassed ?? defaultAlign
    const verticalAlign = verticalAlignPassed ?? defaultAlign

    return (
        <StyledFlexContainer
            $direction={direction}
            $horizontalAlign={horizontalAlign}
            $verticalAlign={verticalAlign}
            $minHeight={minHeight}
            $gap={gap}
            className={className}
        >
            {children}
        </StyledFlexContainer>
    )
}
