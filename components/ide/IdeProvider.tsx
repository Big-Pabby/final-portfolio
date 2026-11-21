'use client';
import { usePathname, useRouter } from 'next/navigation';
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { flushSync } from 'react-dom';
import { getFileByHref, IFile, README } from '@/lib/files';
import { Theme, THEME_STORAGE_KEY } from '@/lib/theme';
import { prefersReducedMotion } from '@/lib/utils';

const TABS_STORAGE_KEY = 'va-open-tabs';

interface IdeState {
    /** The file for the current route, if it is one of the workspace files. */
    activeFile: IFile | undefined;
    /** Open tabs, as file hrefs. */
    tabs: string[];
    closeTab: (_href: string) => void;
    /** null means "use the screen-size default" until the visitor chooses. */
    sidebarOpen: boolean | null;
    setSidebarOpen: (_open: boolean) => void;
    terminalOpen: boolean | null;
    setTerminalOpen: (_open: boolean) => void;
    paletteOpen: boolean;
    setPaletteOpen: (_open: boolean) => void;
    /** Line the visitor last clicked in the editor, for the status bar. */
    cursorLine: number | null;
    setCursorLine: (_line: number | null) => void;
    theme: Theme;
    /** Switch theme; pass the clicked element to grow the change out of it. */
    setTheme: (_theme: Theme, _origin?: Element | null) => void;
}

const IdeContext = createContext<IdeState | null>(null);

export const useIde = () => {
    const value = useContext(IdeContext);
    if (!value) throw new Error('useIde must be used inside <IdeProvider>');
    return value;
};

const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

export const IdeProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const activeFile = getFileByHref(pathname);

    const [tabs, setTabs] = useState<string[]>(() =>
        activeFile && activeFile.href !== README.href
            ? [README.href, activeFile.href]
            : [README.href],
    );
    const [sidebarOpen, setSidebarOpen] = useState<boolean | null>(null);
    const [terminalOpen, setTerminalOpen] = useState<boolean | null>(null);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const [cursorLine, setCursorLine] = useState<number | null>(null);
    const [theme, setThemeState] = useState<Theme>('night');

    // Restore the tabs the visitor had open earlier in this browser session.
    useEffect(() => {
        try {
            const saved = JSON.parse(
                window.sessionStorage.getItem(TABS_STORAGE_KEY) ?? '[]',
            ) as string[];
            const valid = saved.filter((href) => getFileByHref(href));
            if (valid.length > 0) {
                setTabs((current) => [...new Set([...valid, ...current])]);
            }
        } catch {
            // Storage can be unavailable or hold junk; start with the defaults.
        }

        setThemeState(
            document.documentElement.dataset.theme === 'day' ? 'day' : 'night',
        );
    }, []);

    // Opening a file adds its tab; moving anywhere clears the clicked line.
    useEffect(() => {
        setCursorLine(null);
        if (!activeFile) return;

        setTabs((current) =>
            current.includes(activeFile.href)
                ? current
                : [...current, activeFile.href],
        );
        if (isMobile()) setSidebarOpen(false);
    }, [activeFile]);

    useEffect(() => {
        try {
            window.sessionStorage.setItem(TABS_STORAGE_KEY, JSON.stringify(tabs));
        } catch {
            // ignore
        }
    }, [tabs]);

    const closeTab = useCallback(
        (href: string) => {
            const index = tabs.indexOf(href);
            if (index === -1) return;

            const rest = tabs.filter((tab) => tab !== href);
            // The editor always keeps one file open.
            const next = rest.length > 0 ? rest : [README.href];
            setTabs(next);

            if (href === pathname) {
                router.push(next[Math.min(index, next.length - 1)]);
            }
        },
        [tabs, pathname, router],
    );

    const setTheme = useCallback((next: Theme, origin?: Element | null) => {
        const root = document.documentElement;

        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
            // Storage can be unavailable; the switch still works for this visit.
        }

        const apply = () => {
            root.dataset.theme = next;
            flushSync(() => setThemeState(next));
        };

        if (
            typeof document.startViewTransition !== 'function' ||
            prefersReducedMotion()
        ) {
            apply();
            return;
        }

        const rect = origin?.getBoundingClientRect();
        root.style.setProperty(
            '--reveal-x',
            rect ? `${rect.left + rect.width / 2}px` : '50%',
        );
        root.style.setProperty(
            '--reveal-y',
            rect ? `${rect.top + rect.height / 2}px` : '50%',
        );
        document.startViewTransition(apply);
    }, []);

    // Editor shortcuts: Ctrl/Cmd+K palette, Ctrl+` terminal, Ctrl/Cmd+B sidebar.
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (!(e.ctrlKey || e.metaKey) || e.altKey) return;
            const key = e.key.toLowerCase();

            if (key === 'k') {
                e.preventDefault();
                setPaletteOpen((open) => !open);
            } else if (key === '`') {
                e.preventDefault();
                setTerminalOpen((open) => !(open ?? !isMobile()));
            } else if (key === 'b' && !e.shiftKey) {
                const target = e.target as HTMLElement | null;
                if (target?.closest('input, textarea, [contenteditable]')) return;
                e.preventDefault();
                setSidebarOpen((open) => !(open ?? !isMobile()));
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    const value = useMemo(
        () => ({
            activeFile,
            tabs,
            closeTab,
            sidebarOpen,
            setSidebarOpen,
            terminalOpen,
            setTerminalOpen,
            paletteOpen,
            setPaletteOpen,
            cursorLine,
            setCursorLine,
            theme,
            setTheme,
        }),
        [
            activeFile,
            tabs,
            closeTab,
            sidebarOpen,
            terminalOpen,
            paletteOpen,
            cursorLine,
            theme,
            setTheme,
        ],
    );

    return <IdeContext.Provider value={value}>{children}</IdeContext.Provider>;
};
