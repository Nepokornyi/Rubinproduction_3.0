import { CSSProp, css } from 'styled-components'

export type VariantStyles =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'nav'
    | 'socials'
    | 'button'
export type FontWeight = '300' | '400' | '500' | '600' | '700'
export type TextTransform = 'capitalize' | 'lowercase' | 'uppercase'
export type TextAlign = 'center' | 'left' | 'right'
export type FontFamily = 'Montserrat' | 'Open Sans' | 'Grunges'

export const variantStyles: Record<VariantStyles, CSSProp> = {
    h1: css`
        font-size: clamp(40px, 7.5vw + 1rem, 130px);
        font-weight: 700;
        img {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-55%);
            height: clamp(50px, 9vw + 1rem, 130px);
        }
    `,
    h2: css`
        font-size: clamp(40px, 5vw + 1rem, 80px);
        font-weight: 700;
    `,
    h3: css`
        font-size: clamp(40px, 4vw + 1rem, 50px);
        font-weight: 700;
    `,
    h4: css`
        font-size: clamp(25px, 1.75vw + 1rem, 40px);
        font-weight: 700;
    `,
    p: css`
        font-size: clamp(14px, 2.5vw, 16px);
        font-weight: 500;
        @media (min-width: 576px) {
            word-spacing: 2.5px;
            line-height: 2;
        }
    `,
    nav: css`
        font-size: clamp(14px, 2.5vw, 18px);
        font-weight: 400;
    `,
    socials: css`
        font-size: clamp(14px, 1.5vw, 16px);
        font-weight: 400;
        text-transform: uppercase;
    `,
    button: css`
        font-size: clamp(18px, 1.75vw, 35px);
        font-weight: 600;
    `,
}
