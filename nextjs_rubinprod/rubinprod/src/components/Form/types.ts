export const InputVariants = {
    default: 'focus:border-[#d91e37] md:focus:border-[#0d0d0d]',
    scooty: 'focus:border-[#D7F000]',
    gameChanger: 'focus:border-[#7055EC]',
    eliteVoyage: 'focus:border-[#B9965A]',
}

export const ErrorVariants = {
    default: 'text-[#d91e37] md:text-[#0d0d0d]',
    scooty: 'text-[#D7F000]',
    gameChanger: 'text-[#7055EC]',
    eliteVoyage: 'text-[#B9965A]',
}

export type InputVariantsList = keyof typeof InputVariants
export type ErrorVariantsList = keyof typeof ErrorVariants
