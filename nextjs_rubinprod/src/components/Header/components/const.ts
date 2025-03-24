import { HeaderType } from './type'

export const defaultHeaderConfig: HeaderType[] = [
    {
        label: 'about',
        href: '#about',
        position: '-left-6',
        numeration: 1,
    },
    {
        label: 'portfolio',
        href: '/#portfolio',
        position: '-right-6',
        numeration: 2,
    },
    {
        label: 'community',
        href: '/community',
        position: '-left-6',
        numeration: 3,
    },
]

export const caseHeaderConfig: HeaderType[] = [
    { label: 'home', href: '/', position: '-right-6', numeration: 1 },
    {
        label: 'about',
        href: '#about',
        position: '-left-6',
        numeration: 2,
    },
    {
        label: 'community',
        href: '/community',
        position: '-right-6',
        numeration: 3,
    },
]

export const getCommunityHeaderConfig = (
    isSubscribed: boolean
): HeaderType[] => {
    const config: HeaderType[] = [
        {
            label: isSubscribed ? 'membership' : 'subscription',
            onClick: isSubscribed
                ? 'handleManageSubscription'
                : 'handleSubscribe',
            position: '-left-6',
            numeration: 1,
        },
        {
            label: 'logout',
            onClick: 'handleLogout',
            position: '-left-6',
            numeration: 2,
        },
    ]

    return config
}

export const loginHeaderConfig: HeaderType[] = [
    { label: 'home', href: '/', position: '-right-6', numeration: 1 },
]

export const PrivacyTermsHeaderConfig: HeaderType[] = [
    { label: 'home', href: '/', position: '-right-6', numeration: 1 },
]

export const headerLanguages = ['en', 'de', 'cz']
