import { ExternalLink } from 'lucide-react';
import type { ComponentType } from 'react';
import { SOCIAL_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
    GithubIcon,
    LinkedinIcon,
    MediumIcon,
    XIcon,
} from './icons/SocialIcons';

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    twitter: XIcon,
    medium: MediumIcon,
};

const LABELS: Record<string, string> = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'X (Twitter)',
    medium: 'Medium',
};

interface Props {
    className?: string;
    iconSize?: number;
}

const SocialLinks = ({ className, iconSize = 18 }: Props) => {
    return (
        <ul className={cn('flex items-center gap-3', className)}>
            {SOCIAL_LINKS.map((link) => {
                const Icon = ICONS[link.name] ?? ExternalLink;
                const label = LABELS[link.name] ?? link.name;

                return (
                    <li key={link.name}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            title={label}
                            className="icon-btn size-11"
                        >
                            <Icon size={iconSize} />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SocialLinks;
