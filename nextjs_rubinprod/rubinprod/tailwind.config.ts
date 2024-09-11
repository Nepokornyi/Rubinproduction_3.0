import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            minHeight: {
                '100vh': '100vh',
                '50vh': '50vh',
                screen: '100vh',
            },
            colors: {},
            clipPath: {
                'custom-path': 'polygon(0 0, 100% 0, 100% 97%, 0% 100%)',
            },
            animation: {
                spin: 'spin 0.85s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            },
            keyframes: {
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
export default config
