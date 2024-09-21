export type VariantStyles =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'nav'
    | 'socials'
    | 'button'

export type FontWeight =
    | 'font-light'
    | 'font-normal'
    | 'font-medium'
    | 'font-semibold'
    | 'font-bold'

export type FontHeight =
    | 'leading-none'
    | 'leading-tight'
    | 'leading-normal'
    | 'leading-loose'

export type FontFamily = 'font-open-sans' | 'font-grunges' | 'font-sans' | ''

export type TextTransform = 'capitalize' | 'lowercase' | 'uppercase' | 'none'
export type TextAlign = 'text-center' | 'text-left' | 'text-right' | 'inherit'

export const variantStyles: Record<VariantStyles, string> = {
    h1: 'text-4xl md:text-9xl font-bold',
    h2: 'text-3xl md:text-5xl font-bold',
    h3: 'text-2xl md:text-4xl font-bold',
    h4: 'text-xl md:text-2xl font-bold',
    p: 'text-base md:text-lg font-medium',
    nav: 'text-sm md:text-base font-normal',
    socials: 'text-sm uppercase font-normal',
    button: 'text-lg md:text-xl font-semibold',
}
