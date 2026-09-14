'use client';
import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import { ArrowUp, Check, Copy, Download } from 'lucide-react';
import { GENERAL_INFO } from '@/lib/data';
import { buildMailto } from '@/lib/utils';
import SocialLinks from './SocialLinks';
import Starburst from './Starburst';

const Footer = () => {
    const lenis = useLenis();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = window.setTimeout(() => setCopied(false), 2000);
        return () => window.clearTimeout(timer);
    }, [copied]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(GENERAL_INFO.email);
            setCopied(true);
        } catch {
            // Clipboard access can be denied; the mailto link still works.
        }
    };

    const contactHref = buildMailto(
        GENERAL_INFO.email,
        GENERAL_INFO.emailSubject,
        GENERAL_INFO.emailBody,
    );

    const chipClasses =
        'chip h-11 gap-2 px-4 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary hover:shadow-comic-primary-sm';

    return (
        <footer id="contact" className="relative z-[1]">
            <div className="container">
                <div className="relative border-t-[3px] border-paper/15 pt-20 pb-16 text-center md:pt-28">
                    <Starburst
                        className="absolute right-0 top-10 hidden lg:inline-grid xl:right-10"
                        tilt={-10}
                    >
                        Let&apos;s talk!
                    </Starburst>

                    <span
                        className="comic-caption mb-6"
                        style={{ rotate: '-1.5deg' }}
                    >
                        Contact
                    </span>
                    <h2 className="comic-title text-5xl leading-none sm:text-7xl">
                        Have a project in mind?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                        I&apos;m always open to discussing new products, ideas,
                        or opportunities. Drop me a line and I&apos;ll get back
                        to you soon.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-6">
                        <a
                            href={contactHref}
                            className="break-all font-display text-3xl tracking-wide transition-colors hover:text-primary sm:text-5xl"
                        >
                            {GENERAL_INFO.email}
                        </a>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                type="button"
                                onClick={copyEmail}
                                className={chipClasses}
                                aria-live="polite"
                            >
                                {copied ? (
                                    <Check size={16} className="text-primary" />
                                ) : (
                                    <Copy size={16} />
                                )}
                                {copied ? 'Copied!' : 'Copy email'}
                            </button>
                            <a
                                href={GENERAL_INFO.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className={chipClasses}
                            >
                                <Download size={16} />
                                Download CV
                            </a>
                        </div>
                    </div>

                    <SocialLinks className="mt-10 justify-center" />
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t-[3px] border-paper/15 py-6 text-sm text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {GENERAL_INFO.name}. All
                        rights reserved.
                    </p>
                    <p className="text-center">
                        Designed by{' '}
                        <a
                            href="https://tajmirul.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                            Tajmirul Islam
                        </a>
                        {' · '}Revised by {GENERAL_INFO.name}
                    </p>
                    <button
                        type="button"
                        onClick={() => lenis?.scrollTo(0, { force: true })}
                        className="group inline-flex items-center gap-2 font-display text-lg tracking-wide transition-colors hover:text-primary"
                    >
                        <ArrowUp
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                        Back to top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
