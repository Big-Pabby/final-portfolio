import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { buildMailto } from '@/lib/utils';

export const MAILTO = buildMailto(
    GENERAL_INFO.email,
    GENERAL_INFO.emailSubject,
    GENERAL_INFO.emailBody,
);

export const SOCIAL_LABELS: Record<string, string> = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'X',
    blog: 'Blog',
    medium: 'Medium',
};

export const GITHUB_URL =
    SOCIAL_LINKS.find((link) => link.name === 'github')?.url ?? '#';

/** Start a download of the CV without leaving the page. */
export const downloadCv = () => {
    const link = document.createElement('a');
    link.href = GENERAL_INFO.resume;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    link.remove();
};

export const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(GENERAL_INFO.email);
        return true;
    } catch {
        // Clipboard access can be denied.
        return false;
    }
};

/** My local time, e.g. "09:07 GMT+1". */
export const formatLocalTime = (date: Date) =>
    new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: GENERAL_INFO.timeZone,
        timeZoneName: 'short',
    }).format(date);
