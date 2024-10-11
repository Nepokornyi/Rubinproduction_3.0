export type VariantStyles =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'p'
    | 'nav'
    | 'socials'
    | 'button'
    | 'contact'
    | 'contact-accent'

export type FontWeight =
    | 'font-light'
    | 'font-normal'
    | 'font-medium'
    | 'font-semibold'
    | 'font-bold'
    | ''

export type FontHeight =
    | 'leading-none'
    | 'leading-tight'
    | 'leading-normal'
    | 'leading-loose'

export type FontFamily = 'font-open-sans' | 'font-grunges' | 'font-sans' | ''

export type TextTransform = 'capitalize' | 'lowercase' | 'uppercase' | 'none'
export type TextAlign = 'text-center' | 'text-left' | 'text-right' | 'inherit'

export const variantStyles: Record<VariantStyles, string> = {
    h1: 'text-4xl md:text-[78px] lg:text-8xl 2xl:text-9xl font-bold',
    h2: 'text-4xl md:text-6xl lg:text-7xl font-bold',
    h3: 'text-2xl md:text-4xl font-bold',
    h4: 'text-[40px] md:text-7xl font-bold',
    h5: 'text-[18px] md:text-[28px] font-bold',
    p: 'text-sm md:text-base font-medium',
    nav: 'text-lg uppercase font-normal',
    socials: 'text-sm lg:text-base uppercase font-normal',
    button: 'text-lg md:text-xl font-semibold',
    contact: 'text-4xl md:text-[56px] lg:text-6xl xl:text-7xl font-bold',
    'contact-accent':
        'text-[38px] md:text-4xl lg:text-4xl xl:text-5xl font-bold',
}
