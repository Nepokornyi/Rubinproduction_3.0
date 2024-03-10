import { HTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'

// TODO: check for optimization in future

const StyledSmallArrowRight = styled.i`
    & {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 30px;
        height: 44px;
        cursor: pointer;
    }
    &::after,
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        right: 6px;
    }
    &::after {
        width: 16px;
        height: 16px;
        border-top: 2px solid #6e6e6e;
        border-right: 2px solid #6e6e6e;
        transform: rotate(45deg);
        bottom: 14px;
    }
`

const StyledSmallArrowLeft = styled.i`
    & {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 30px;
        height: 44px;
        cursor: pointer;
    }
    &::after,
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        right: 6px;
    }
    &::after {
        width: 16px;
        height: 16px;
        border-top: 2px solid #6e6e6e;
        border-left: 2px solid #6e6e6e;
        transform: rotate(-45deg);
        bottom: 14px;
    }
`

const SmallArrowRight = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    (props, ref) => {
        return (
            <>
                <StyledSmallArrowRight
                    {...props}
                    ref={ref}
                    icon-role="small-arrow-right"
                />
            </>
        )
    }
)

const SmallArrowLeft = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    (props, ref) => {
        return (
            <>
                <StyledSmallArrowLeft
                    {...props}
                    ref={ref}
                    icon-role="small-arrow-left"
                />
            </>
        )
    }
)

// Setting displayName for the component
SmallArrowRight.displayName = 'SmallArrowRight'
SmallArrowLeft.displayName = 'SmallArrowLeft'

export { SmallArrowRight, SmallArrowLeft }
