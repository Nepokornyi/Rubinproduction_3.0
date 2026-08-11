import launchBlockersData from '@/content/launch-blockers.json'
import type { SiteSettings } from '@/types/content'

export const settings: SiteSettings = {
    title: 'who1snick — Hybrid Production for Music Videos',
    description:
        'Hybrid production, AI VFX enhancement, performance snippets and campaign visuals for music.',
    canonicalUrl:
        process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rubinproduction.eu',
    locale: 'en',
    instagramHandle: '@who1snick',
    instagramUrl: 'https://www.instagram.com/who1snick/',
}

export const navigation = [{ label: 'Services', href: '#services' }] as const
export const launchBlockers = launchBlockersData

export const heroMedia = {
    poster: '/assets/showreel/hero-poster-desktop.webp',
    mobilePoster: '/assets/showreel/hero-poster-mobile.webp',
    videoSrc: '/assets/showreel/hero-showreel-desktop.mp4',
    alt: 'Hero music video content placeholder',
} as const
