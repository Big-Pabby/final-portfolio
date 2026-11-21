import {
    Figma,
    FileCode2,
    FileCog,
    FileDown,
    FileJson,
    FileTerminal,
    FileText,
    LucideIcon,
} from 'lucide-react';
import { FileLang } from '@/lib/files';
import { cn } from '@/lib/utils';

// Icon and colour per file type, like an editor's icon theme.
const ICONS: Record<FileLang, { Icon: LucideIcon; color: string }> = {
    Markdown: { Icon: FileText, color: 'text-sky-500' },
    TypeScript: { Icon: FileCode2, color: 'text-blue-500' },
    JSON: { Icon: FileJson, color: 'text-amber-500' },
    YAML: { Icon: FileCog, color: 'text-purple-500' },
    'Shell Script': { Icon: FileTerminal, color: 'text-emerald-500' },
    Figma: { Icon: Figma, color: 'text-pink-500' },
    PDF: { Icon: FileDown, color: 'text-red-500' },
};

interface Props {
    lang: FileLang;
    size?: number;
    className?: string;
}

const FileIcon = ({ lang, size = 15, className }: Props) => {
    const { Icon, color } = ICONS[lang];

    return (
        <Icon
            size={size}
            className={cn('shrink-0', color, className)}
            aria-hidden="true"
        />
    );
};

export default FileIcon;
