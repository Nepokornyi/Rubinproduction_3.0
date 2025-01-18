export type CommunityVideosGridTypes = 'free' | 'paid'

type GridStyles = {
    title: string
    text: string
    background: string
}

export const communityGridStyles: Record<CommunityVideosGridTypes, GridStyles> =
    {
        free: {
            title: 'text-black',
            text: 'text-black',
            background: 'bg-[#c4c4c4]',
        },
        paid: {
            title: 'text-white',
            text: 'text-[#B2BECD]',
            background: 'bg-[#191919]',
        },
    }
