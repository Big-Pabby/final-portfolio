'use client';
import {
    BookOpen,
    Copy,
    Download,
    Github,
    Mail,
    PanelBottom,
    PanelLeft,
    Search,
    SunMoon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { GENERAL_INFO } from '@/lib/data';
import { FILES } from '@/lib/files';
import { cn } from '@/lib/utils';
import { copyEmail, downloadCv, GITHUB_URL, MAILTO } from './commands';
import FileIcon from './FileIcon';
import { useIde } from './IdeProvider';

interface Item {
    id: string;
    label: string;
    detail: string;
    icon: ReactNode;
    isCommand?: boolean;
    run: () => void;
}

/** Ctrl/Cmd+K: jump to any file or run an action by typing a few letters. */
const CommandPalette = () => {
    const router = useRouter();
    const {
        paletteOpen,
        setPaletteOpen,
        theme,
        setTheme,
        terminalOpen,
        setTerminalOpen,
        sidebarOpen,
        setSidebarOpen,
    } = useIde();
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const returnFocusRef = useRef<HTMLElement | null>(null);

    const items = useMemo<Item[]>(() => {
        const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
        const icon = (node: ReactNode) => (
            <span className="text-muted-foreground">{node}</span>
        );

        return [
            ...FILES.map((file) => ({
                id: file.href,
                label: file.name,
                detail: `${file.title} · ${file.path}`,
                icon: <FileIcon lang={file.lang} />,
                run: () => router.push(file.href),
            })),
            {
                id: 'theme',
                label: `Switch to ${theme === 'day' ? 'night' : 'day'} theme`,
                detail: 'Appearance',
                icon: icon(<SunMoon size={15} />),
                isCommand: true,
                run: () => setTheme(theme === 'day' ? 'night' : 'day'),
            },
            {
                id: 'terminal',
                label: 'Toggle terminal',
                detail: 'View · Ctrl + `',
                icon: icon(<PanelBottom size={15} />),
                isCommand: true,
                run: () => setTerminalOpen(!(terminalOpen ?? isDesktop())),
            },
            {
                id: 'sidebar',
                label: 'Toggle file explorer',
                detail: 'View · Ctrl + B',
                icon: icon(<PanelLeft size={15} />),
                isCommand: true,
                run: () => setSidebarOpen(!(sidebarOpen ?? isDesktop())),
            },
            {
                id: 'cv',
                label: 'Download CV',
                detail: 'PDF',
                icon: icon(<Download size={15} />),
                isCommand: true,
                run: downloadCv,
            },
            {
                id: 'email',
                label: 'Email Victor',
                detail: 'Opens your mail app',
                icon: icon(<Mail size={15} />),
                isCommand: true,
                run: () => {
                    window.location.href = MAILTO;
                },
            },
            {
                id: 'copy-email',
                label: 'Copy email address',
                detail: 'Clipboard',
                icon: icon(<Copy size={15} />),
                isCommand: true,
                run: () => void copyEmail(),
            },
            {
                id: 'github',
                label: 'Open GitHub profile',
                detail: 'Opens in a new tab',
                icon: icon(<Github size={15} />),
                isCommand: true,
                run: () => window.open(GITHUB_URL, '_blank', 'noopener'),
            },
            {
                id: 'blog',
                label: 'Open blog: Notes from Victor',
                detail: 'Opens in a new tab',
                icon: icon(<BookOpen size={15} />),
                isCommand: true,
                run: () => window.open(GENERAL_INFO.blog, '_blank', 'noopener'),
            },
        ];
    }, [
        router,
        theme,
        setTheme,
        terminalOpen,
        setTerminalOpen,
        sidebarOpen,
        setSidebarOpen,
    ]);

    // Like an editor: ">" narrows the list to commands.
    const commandsOnly = query.trimStart().startsWith('>');
    const needle = query.replace(/^\s*>/, '').trim().toLowerCase();
    const results = items.filter(
        (item) =>
            (!commandsOnly || item.isCommand) &&
            `${item.label} ${item.detail}`.toLowerCase().includes(needle),
    );

    useEffect(() => {
        if (!paletteOpen) return;

        returnFocusRef.current = document.activeElement as HTMLElement | null;
        setQuery('');
        setActive(0);
        inputRef.current?.focus();

        return () => returnFocusRef.current?.focus({ preventScroll: true });
    }, [paletteOpen]);

    useEffect(() => {
        listRef.current
            ?.querySelector('[aria-selected="true"]')
            ?.scrollIntoView({ block: 'nearest' });
    }, [active]);

    if (!paletteOpen) return null;

    const close = () => setPaletteOpen(false);
    const choose = (item: Item | undefined) => {
        if (!item) return;
        close();
        item.run();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-3 pt-[10dvh]"
            onClick={close}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Search files and commands"
                className="w-full max-w-[600px] overflow-hidden rounded-lg border bg-popover shadow-2xl shadow-black/40"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') close();
                    else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        setActive((i) => (i + 1) % Math.max(results.length, 1));
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        setActive(
                            (i) =>
                                (i - 1 + results.length) %
                                Math.max(results.length, 1),
                        );
                    } else if (e.key === 'Enter') choose(results[active]);
                    else if (e.key === 'Tab') e.preventDefault();
                }}
            >
                <label className="flex items-center gap-3 border-b px-4">
                    <Search
                        size={16}
                        className="shrink-0 text-muted-foreground"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Search files and commands</span>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setActive(0);
                        }}
                        placeholder="Search files, or type > for commands"
                        className="h-12 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
                        role="combobox"
                        aria-expanded="true"
                        aria-controls="palette-results"
                        aria-activedescendant={
                            results[active]
                                ? `palette-${results[active].id}`
                                : undefined
                        }
                        autoComplete="off"
                        spellCheck={false}
                    />
                    <kbd className="rounded border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                        Esc
                    </kbd>
                </label>

                <ul
                    id="palette-results"
                    ref={listRef}
                    role="listbox"
                    aria-label="Results"
                    className="max-h-[50dvh] overflow-y-auto p-1.5"
                >
                    {results.map((item, index) => (
                        <li
                            key={item.id}
                            id={`palette-${item.id}`}
                            role="option"
                            aria-selected={index === active}
                            onClick={() => choose(item)}
                            onMouseMove={() => setActive(index)}
                            className={cn(
                                'flex h-9 cursor-pointer items-center gap-3 rounded px-3 text-sm',
                                index === active && 'bg-muted',
                            )}
                        >
                            {item.icon}
                            <span className="shrink-0">{item.label}</span>
                            <span className="ml-auto truncate text-xs text-muted-foreground">
                                {item.detail}
                            </span>
                        </li>
                    ))}
                    {results.length === 0 && (
                        <li className="px-3 py-6 text-center text-sm text-muted-foreground">
                            Nothing matches “{query.trim()}”.
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CommandPalette;
