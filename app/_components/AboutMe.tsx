'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <div className="slide-up-and-fade mb-12 flex items-center gap-4">
                    <span
                        className="comic-caption"
                        style={{ rotate: '-1.5deg' }}
                    >
                        About me
                    </span>
                    <span
                        className="h-[3px] grow bg-paper/15"
                        aria-hidden="true"
                    ></span>
                </div>

                <div className="grid md:grid-cols-12">
                    <div className="md:col-span-5">
                        <h2 className="comic-title slide-up-and-fade text-5xl leading-none sm:text-6xl">
                            Hi, I&apos;m Victor.
                        </h2>
                    </div>
                    <div className="md:col-span-7">
                        <div
                            className="comic-panel slide-up-and-fade max-w-[540px] p-6 text-lg text-foreground/90 md:p-8"
                            style={{ rotate: '0.8deg' }}
                        >
                            <p>
                                I’m a software engineer who loves building
                                impactful, user-focused products that help change
                                lives. I work across the stack — from polished
                                frontends in React, Next.js, Vue, Nuxt, and React
                                Native to the APIs that power them with Node.js,
                                Express, PostgreSQL, and Prisma. I also build
                                AI-driven features, and I care deeply about
                                performance, clean architecture, and scalable
                                systems.
                            </p>
                            <p className="mt-4">
                                Beyond code, I’m deeply inspired by storytelling
                                and creativity. When I’m not building products,
                                you’ll probably find me reading manga and
                                manhwa, watching anime, or grinding battle
                                royale games. I enjoy the mix of strategy,
                                creativity, and fast decision-making—whether
                                it’s in code, stories, or games.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
