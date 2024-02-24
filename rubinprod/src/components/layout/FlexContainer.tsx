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

    className?: string
}

type StyledFlexContainerProps = {
    $direction: Direction
    $horizontalAlign: HorizontalAlign
    $verticalAlign: VerticalAlign
    $minHeight: string
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
    display: flex;
    position: relative;
    flex-direction: ${(props) => props.$direction};
    align-items: ${(props) => props.$verticalAlign};
    justify-content: ${(props) => props.$horizontalAlign};
    min-height: ${(props) => props.$minHeight};
    width: 100%;
    border: 1px solid red;
`

export const FlexContainer = ({
    children,
    direction = 'row',
    minHeight = 'auto',
    justifyContent: horizontalAlignPassed,
    alignItems: verticalAlignPassed,
    center = false,
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
            className={className}
        >
            {children}
        </StyledFlexContainer>
    )
}
