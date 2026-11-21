import type { Metadata } from 'next';

/**
 * Site-wide constants shared by metadata, sitemap, robots and the OG image.
 * Update SITE_URL when the domain changes.
 */
export const SITE_URL = 'https://victor-adekunle-swart.vercel.app';
export const SITE_NAME = 'Victor Adekunle';
export const SITE_TITLE = 'Victor Adekunle · Software Engineer';
export const SITE_DESCRIPTION =
    'Personal portfolio of Victor Adekunle — a software engineer building scalable web, mobile, and AI-powered products across the full stack.';
export const TWITTER_HANDLE = '@Big__Pabby';

/** The share image drawn by app/opengraph-image.tsx. */
export const SHARE_IMAGE = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} - Software Engineer. README.md open in a code editor.`,
};

interface PageMeta {
    /** Short page title, e.g. "About me". The site name is added around it. */
    title: string;
    description: string;
    /** Route of the page, e.g. "/about". */
    path: string;
    /** Project pages share as articles; everything else is a website page. */
    type?: 'website' | 'article';
    /** Overrides the browser-tab title when it should differ from `title`. */
    tabTitle?: string;
}

/**
 * Metadata for one page: its title, description and canonical URL, plus
 * social tags that match. Without these, a shared link to an inner page
 * would show the home page's title, description and URL.
 */
export const pageMetadata = ({
    title,
    description,
    path,
    type = 'website',
    tabTitle,
}: PageMeta): Metadata => {
    const socialTitle = `${title} · ${SITE_NAME}`;

    return {
        title: tabTitle ?? title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type,
            url: path,
            siteName: SITE_NAME,
            title: socialTitle,
            description,
            locale: 'en_US',
            // A page that sets its own social tags no longer inherits the
            // root share image, so it is named here.
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description,
            creator: TWITTER_HANDLE,
            images: [SHARE_IMAGE],
        },
    };
};
