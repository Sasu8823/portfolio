/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                emerald: {
                    950: '#022c12',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'gradient': 'gradient 15s ease infinite',
                'blob': 'blob 7s infinite',
                'float': 'float 4s ease-in-out infinite',
                'float-slow': 'float 7s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'orb-float': 'orb-float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%':       { 'background-size': '200% 200%', 'background-position': 'right center' },
                },
                blob: {
                    '0%':   { transform: 'translate(0px, 0px) scale(1)' },
                    '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':      { transform: 'translateY(-16px)' },
                },
                'orb-float': {
                    '0%, 100%': { transform: 'translateY(0px) translateZ(0px) rotateX(0deg)' },
                    '33%':      { transform: 'translateY(-20px) translateZ(30px) rotateX(10deg)' },
                    '66%':      { transform: 'translateY(10px) translateZ(-20px) rotateX(-5deg)' },
                },
                shimmer: {
                    '0%':   { 'background-position': '-200% center' },
                    '100%': { 'background-position': '200% center' },
                },
            },
        },
    },
    plugins: [],
}
