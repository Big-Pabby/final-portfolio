'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
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
                    end: 'bottom 10%',
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
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My stack" number="01" />

                <div className="space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <h3 className="slide-up comic-title text-5xl uppercase leading-none">
                                    {key}
                                </h3>
                            </div>

                            <ul className="sm:col-span-7 flex flex-wrap gap-4">
                                {value.map((item) => (
                                    <li
                                        className="slide-up flex items-center gap-3 rounded-sm border-2 border-paper/80 bg-card py-2 pl-2 pr-4 transition-[border-color,box-shadow] duration-150 hover:border-primary hover:shadow-comic-primary-sm"
                                        key={item.name}
                                    >
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-paper">
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="size-6 object-contain"
                                            />
                                        </span>
                                        <span className="font-display text-xl tracking-wide">
                                            {item.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
