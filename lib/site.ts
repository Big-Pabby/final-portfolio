import type { Metadata } from 'next';

/**
 * Site-wide constants shared by metadata, sitemap and robots.
 * Update SITE_URL when the domain changes.
 */
export const SITE_URL = 'https://victor-adekunle-swart.vercel.app';
export const SITE_NAME = 'Victor Adekunle';
export const SITE_TITLE = 'Victor Adekunle · Software Engineer';
export const SITE_DESCRIPTION =
    'Personal portfolio of Victor Adekunle — a software engineer building scalable web, mobile, and AI-powered products across the full stack.';
export const TWITTER_HANDLE = '@Big__Pabby';

/**
 * The image shown when a link to the site is shared: public/cover-image.png.
 * Keep width and height in step with the file if it is replaced.
 */
export const SHARE_IMAGE = {
    url: '/cover-image.png',
    width: 1918,
    height: 903,
    alt: `${SITE_NAME}’s portfolio: a code editor with README.md open and a terminal below.`,
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
