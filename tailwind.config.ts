import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
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
                // Comic "ink" (always dark) and "paper" (always light).
                ink: 'hsl(var(--ink) / <alpha-value>)',
                paper: 'hsl(var(--paper) / <alpha-value>)',
                // Outlines, dividers and hard shadows: whichever of ink or
                // paper contrasts with the page in the current day/night theme.
                line: 'hsl(var(--line) / <alpha-value>)',
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
            // Subtle shadows for cards and interactive controls.
            boxShadow: {
                comic: '0 8px 24px rgb(0 0 0 / 0.18)',
                'comic-lg': '0 12px 32px rgb(0 0 0 / 0.22)',
                'comic-sm': '0 4px 12px rgb(0 0 0 / 0.16)',
                'comic-ink': '0 8px 24px rgb(0 0 0 / 0.18)',
                'comic-primary': '0 8px 24px hsl(var(--primary) / 0.12)',
                'comic-primary-lg': '0 12px 32px hsl(var(--primary) / 0.16)',
                'comic-primary-sm': '0 4px 12px hsl(var(--primary) / 0.12)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                display: [
                    'var(--font-roboto-flex)',
                    'sans-serif',
                ],
                sans: [
                    'var(--font-roboto-flex)',
                    'ui-sans-serif',
                    'system-ui',
                    'sans-serif',
                ],
                mono: [
                    'var(--font-geist-mono)',
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'monospace',
                ],
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
    plugins: [
        tailwindAnimate,
        // `day:` styles apply while the day theme is on (see app/globals.css).
        plugin(({ addVariant }) => {
            addVariant('day', ':root[data-theme="day"] &');
        }),
    ],
} satisfies Config;
