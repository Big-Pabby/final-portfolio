import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/** Remove HTML tags and collapse whitespace — used for meta descriptions. */
export const stripHtml = (html: string) =>
    html
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

/** Trim text to a maximum length, adding an ellipsis when cut. */
export const truncate = (text: string, max = 160) =>
    text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;

/** Build a mailto: URL with an optional pre-filled subject and body. */
export const buildMailto = (email: string, subject?: string, body?: string) => {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    if (body) params.set('body', body);
    const query = params.toString().replace(/\+/g, '%20');
    return `mailto:${email}${query ? `?${query}` : ''}`;
};

export const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const hasFinePointer = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;
