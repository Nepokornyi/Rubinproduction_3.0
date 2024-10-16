import { HTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'

interface ArrowRefProps extends HTMLAttributes<HTMLElement> {
    $isFullWidth?: boolean
    $isFullHeight?: boolean
}

type ArrowProps = {
    $isFullWidth?: boolean
    $isFullHeight?: boolean
}

const StyledArrowRight = styled.i<ArrowProps>`
    box-sizing: border-box;
    position: relative;
    display: block;
    width: ${(props) => (props.$isFullWidth ? '100%' : '80px')};
    height: 22px;

    &::after,
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        right: 3px;
    }
    &::after {
        width: 8px;
        height: 8px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(45deg);
        bottom: 7px;
    }
    &::before {
        width: ${(props) => (props.$isFullWidth ? '100%' : '75px')};
        height: 2px;
        bottom: 10px;
        background: #fff;
    }
`

const StyledCustomArrowDown = styled.i<ArrowProps>`
    & {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 22px;
        height: ${(props) =>
            props.$isFullHeight ? '100%' : 'clamp(80px, 20vw, 100px)'};
    }
    &::after,
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
    }
    &::after {
        width: 8px;
        height: 8px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(135deg);
        left: 7px;
        bottom: 11px;
    }
    &::before {
        width: 2px;
        height: 120px; /* Lengthened for vertical orientation */
        height: ${(props) =>
            props.$isFullHeight ? '100%' : 'clamp(80px, 20vw, 100px)'};
        left: 10px;
        bottom: 13px;
        background: #fff;
    }
`

const ArrowRight = forwardRef<HTMLElement, ArrowRefProps>((props, ref) => {
    return (
        <>
            <StyledArrowRight
                {...props}
                ref={ref}
                icon-role="arrow-right"
                $isFullWidth={props.$isFullWidth}
            />
        </>
    )
})

const CustomArrowDown = forwardRef<HTMLElement, ArrowRefProps>((props, ref) => {
    return (
        <>
            <StyledCustomArrowDown
                {...props}
                ref={ref}
                icon-role="arrow-right"
                $isFullHeight={props.$isFullHeight}
            />
        </>
    )
})

// Setting displayName for the component
ArrowRight.displayName = 'ArrowRight'
CustomArrowDown.displayName = 'CustomArrowDown'

export { ArrowRight, CustomArrowDown }
