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
                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    / about me
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Victor.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
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
                            <p className="mt-3 slide-up-and-fade">
                                Beyond code, I’m deeply inspired by storytelling
                                and creativity. When I’m not building products,
                                you’ll probably find me reading manga and
                                manhwa, watching anime, or grinding battle
                                royale games. I enjoy the mix of strategy,
                                creativity, and fast decision-making—whether
                                it’s in code, stories, or games.
                            </p>
                            {/* <p className="mt-3 slide-up-and-fade">
                                I’m always curious, always learning, and driven
                                by the idea that great software can be both
                                technically solid and meaningful to real people.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
