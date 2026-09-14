'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

const STORAGE_KEY = 'va-preloader-seen';
const NAME = 'VICTOR'.split('');

/**
 * Intro animation. It only plays once per browser session so refreshes and
 * return visits go straight to the content.
 */
const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const [isDone, setIsDone] = useState(false);

    useGSAP(
        () => {
            if (!preloaderRef.current) return;

            let seen = false;
            try {
                seen = window.sessionStorage.getItem(STORAGE_KEY) === '1';
            } catch {
                // sessionStorage can be unavailable (privacy mode); play anyway.
            }

            if (seen || prefersReducedMotion()) {
                setIsDone(true);
                return;
            }

            try {
                window.sessionStorage.setItem(STORAGE_KEY, '1');
            } catch {
                // ignore
            }

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
                onComplete: () => setIsDone(true),
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    if (isDone) return null;

    return (
        <div
            className="fixed inset-0 z-[6] flex"
            ref={preloaderRef}
            aria-hidden="true"
        >
            {Array.from({ length: 10 }, (_, i) => (
                <div
                    key={i}
                    className="preloader-item h-full w-[10%] bg-black"
                ></div>
            ))}

            <p className="name-text comic-title flex text-[20vw] lg:text-[200px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
                {NAME.map((letter, i) => (
                    <span key={i} className="inline-block translate-y-full">
                        {letter}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default Preloader;
