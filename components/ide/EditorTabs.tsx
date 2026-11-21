'use client';
import { ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';
import { getFileByHref, WORKSPACE } from '@/lib/files';
import { cn } from '@/lib/utils';
import FileIcon from './FileIcon';
import { useIde } from './IdeProvider';

/** Open files as tabs, with the active file's path as breadcrumbs below. */
const EditorTabs = () => {
    const { tabs, activeFile, closeTab } = useIde();
    const activeRef = useRef<HTMLDivElement>(null);

    // Keep the active tab in view when there are more tabs than room.
    useEffect(() => {
        activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }, [activeFile]);

    const crumbs = [WORKSPACE, ...(activeFile?.path.split('/') ?? ['404'])];

    return (
        <div className="shrink-0 border-b bg-background">
            <nav
                className="flex overflow-x-auto bg-background-light [scrollbar-width:none]"
                aria-label="Open files"
            >
                {tabs.map((href) => {
                    const file = getFileByHref(href);
                    if (!file) return null;
                    const isActive = file.href === activeFile?.href;

                    return (
                        <div
                            key={href}
                            ref={isActive ? activeRef : undefined}
                            className={cn(
                                'group relative flex h-9 shrink-0 items-center border-r text-[13px]',
                                isActive
                                    ? 'bg-background text-foreground'
                                    : 'text-muted-foreground hover:text-foreground',
                            )}
                            onAuxClick={(e) => {
                                // Middle-click closes a tab, as in an editor.
                                if (e.button === 1) closeTab(href);
                            }}
                        >
                            {isActive && (
                                <span
                                    className="absolute inset-x-0 top-0 h-0.5 bg-primary"
                                    aria-hidden="true"
                                ></span>
                            )}
                            <Link
                                href={href}
                                aria-current={isActive ? 'page' : undefined}
                                className="flex h-full items-center gap-2 pl-3 pr-1"
                            >
                                <FileIcon lang={file.lang} size={14} />
                                {file.name}
                            </Link>
                            <button
                                type="button"
                                onClick={() => closeTab(href)}
                                aria-label={`Close ${file.name}`}
                                className={cn(
                                    'mr-1.5 grid size-5 place-items-center rounded hover:bg-muted',
                                    !isActive &&
                                        'opacity-0 focus-visible:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100',
                                )}
                            >
                                <X size={13} aria-hidden="true" />
                            </button>
                        </div>
                    );
                })}
            </nav>

            <p
                className="flex h-7 items-center gap-1 overflow-hidden whitespace-nowrap px-4 font-mono text-xs text-muted-foreground"
                aria-label={`File path: ${crumbs.join(' / ')}`}
            >
                {crumbs.map((crumb, index) => (
                    <Fragment key={`${crumb}-${index}`}>
                        {index > 0 && (
                            <ChevronRight size={12} aria-hidden="true" />
                        )}
                        <span
                            className={cn(
                                index === crumbs.length - 1 && 'text-foreground',
                            )}
                        >
                            {crumb}
                        </span>
                    </Fragment>
                ))}
            </p>
        </div>
    );
};

export default EditorTabs;
