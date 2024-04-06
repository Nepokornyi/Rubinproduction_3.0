import { HTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'

interface ArrowRefProps extends HTMLAttributes<HTMLElement> {
    isFullWidth?: boolean
}

type ArrowProps = {
    $isFullWidth?: boolean
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
        border-top: 2px solid;
        border-right: 2px solid;
        transform: rotate(45deg);
        bottom: 7px;
    }
    &::before {
        width: ${(props) => (props.$isFullWidth ? '100%' : '75px')};
        height: 2px;
        bottom: 10px;
        background: currentColor;
    }
`

const StyledCustomArrowDown = styled.i`
    & {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 22px;
        height: clamp(80px, 20vw, 100px);
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
        border-top: 2px solid;
        border-right: 2px solid;
        transform: rotate(135deg);
        left: 7px;
        bottom: 11px;
    }
    &::before {
        width: 2px;
        height: 120px; /* Lengthened for vertical orientation */
        height: clamp(80px, 20vw, 100px);
        left: 10px;
        bottom: 13px;
        background: currentColor;
    }
`

const ArrowRight = forwardRef<HTMLElement, ArrowRefProps>((props, ref) => {
    return (
        <>
            <StyledArrowRight
                {...props}
                ref={ref}
                icon-role="arrow-right"
                $isFullWidth={props.isFullWidth}
            />
        </>
    )
})

const CustomArrowDown = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    (props, ref) => {
        return (
            <>
                <StyledCustomArrowDown
                    {...props}
                    ref={ref}
                    icon-role="arrow-right"
                />
            </>
        )
    }
)

// Setting displayName for the component
ArrowRight.displayName = 'ArrowRight'
CustomArrowDown.displayName = 'CustomArrowDown'

export { ArrowRight, CustomArrowDown }
