'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import SocialLinks from '@/components/SocialLinks';
import { GENERAL_INFO, STATS } from '@/lib/data';
import { buildMailto } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Sticker-style tilt for the stat cards. Uses the CSS `rotate` property so
// GSAP's transform-based scroll animation is left untouched.
const STAT_TILT = [-2, 2, -1];

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    const contactHref = buildMailto(
        GENERAL_INFO.email,
        GENERAL_INFO.emailSubject,
        GENERAL_INFO.emailBody,
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[100svh] md:h-[100svh] md:min-h-[620px] max-md:py-24 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[620px]">
                    {GENERAL_INFO.availability && (
                        <p
                            className="slide-up-and-fade speech-bubble mb-9"
                            style={{ rotate: '-2deg' }}
                        >
                            <span className="relative flex size-2.5" aria-hidden>
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex size-2.5 rounded-full bg-accent"></span>
                            </span>
                            {GENERAL_INFO.availability}
                        </p>
                    )}

                    <h1 className="banner-title slide-up-and-fade comic-title text-7xl leading-[0.95] sm:text-[100px]">
                        Hi,{' '}
                        <span className="comic-title-blue text-primary">
                            Victor
                        </span>{' '}
                        here.
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-7 max-w-[560px] text-lg text-muted-foreground">
                        I’m a Software Engineer who builds fast, scalable, and
                        user-focused products across web and mobile. I work end
                        to end — crafting clean frontends with React, Next.js,
                        Vue, and React Native, and building the APIs behind them
                        with Node.js, Express, and PostgreSQL. I also love
                        integrating AI to turn complex ideas into smooth,
                        intelligent experiences.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-5">
                        <Button
                            as="link"
                            href={contactHref}
                            variant="primary"
                            className="banner-button slide-up-and-fade"
                        >
                            Say Hi
                        </Button>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.resume}
                            download
                            variant="secondary"
                            className="banner-button slide-up-and-fade"
                        >
                            Download CV
                        </Button>
                    </div>

                    <SocialLinks className="slide-up-and-fade mt-9" />
                </div>

                <div className="md:absolute bottom-[8%] right-[4%] flex md:flex-col gap-5 md:gap-6 max-md:mt-16 max-md:flex-wrap max-md:justify-center">
                    {STATS.map((stat, i) => (
                        <div
                            className="slide-up-and-fade comic-panel min-w-[170px] px-5 py-3 text-center md:text-right"
                            key={stat.label}
                            style={{
                                rotate: `${STAT_TILT[i % STAT_TILT.length]}deg`,
                            }}
                        >
                            <p className="font-display text-4xl leading-none text-primary sm:text-5xl">
                                {stat.value}
                            </p>
                            <p className="mt-1.5 text-xs uppercase tracking-[2px] text-muted-foreground">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
