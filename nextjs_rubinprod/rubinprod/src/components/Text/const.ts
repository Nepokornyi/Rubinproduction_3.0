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
    h1: 'text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold',
    h2: 'text-4xl md:text-6xl lg:text-7xl font-bold',
    h3: 'text-2xl md:text-4xl font-bold',
    h4: 'text-[40px] md:text-7xl font-bold',
    p: 'text-sm md:text-base font-medium',
    nav: 'text-lg uppercase font-normal',
    socials: 'text-sm lg:text-base uppercase font-normal',
    button: 'text-lg md:text-xl font-semibold',
}
