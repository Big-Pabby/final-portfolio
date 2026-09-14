'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { Download, MoveUpRight } from 'lucide-react';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
import TransitionLink from './TransitionLink';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
    'bg-pink-500 text-white',
    'bg-primary text-black',
];

const MENU_LINKS = [
    { name: 'Home', url: '/', id: '' },
    { name: 'About Me', url: '/#about-me', id: 'about-me' },
    { name: 'My Stack', url: '/#my-stack', id: 'my-stack' },
    { name: 'Experience', url: '/#my-experience', id: 'my-experience' },
    { name: 'Projects', url: '/#selected-projects', id: 'selected-projects' },
    { name: 'Contact', url: '/#contact', id: 'contact' },
];

const BRAND_CLASSES =
    'font-display text-2xl leading-none tracking-wide transition-colors hover:text-primary';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const lenis = useLenis();
    const panelRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const isHome = pathname === '/';

    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    // Lock page scroll while the menu is open and close it with Escape.
    useEffect(() => {
        if (!isMenuOpen) return;

        lenis?.stop();
        panelRef.current?.focus({ preventScroll: true });

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            lenis?.start();
        };
    }, [isMenuOpen, lenis, closeMenu]);

    const scrollToSection = useCallback(
        (id: string) => {
            if (!id) {
                lenis?.scrollTo(0, { force: true });
                return;
            }

            const target = document.getElementById(id);
            if (target) lenis?.scrollTo(target, { offset: -24, force: true });
        },
        [lenis],
    );

    const handleMenuLink = (link: (typeof MENU_LINKS)[number]) => {
        closeMenu();

        if (isHome) {
            // Give the menu a moment to release the scroll lock first.
            window.setTimeout(() => scrollToSection(link.id), 80);
            return;
        }

        router.push(link.url);
    };

    return (
        <>
            <header className="sticky top-0 z-[4]">
                <div
                    className={cn(
                        // Only shown where the layout has a free gutter, so it never overlaps section titles.
                        'absolute top-5 left-4 2xl:left-10 z-[2] hidden xl:flex h-12 items-center transition-opacity duration-300',
                        { 'opacity-0 pointer-events-none': isMenuOpen },
                    )}
                >
                    {isHome ? (
                        <button
                            type="button"
                            onClick={() => scrollToSection('')}
                            aria-label="Back to top"
                            className={BRAND_CLASSES}
                        >
                            VA<span className="text-primary">.</span>
                        </button>
                    ) : (
                        <TransitionLink
                            href="/"
                            aria-label="Go to homepage"
                            className={BRAND_CLASSES}
                        >
                            VA<span className="text-primary">.</span>
                        </TransitionLink>
                    )}
                </div>

                <button
                    ref={toggleRef}
                    type="button"
                    className="group size-12 absolute top-5 right-5 md:right-10 z-[2]"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-menu"
                >
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ',
                            {
                                'rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ',
                            {
                                '-rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:-rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                </button>
            </header>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={closeMenu}
                aria-hidden="true"
            ></div>

            <div
                id="site-menu"
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                aria-hidden={!isMenuOpen}
                tabIndex={-1}
                data-lenis-prevent
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-[transform,visibility] duration-700 z-[3] overflow-y-auto overflow-x-hidden gap-y-14 outline-none',
                    'flex flex-col lg:justify-center py-10',
                    isMenuOpen ? 'translate-x-0 visible' : 'invisible',
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="mb-5 font-display text-lg tracking-widest text-primary md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-display text-2xl capitalize tracking-wide transition-colors hover:text-primary"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <nav aria-label="Main">
                            <p className="mb-5 font-display text-lg tracking-widest text-primary md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            type="button"
                                            onClick={() => handleMenuLink(link)}
                                            className="group flex items-center gap-3 font-display text-3xl tracking-wide"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                    COLORS[idx % COLORS.length],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all"
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="mb-4 font-display text-lg tracking-widest text-primary">GET IN TOUCH</p>
                    <a
                        className="block break-all hover:text-primary transition-colors"
                        href={`mailto:${GENERAL_INFO.email}`}
                    >
                        {GENERAL_INFO.email}
                    </a>
                    <a
                        href={GENERAL_INFO.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="mt-4 inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
