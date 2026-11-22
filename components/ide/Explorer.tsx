'use client';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IFile, TREE, WORKSPACE } from '@/lib/files';
import { cn } from '@/lib/utils';
import FileIcon from './FileIcon';

const ROW =
    'flex h-7 w-full items-center gap-1.5 pr-3 text-left text-[13px] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground';

const FileRow = ({ file, depth }: { file: IFile; depth: number }) => {
    const pathname = usePathname();
    const isActive = pathname === file.href;
    const style = { paddingLeft: `${depth * 12 + 22}px` };

    return (
        <Link
            href={file.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(ROW, isActive && 'bg-muted text-foreground')}
            style={style}
        >
            <FileIcon lang={file.lang} />
            <span className="truncate">{file.name}</span>
        </Link>
    );
};

/** The file tree in the sidebar. Every page of the site is a file here. */
const Explorer = () => {
    const [rootOpen, setRootOpen] = useState(true);
    const [closedFolders, setClosedFolders] = useState<string[]>([]);

    const toggleFolder = (path: string) =>
        setClosedFolders((current) =>
            current.includes(path)
                ? current.filter((item) => item !== path)
                : [...current, path],
        );

    return (
        <nav aria-label="Files" className="flex min-h-0 flex-1 flex-col">
            <p className="flex h-9 shrink-0 items-center px-4 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Explorer
            </p>

            <button
                type="button"
                onClick={() => setRootOpen((open) => !open)}
                aria-expanded={rootOpen}
                className="flex h-7 shrink-0 items-center gap-1 px-2 text-[11px] font-bold uppercase tracking-wide text-foreground"
            >
                {rootOpen ? (
                    <ChevronDown size={14} aria-hidden="true" />
                ) : (
                    <ChevronRight size={14} aria-hidden="true" />
                )}
                {WORKSPACE}
            </button>

            {rootOpen && (
                <ul className="min-h-0 flex-1 overflow-y-auto pb-4">
                    {TREE.map((node) => {
                        if (node.kind === 'file') {
                            return (
                                <li key={node.path}>
                                    <FileRow file={node} depth={0} />
                                </li>
                            );
                        }

                        const isOpen = !closedFolders.includes(node.path);

                        return (
                            <li key={node.path}>
                                <button
                                    type="button"
                                    onClick={() => toggleFolder(node.path)}
                                    aria-expanded={isOpen}
                                    className={cn(ROW, 'pl-2')}
                                >
                                    {isOpen ? (
                                        <ChevronDown size={14} aria-hidden="true" />
                                    ) : (
                                        <ChevronRight size={14} aria-hidden="true" />
                                    )}
                                    <span className="truncate">{node.name}</span>
                                </button>
                                {isOpen && (
                                    <ul>
                                        {node.children.map((child) => (
                                            <li key={child.path}>
                                                <FileRow file={child} depth={1} />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};

export default Explorer;
