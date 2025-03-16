import { createNavigation } from 'next-intl/navigation'
import { routing } from './i18n/routing'

export const { Link, redirect, getPathname, usePathname, useRouter } =
    createNavigation(routing)
