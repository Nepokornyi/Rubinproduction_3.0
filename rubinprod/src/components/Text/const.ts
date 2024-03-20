import { CSSProp, css } from 'styled-components'

export type VariantStyles =
    | 'h1'
    | 'h2'
    | 'h3'
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
        font-size: clamp(40px, 8vw + 1rem, 120px);
        font-weight: 700;
        &::first-letter {
            opacity: 0;
            font-size: clamp(45px, 8.5vw + 1rem, 130px);
        }
        img {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-55%);
            height: clamp(50px, 9vw + 1rem, 130px);
        }
    `,
    h2: css`
        font-size: clamp(40px, 7.5vw + 1rem, 80px);
        font-weight: 700;
    `,
    h3: css`
        font-size: clamp(40px, 6.5vw + 1rem, 80px);
        font-weight: 700;
    `,
    p: css`
        font-size: clamp(14px, 2.5vw, 16px);
        font-weight: 500;
    `,
    nav: css`
        font-size: clamp(10px, 2.5vw, 18px);
        font-weight: 400;
    `,
    socials: css`
        font-size: clamp(14px, 2.5vw, 18px);
        font-weight: 400;
        text-transform: uppercase;
    `,
    button: css`
        font-size: clamp(18px, 1.5vw, 26px);
        font-weight: 600;
    `,
}
