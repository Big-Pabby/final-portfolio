'use client';
import {
    Download,
    Files,
    GitBranch,
    Github,
    Mail,
    Menu,
    Moon,
    Search,
    Sun,
    TerminalSquare,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';
import LocalTime from '@/components/LocalTime';
import { GENERAL_INFO } from '@/lib/data';
import { WORKSPACE } from '@/lib/files';
import { cn } from '@/lib/utils';
import CommandPalette from './CommandPalette';
import { GITHUB_URL } from './commands';
import EditorTabs from './EditorTabs';
import Explorer from './Explorer';
import { IdeProvider, useIde } from './IdeProvider';
import Terminal from './Terminal';

const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

const ACTIVITY_BTN =
    'relative grid size-12 place-items-center text-muted-foreground transition-colors hover:text-foreground';

const Shell = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const mainRef = useRef<HTMLElement>(null);
    const {
        activeFile,
        sidebarOpen,
        setSidebarOpen,
        terminalOpen,
        setTerminalOpen,
        setPaletteOpen,
        cursorLine,
        theme,
        setTheme,
    } = useIde();

    // Each file opens scrolled to its first line.
    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0 });
    }, [pathname]);

    // On phones the explorer is a drawer; Escape closes it.
    useEffect(() => {
        if (sidebarOpen !== true) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !isDesktop()) setSidebarOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [sidebarOpen, setSidebarOpen]);

    const toggleSidebar = () => setSidebarOpen(!(sidebarOpen ?? isDesktop()));
    const toggleTerminal = () => setTerminalOpen(!(terminalOpen ?? isDesktop()));
    const themeLabel = theme === 'day' ? 'Switch to night theme' : 'Switch to day theme';
    const ThemeIcon = theme === 'day' ? Moon : Sun;

    return (
        <div className="flex h-[100dvh] flex-col overflow-hidden">
            {/* Title bar */}
            <header className="flex h-10 shrink-0 items-center gap-2 border-b bg-background-light px-2">
                <button
                    type="button"
                    onClick={toggleSidebar}
                    aria-label="Toggle file explorer"
                    aria-expanded={sidebarOpen ?? undefined}
                    className="icon-btn md:hidden"
                >
                    <Menu size={17} aria-hidden="true" />
                </button>
                <Link
                    href="/"
                    aria-label={`${GENERAL_INFO.name}: home`}
                    className="px-2 font-mono text-sm font-bold"
                >
                    VA<span className="text-primary">.</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setPaletteOpen(true)}
                    className="mx-auto flex h-7 w-full max-w-[440px] items-center justify-center gap-2 rounded-md border bg-background px-3 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                    <Search size={13} aria-hidden="true" />
                    <span className="truncate">
                        Search {WORKSPACE}
                        <span className="max-sm:hidden"> files and commands</span>
                    </span>
                    <kbd className="ml-2 rounded border px-1.5 font-mono text-[10px] max-md:hidden">
                        Ctrl K
                    </kbd>
                </button>

                <button
                    type="button"
                    onClick={(e) =>
                        setTheme(theme === 'day' ? 'night' : 'day', e.currentTarget)
                    }
                    aria-label={themeLabel}
                    title={themeLabel}
                    className="icon-btn"
                >
                    <ThemeIcon size={16} aria-hidden="true" />
                </button>
                <a
                    href={GENERAL_INFO.resume}
                    download
                    className="flex h-7 items-center gap-1.5 rounded-md bg-primary px-2.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                    <Download size={13} aria-hidden="true" />
                    CV
                </a>
            </header>

            <div className="flex min-h-0 flex-1">
                {/* Activity bar */}
                <div className="flex w-12 shrink-0 flex-col border-r bg-background-light max-md:hidden">
                    <button
                        type="button"
                        onClick={toggleSidebar}
                        aria-label="Toggle file explorer"
                        title="Explorer (Ctrl + B)"
                        aria-expanded={sidebarOpen ?? undefined}
                        className={cn(
                            ACTIVITY_BTN,
                            sidebarOpen !== false &&
                                'text-foreground before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-primary',
                        )}
                    >
                        <Files size={21} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={() => setPaletteOpen(true)}
                        aria-label="Search files and commands"
                        title="Search (Ctrl + K)"
                        className={ACTIVITY_BTN}
                    >
                        <Search size={21} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile (opens in a new tab)"
                        title="GitHub"
                        className={ACTIVITY_BTN}
                    >
                        <Github size={21} strokeWidth={1.5} aria-hidden="true" />
                    </a>
                    <button
                        type="button"
                        onClick={toggleTerminal}
                        aria-label="Toggle terminal"
                        title="Terminal (Ctrl + `)"
                        className={ACTIVITY_BTN}
                    >
                        <TerminalSquare
                            size={21}
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                    </button>
                    <Link
                        href="/contact"
                        aria-label="Contact"
                        title="Contact"
                        className={cn(ACTIVITY_BTN, 'mt-auto')}
                    >
                        <Mail size={21} strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                </div>

                {/* Sidebar: a column on desktop, a drawer on phones */}
                {sidebarOpen === true && (
                    <div
                        className="fixed inset-0 z-30 bg-black/60 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                        aria-hidden="true"
                    ></div>
                )}
                <aside
                    className={cn(
                        'flex w-60 shrink-0 flex-col border-r bg-background-light max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-40 max-md:w-[280px] max-md:shadow-2xl',
                        sidebarOpen === null && 'max-md:hidden',
                        sidebarOpen === false && 'hidden',
                    )}
                >
                    <Explorer />
                </aside>

                {/* Editor */}
                <div className="flex min-w-0 flex-1 flex-col">
                    <EditorTabs />
                    <main
                        id="main"
                        ref={mainRef}
                        tabIndex={-1}
                        className="min-h-0 flex-1 overflow-y-auto outline-none"
                    >
                        {children}
                    </main>
                    <Terminal />
                </div>
            </div>

            {/* Status bar */}
            <footer className="flex h-6 shrink-0 items-center gap-4 bg-primary px-3 font-mono text-[11px] text-primary-foreground">
                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile (opens in a new tab)"
                    className="flex items-center gap-1 hover:underline"
                >
                    <GitBranch size={12} aria-hidden="true" />
                    main
                </a>
                {GENERAL_INFO.availability && (
                    <Link
                        href="/contact"
                        className="flex min-w-0 items-center gap-1.5 hover:underline"
                    >
                        <span
                            className="size-1.5 shrink-0 animate-pulse rounded-full bg-current"
                            aria-hidden="true"
                        ></span>
                        <span className="truncate">
                            {GENERAL_INFO.availability}
                        </span>
                    </Link>
                )}

                <span className="ml-auto max-sm:hidden" aria-live="polite">
                    {cursorLine !== null && `Ln ${cursorLine}`}
                </span>
                <span className="max-sm:ml-auto">
                    {activeFile?.lang ?? 'Plain Text'}
                </span>
                <span className="max-lg:hidden">UTF-8</span>
                <span className="max-md:hidden">
                    {GENERAL_INFO.location} <LocalTime />
                </span>
            </footer>

            <CommandPalette />
        </div>
    );
};

/** The whole site lives inside this code-editor window. */
const IdeShell = ({ children }: { children: ReactNode }) => (
    <IdeProvider>
        <Shell>{children}</Shell>
    </IdeProvider>
);

export default IdeShell;
