'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Experience" number="02" />

                <ol className="relative ml-2 space-y-12 border-l-[3px] border-paper/30 pl-8 md:pl-14">
                    {MY_EXPERIENCE.map((item, index) => {
                        const isCurrent = /present/i.test(item.duration);

                        return (
                            <li
                                key={`${item.company}-${index}`}
                                className="experience-item relative"
                            >
                                <span
                                    aria-hidden
                                    className={cn(
                                        'absolute left-[-41.5px] top-8 size-4 rounded-full border-[3px] border-ink md:left-[-65.5px]',
                                        isCurrent ? 'bg-primary' : 'bg-paper',
                                    )}
                                ></span>

                                <div
                                    className="comic-panel p-6 md:p-8"
                                    style={{
                                        rotate: index % 2 ? '0.6deg' : '-0.6deg',
                                    }}
                                >
                                    <div className="flex flex-wrap items-center gap-3">
                                        <p className="font-display text-xl tracking-wide text-secondary">
                                            {item.company}
                                        </p>
                                        {isCurrent && (
                                            <span
                                                className="comic-caption bg-accent px-2 py-1 text-sm text-accent-foreground shadow-none"
                                                style={{ rotate: '-3deg' }}
                                            >
                                                Now
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="comic-title mt-3 text-4xl leading-none sm:text-5xl">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-muted-foreground">
                                        {item.duration}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default Experiences;
