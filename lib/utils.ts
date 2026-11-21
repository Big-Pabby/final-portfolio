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

/** The job title on the first line of a project's `role` HTML, e.g. "Software Engineer". */
export const getRoleTitle = (role: string) =>
    stripHtml(role.split(/<br\s*\/?>/i)[0]);

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

export interface TextBlock {
    type: 'paragraph' | 'item' | 'label';
    text: string;
}

/**
 * Turn the simple HTML used in project write-ups (text, <br/>, <ul><li>)
 * into plain blocks, so each one can be its own line in the editor.
 * A short line ending in a colon, e.g. "Key Features:", becomes a label.
 */
export const htmlToBlocks = (html: string): TextBlock[] =>
    html
        .replace(/<li>/gi, '\n- ')
        .replace(/<\/li>|<\/?ul>|<br\s*\/?>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&')
        .split('\n')
        .map((line) => line.replace(/\s+/g, ' ').trim())
        .filter((line) => line && line !== '.')
        .map((line): TextBlock => {
            if (line.startsWith('- ')) {
                return { type: 'item', text: line.slice(2) };
            }
            if (line.endsWith(':') && line.length < 40) {
                return { type: 'label', text: line.slice(0, -1) };
            }
            return { type: 'paragraph', text: line };
        });
