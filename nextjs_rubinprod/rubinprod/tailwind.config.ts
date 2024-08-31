import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                spin: 'spin 0.85s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            },
            keyframes: {
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            colors: {
                // primary: {
                //     highlight: 'var(--color-primary-highlight)',
                //     background: 'var(--color-primary-background)',
                // },
                // secondary: {},
            },
        },
    },
    plugins: [],
}
export default config
