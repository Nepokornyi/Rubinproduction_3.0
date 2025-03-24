import { CommunityHandlersProp } from '../handlers/communityHandlers'

export type HeaderType = {
    label: string
    href?: string
    onClick?: keyof CommunityHandlersProp
    position: string
    numeration: number
}
