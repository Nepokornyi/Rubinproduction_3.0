import { css } from 'styled-components'

export type VariantStyles = 'h1' | 'h2' | 'p' | 'nav' | 'socials' | 'contacts'
export type FontWeight = '300' | '400' | '500' | '600' | '700'
export type TextTransform = 'capitalize' | 'lowercase' | 'uppercase'
export type TextAlign = 'center' | 'left' | 'right'
export type FontFamily = 'Montserrat' | 'Open Sans' | 'Cormorant'

export const variantStyles = {
    h1: css`
        font-size: clamp(30px, 1.5vw, 120px);
        font-weight: 700;
    `,
    h2: css`
        font-size: clamps(30px, 1.5vw, 75px);
        font-weight: 700;
    `,
    p: css`
        font-size: clamp(10px, 1.5vw, 14px);
        font-weight: 500;
    `,
    nav: css`
        font-size: clamp(10px, 1.5vw, 18px);
        font-weight: 400;
    `,
    socials: css`
        font-size: clamp(9px, 1.5vw, 20px);
        font-weight: 400;
    `,
    contacts: css`
        font-size: clamp(12px, 1.5vw, 20px);
        font-weight: 400;
    `,
}
