/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                secondary: '#F5ECED',
                primary: {
                    DEFAULT: '#1D2E49',
                    foreground: '#6582AE',
                },
            },
            fontSize: {
                c1: ['10px', '12px'],
                body4: ['13px', '15.6px'],
                body3: ['16px', '19.2px'],
                body2: ['20px', '24px'],
                body1: ['25px', '30px'],
                h4: ['31px', '37.2px'],
                h3: ['39px', '46.8px'],
                h2: ['49px', '58.8px'],
                h1: ['61px', '73.2px'],
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
            screens: {
                '16px': '1536px',
            },
        },
    },
    plugins: [],
}
