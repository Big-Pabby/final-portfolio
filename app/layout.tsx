import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Roboto_Flex } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import IdeShell from '@/components/ide/IdeShell';
import {
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_TITLE,
    SITE_URL,
    TWITTER_HANDLE,
} from '@/lib/site';
import { THEME_INIT_SCRIPT } from '@/lib/theme';

// Editor chrome and Markdown prose.
const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
    display: 'swap',
});

// Code.
const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    keywords: [
        'Victor Adekunle',
        'Software Engineer',
        'Frontend Engineer',
        'Full Stack Developer',
        'React',
        'Next.js',
        'Vue',
        'Nuxt',
        'React Native',
        'Node.js',
        'AI',
        'Portfolio',
    ],
    openGraph: {
        type: 'website',
        url: '/',
        siteName: SITE_NAME,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        creator: TWITTER_HANDLE,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#080d17',
    colorScheme: 'dark light',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // data-theme is set by THEME_INIT_SCRIPT before React hydrates.
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
                />
            </head>
            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
            <body
                className={`${robotoFlex.variable} ${geistMono.variable} antialiased`}
            >
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                <IdeShell>{children}</IdeShell>
            </body>
        </html>
    );
}
