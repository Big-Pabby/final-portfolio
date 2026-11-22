'use client';
import { ChevronDown, ChevronUp, TerminalSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
    KeyboardEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    GENERAL_INFO,
    MY_EXPERIENCE,
    MY_STACK,
    PROJECTS,
    SOCIAL_LINKS,
} from '@/lib/data';
import {
    CV_FILE,
    IFile,
    PROJECTS_FOLDER,
    resolveFile,
    TREE,
    WORKSPACE,
} from '@/lib/files';
import { cn, prefersReducedMotion } from '@/lib/utils';
import {
    downloadCv,
    formatLocalTime,
    MAILTO,
    SOCIAL_LABELS,
} from './commands';
import { useIde } from './IdeProvider';

const BOOT_STORAGE_KEY = 'va-terminal-booted';
const BOOT_COMMAND = 'whoami';

const COMMANDS: [name: string, usage: string, about: string][] = [
    ['help', '', 'Show this list'],
    ['ls', '[folder]', 'List files'],
    ['cd', '<folder>', 'Change folder'],
    ['open', '<file>', 'Open a file in the editor (also: cat, code)'],
    ['whoami', '', 'Who built this?'],
    ['projects', '', 'List my projects'],
    ['stack', '', 'The tools I use'],
    ['experience', '', 'Where I have worked (also: git log)'],
    ['contact', '', 'How to reach me'],
    ['email', '', 'Start an email to me'],
    ['cv', '', 'Download my CV'],
    ['theme', '[day|night]', 'Switch the editor theme'],
    ['date', '', 'My local time'],
    ['history', '', 'Commands you have run'],
    ['clear', '', 'Clear the terminal'],
];

const COMMAND_NAMES = [
    ...COMMANDS.map(([name]) => name),
    'cat',
    'code',
    'pwd',
    'echo',
    'git',
    'resume',
];

interface Entry {
    id: number;
    content: ReactNode;
}

const Prompt = ({ cwd }: { cwd: string }) => (
    <span className="shrink-0 select-none">
        <span className="syn-s">guest@{WORKSPACE}</span>
        <span className="text-muted-foreground">:</span>
        <span className="syn-f">~{cwd && `/${cwd}`}</span>
        <span className="text-muted-foreground">$</span>
    </span>
);

/**
 * A working terminal for the site. Visitors can type commands to read about
 * me or open files; everything it prints is also reachable by clicking.
 */
const Terminal = () => {
    const router = useRouter();
    const { terminalOpen, setTerminalOpen, theme, setTheme } = useIde();
    const [entries, setEntries] = useState<Entry[]>([]);
    const [input, setInput] = useState('');
    const [cwd, setCwd] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(0);
    const historyRef = useRef<string[]>([]);
    const historyIndexRef = useRef<number | null>(null);
    // Output can contain buttons that run commands later, so they call
    // through a ref to reach the latest state.
    const runRef = useRef<(_raw: string) => void>(() => {});

    const print = useCallback((content: ReactNode) => {
        setEntries((current) => [...current, { id: ++idRef.current, content }]);
    }, []);

    /** A clickable command inside terminal output. */
    const Run = useCallback(
        ({ cmd, children }: { cmd: string; children?: ReactNode }) => (
            <button
                type="button"
                className="link text-left"
                onClick={() => runRef.current(cmd)}
            >
                {children ?? cmd}
            </button>
        ),
        [],
    );

    const openFile = useCallback(
        (file: IFile) => {
            router.push(file.href);
            print(
                <>
                    Opening <span className="syn-s">{file.path}</span> in the
                    editor…
                </>,
            );
        },
        [print, router],
    );

    const run = useCallback(
        (raw: string) => {
            const line = raw.trim();
            print(
                <span className="flex gap-2">
                    <Prompt cwd={cwd} />
                    <span>{line}</span>
                </span>,
            );
            if (!line) return;

            historyRef.current.push(line);
            historyIndexRef.current = null;

            const [name, ...args] = line.split(/\s+/);
            const arg = args.join(' ');
            const command = name.toLowerCase();

            const listFiles = (folder: string) => {
                const nodes =
                    folder === PROJECTS_FOLDER.path
                        ? PROJECTS_FOLDER.children
                        : TREE;
                print(
                    <span className="flex flex-wrap gap-x-5 gap-y-0.5">
                        {nodes.map((node) =>
                            node.kind === 'folder' ? (
                                <Run key={node.path} cmd={`cd ${node.name}`}>
                                    <span className="syn-f">{node.name}/</span>
                                </Run>
                            ) : (
                                <Run key={node.path} cmd={`open ${node.path}`}>
                                    {node.name}
                                </Run>
                            ),
                        )}
                    </span>,
                );
            };

            const isProjectsFolder = (value: string) =>
                /^(\.\/|~\/)?projects\/?$/i.test(value);

            switch (command) {
                case 'help':
                    print(
                        <span className="grid gap-x-4 sm:grid-cols-[max-content_max-content_1fr]">
                            {COMMANDS.map(([cmd, usage, about]) => (
                                <span key={cmd} className="contents">
                                    <span>
                                        {usage ? (
                                            <span className="syn-k">{cmd}</span>
                                        ) : (
                                            <Run cmd={cmd}>
                                                <span className="syn-k">
                                                    {cmd}
                                                </span>
                                            </Run>
                                        )}
                                    </span>
                                    <span className="syn-n max-sm:hidden">
                                        {usage}
                                    </span>
                                    <span className="text-muted-foreground max-sm:mb-1">
                                        {about}
                                    </span>
                                </span>
                            ))}
                            <span className="mt-1 text-muted-foreground sm:col-span-3">
                                Tab completes, ↑ and ↓ walk through history.
                                Anything underlined can be clicked.
                            </span>
                        </span>,
                    );
                    break;

                case 'ls':
                    if (!arg || arg === '.') listFiles(cwd);
                    else if (isProjectsFolder(arg) && !cwd)
                        listFiles(PROJECTS_FOLDER.path);
                    else if (arg === '..' || arg === '~') listFiles('');
                    else print(`ls: ${arg}: No such folder`);
                    break;

                case 'cd':
                    if (!arg || arg === '~' || arg === '..' || arg === '/')
                        setCwd('');
                    else if (arg === '.') break;
                    else if (isProjectsFolder(arg) && (!cwd || arg.startsWith('~')))
                        setCwd(PROJECTS_FOLDER.path);
                    else if (resolveFile(arg, cwd))
                        print(
                            <>
                                cd: {arg}: Not a folder. Try{' '}
                                <Run cmd={`open ${arg}`} />
                            </>,
                        );
                    else print(`cd: ${arg}: No such folder`);
                    break;

                case 'pwd':
                    print(`/home/guest/${WORKSPACE}${cwd && `/${cwd}`}`);
                    break;

                case 'open':
                case 'cat':
                case 'code': {
                    if (!arg) {
                        print(`${command}: which file? Try: ${command} about.ts`);
                        break;
                    }
                    const file = resolveFile(arg, cwd);
                    if (file) openFile(file);
                    else if (isProjectsFolder(arg)) openFile(PROJECTS_FOLDER.children[0]);
                    else
                        print(
                            <>
                                {command}: {arg}: No such file. Run{' '}
                                <Run cmd="ls" /> to see what is here.
                            </>,
                        );
                    break;
                }

                case 'whoami':
                    print(
                        <span className="block">
                            <span className="block font-bold text-foreground">
                                {GENERAL_INFO.name}
                            </span>
                            <span className="block">
                                {GENERAL_INFO.role} · {GENERAL_INFO.location}
                            </span>
                            {GENERAL_INFO.availability && (
                                <span className="block">
                                    <span className="text-emerald-500">●</span>{' '}
                                    {GENERAL_INFO.availability}
                                </span>
                            )}
                            <span className="block text-muted-foreground">
                                That&apos;s me. You&apos;re a guest here: try{' '}
                                <Run cmd="projects" />, <Run cmd="contact" /> or{' '}
                                <Run cmd="help" />.
                            </span>
                        </span>,
                    );
                    break;

                case 'projects':
                    print(
                        <span className="grid gap-x-4 sm:grid-cols-[max-content_max-content_1fr]">
                            {PROJECTS.map((project) => (
                                <span key={project.slug} className="contents">
                                    <Run cmd={`open projects/${project.slug}.md`}>
                                        {project.title}
                                    </Run>
                                    <span className="syn-n max-sm:hidden">
                                        {project.year}
                                    </span>
                                    <span className="text-muted-foreground max-sm:mb-1">
                                        {project.summary}
                                    </span>
                                </span>
                            ))}
                        </span>,
                    );
                    break;

                case 'stack':
                case 'skills':
                    print(
                        <span className="block">
                            {Object.entries(MY_STACK).map(([group, items]) => (
                                <span key={group} className="block">
                                    <span className="syn-p">{group}</span>
                                    <span className="text-muted-foreground">
                                        :{' '}
                                    </span>
                                    {items.map((item) => item.name).join(', ')}
                                </span>
                            ))}
                        </span>,
                    );
                    break;

                case 'git':
                    if (args[0] !== 'log') {
                        print(
                            <>
                                git: only <Run cmd="git log" /> works here.
                            </>,
                        );
                        break;
                    }
                // falls through: `git log` prints my experience.
                case 'experience':
                    print(
                        <span className="block">
                            {MY_EXPERIENCE.map((job, index) => (
                                <span
                                    key={`${job.company}-${index}`}
                                    className="block"
                                >
                                    <span className="syn-n">*</span>{' '}
                                    <span className="text-foreground">
                                        {job.title}
                                    </span>{' '}
                                    <span className="syn-f">@ {job.company}</span>{' '}
                                    <span className="text-muted-foreground">
                                        ({job.duration})
                                    </span>
                                </span>
                            ))}
                        </span>,
                    );
                    break;

                case 'contact':
                    print(
                        <span className="grid gap-x-4 grid-cols-[max-content_1fr]">
                            <span className="syn-p">email</span>
                            <a className="link break-all" href={MAILTO}>
                                {GENERAL_INFO.email}
                            </a>
                            {SOCIAL_LINKS.map((link) => (
                                <span key={link.name} className="contents">
                                    <span className="syn-p">
                                        {(
                                            SOCIAL_LABELS[link.name] ?? link.name
                                        ).toLowerCase()}
                                    </span>
                                    <a
                                        className="link break-all"
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.url.replace(/^https?:\/\//, '')}
                                    </a>
                                </span>
                            ))}
                            <span className="syn-p">cv</span>
                            <Run cmd="cv">{CV_FILE.name}</Run>
                        </span>,
                    );
                    break;

                case 'email':
                    window.location.href = MAILTO;
                    print(`Opening your mail app to write to ${GENERAL_INFO.email}…`);
                    break;

                case 'cv':
                case 'resume':
                    downloadCv();
                    print(`Downloading ${CV_FILE.name}…`);
                    break;

                case 'theme': {
                    const wanted = args[0]?.toLowerCase();
                    if (wanted && wanted !== 'day' && wanted !== 'night') {
                        print('theme: choose day or night');
                        break;
                    }
                    const next =
                        (wanted as 'day' | 'night' | undefined) ??
                        (theme === 'day' ? 'night' : 'day');
                    setTheme(next);
                    print(`Theme set to ${next}.`);
                    break;
                }

                case 'date':
                    print(
                        `${formatLocalTime(new Date())} in ${GENERAL_INFO.location}`,
                    );
                    break;

                case 'history':
                    print(
                        <span className="block">
                            {historyRef.current.map((item, index) => (
                                <span key={index} className="block">
                                    <span className="text-muted-foreground">
                                        {String(index + 1).padStart(3, ' ')}
                                    </span>{' '}
                                    {item}
                                </span>
                            ))}
                        </span>,
                    );
                    break;

                case 'echo':
                    print(arg);
                    break;

                case 'clear':
                    setEntries([]);
                    break;

                case 'sudo':
                    print('Nice try. Guests don’t get root here.');
                    break;

                default:
                    print(
                        <>
                            {name}: command not found. Type <Run cmd="help" />{' '}
                            to see what works.
                        </>,
                    );
            }
        },
        [Run, cwd, openFile, print, setTheme, theme],
    );

    useEffect(() => {
        runRef.current = run;
    }, [run]);

    // Greet first-time visitors by typing one command for them.
    useEffect(() => {
        print(
            <span className="text-muted-foreground">
                Welcome. This terminal works: type a command or click one. Try{' '}
                <Run cmd="help" />, <Run cmd="projects" /> or{' '}
                <Run cmd="contact" />.
            </span>,
        );

        let booted = false;
        try {
            booted = window.sessionStorage.getItem(BOOT_STORAGE_KEY) === '1';
            window.sessionStorage.setItem(BOOT_STORAGE_KEY, '1');
        } catch {
            // No storage: greet again next time.
        }
        if (booted) return;

        if (prefersReducedMotion()) {
            runRef.current(BOOT_COMMAND);
            return;
        }

        let index = 0;
        let timer = window.setTimeout(function type() {
            index += 1;
            setInput(BOOT_COMMAND.slice(0, index));

            if (index < BOOT_COMMAND.length) {
                timer = window.setTimeout(type, 90);
                return;
            }
            timer = window.setTimeout(() => {
                setInput('');
                runRef.current(BOOT_COMMAND);
            }, 350);
        }, 700);

        return () => window.clearTimeout(timer);
        // Runs once, on first load.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
    }, [entries, terminalOpen]);

    const complete = () => {
        const parts = input.split(/\s+/);
        const last = parts[parts.length - 1].toLowerCase();

        const pool =
            parts.length === 1
                ? COMMAND_NAMES
                : [
                      ...(cwd ? PROJECTS_FOLDER.children : TREE).map(
                          (node) => node.name,
                      ),
                      ...(cwd
                          ? []
                          : PROJECTS_FOLDER.children.map((node) => node.path)),
                  ];
        const matches = pool.filter((item) =>
            item.toLowerCase().startsWith(last),
        );
        if (matches.length === 0) return;

        // Extend to the longest prefix every match shares.
        let prefix = matches[0];
        for (const match of matches) {
            while (!match.toLowerCase().startsWith(prefix.toLowerCase())) {
                prefix = prefix.slice(0, -1);
            }
        }

        parts[parts.length - 1] = prefix;
        setInput(parts.join(' ') + (matches.length === 1 ? ' ' : ''));
        if (matches.length > 1 && prefix.toLowerCase() === last) {
            print(
                <span className="flex flex-wrap gap-x-5 text-muted-foreground">
                    {matches.map((match) => (
                        <span key={match}>{match}</span>
                    ))}
                </span>,
            );
        }
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const history = historyRef.current;

        if (e.key === 'Enter') {
            run(input);
            setInput('');
        } else if (e.key === 'Tab' && input.trim()) {
            e.preventDefault();
            complete();
        } else if (e.key === 'ArrowUp' && history.length > 0) {
            e.preventDefault();
            const index = Math.max(
                0,
                (historyIndexRef.current ?? history.length) - 1,
            );
            historyIndexRef.current = index;
            setInput(history[index]);
        } else if (e.key === 'ArrowDown' && historyIndexRef.current !== null) {
            e.preventDefault();
            const index = historyIndexRef.current + 1;
            historyIndexRef.current = index < history.length ? index : null;
            setInput(history[index] ?? '');
        } else if (e.ctrlKey && e.key.toLowerCase() === 'l') {
            e.preventDefault();
            setEntries([]);
        }
    };

    // Until the visitor chooses, the panel is open on desktop and closed on phones.
    const bodyVisibility =
        terminalOpen === null ? 'max-md:hidden' : terminalOpen ? '' : 'hidden';
    const toggle = () =>
        setTerminalOpen(
            !(terminalOpen ?? window.matchMedia('(min-width: 768px)').matches),
        );

    return (
        <section
            aria-label="Terminal"
            className="shrink-0 border-t bg-background-light"
        >
            <button
                type="button"
                onClick={toggle}
                aria-expanded={terminalOpen ?? undefined}
                aria-controls="terminal-body"
                className="flex h-8 w-full items-center gap-2 px-4 text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
                <TerminalSquare size={14} aria-hidden="true" />
                <span className="border-b border-primary py-1.5 text-foreground">
                    Terminal
                </span>
                <span className="ml-auto normal-case tracking-normal max-md:hidden">
                    Ctrl + `
                </span>
                <ChevronDown
                    size={15}
                    aria-hidden="true"
                    className={cn(
                        terminalOpen === false && 'hidden',
                        terminalOpen === null && 'max-md:hidden',
                    )}
                />
                <ChevronUp
                    size={15}
                    aria-hidden="true"
                    className={cn(
                        terminalOpen === true && 'hidden',
                        terminalOpen === null && 'md:hidden',
                    )}
                />
            </button>

            <div
                id="terminal-body"
                ref={scrollRef}
                className={cn(
                    'h-[38dvh] overflow-y-auto px-4 pb-3 font-mono text-[13px] leading-relaxed md:h-[190px]',
                    bodyVisibility,
                )}
                onClick={(e) => {
                    // Clicking empty space focuses the prompt, unless text is being selected.
                    const target = e.target as HTMLElement;
                    if (
                        !target.closest('a, button') &&
                        !window.getSelection()?.toString()
                    ) {
                        inputRef.current?.focus({ preventScroll: true });
                    }
                }}
            >
                <div role="log" aria-live="polite" className="space-y-1">
                    {entries.map((entry) => (
                        <div key={entry.id} className="break-words">
                            {entry.content}
                        </div>
                    ))}
                </div>

                <label className="mt-1 flex items-center gap-2">
                    <Prompt cwd={cwd} />
                    <span className="sr-only">Terminal command</span>
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={onKeyDown}
                        className="min-w-0 flex-1 bg-transparent text-base caret-primary outline-none md:text-[13px]"
                        autoCapitalize="none"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck={false}
                        enterKeyHint="go"
                    />
                </label>
            </div>
        </section>
    );
};

export default Terminal;
