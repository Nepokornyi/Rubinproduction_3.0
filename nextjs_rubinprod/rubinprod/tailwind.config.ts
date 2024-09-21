import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontSize: {
            xs: ['0.75rem', '1'],
            sm: ['0.875rem', '1'],
            base: ['1rem', '2'],
            lg: ['1.125rem', '1'],
            xl: ['1.25rem', '1'],
            '2xl': ['1.5rem', '1'],
            '3xl': ['1.875rem', '1'],
            '4xl': ['2.25rem', '1'],
            '5xl': ['3rem', '1'],
            '6xl': ['3.75rem', '1'],
            '7xl': ['4.5rem', '1'],
            '8xl': ['6rem', '1'],
            '9xl': ['8rem', '1'],
        },
        extend: {
            minHeight: {
                '100vh': '100vh',
                '50vh': '50vh',
                screen: '100vh',
            },
            fontFamily: {
                grunges: ['Grunges', 'sans-serif'],
                'open-sans': ['Open Sans', 'sans-serif'],
                sans: ['sans-serif'],
            },
            colors: {},
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
