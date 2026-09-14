import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background) / <alpha-value>)',
                    light: 'hsl(var(--background-light) / <alpha-value>)',
                },
                foreground: 'hsl(var(--foreground) / <alpha-value>)',
                card: {
                    DEFAULT: 'hsl(var(--card) / <alpha-value>)',
                    foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
                    foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                    foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
                    foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
                    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
                    foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
                    foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
                },
                // Comic "ink" (outlines) and "paper" (light fills / hard shadows).
                ink: 'hsl(var(--ink) / <alpha-value>)',
                paper: 'hsl(var(--paper) / <alpha-value>)',
                border: 'hsl(var(--border) / <alpha-value>)',
                input: 'hsl(var(--input) / <alpha-value>)',
                ring: 'hsl(var(--ring) / <alpha-value>)',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            // Hard, un-blurred offsets: the classic comic drop shadow.
            boxShadow: {
                comic: '5px 5px 0 0 hsl(var(--paper))',
                'comic-lg': '8px 8px 0 0 hsl(var(--paper))',
                'comic-sm': '3px 3px 0 0 hsl(var(--paper))',
                'comic-ink': '5px 5px 0 0 hsl(var(--ink))',
                'comic-primary': '6px 6px 0 0 hsl(var(--primary))',
                'comic-primary-sm': '3px 3px 0 0 hsl(var(--primary))',
                'comic-secondary': '6px 6px 0 0 hsl(var(--secondary))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                display: [
                    'var(--font-bangers)',
                    'Impact',
                    'Arial Narrow Bold',
                    'sans-serif',
                ],
                'roboto-flex': ['var(--font-roboto-flex)'],
            },
            padding: {
                section: '250px',
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    xl: '1148px',
                    '2xl': '1148px',
                },
            },
            transitionDuration: {
                '7000': '7s',
            },
            screens: {
                xs: '420px',
            },
        },
    },
    plugins: [tailwindAnimate],
} satisfies Config;
