'use client';
import parse from 'html-react-parser';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github, Maximize2 } from 'lucide-react';
import ArrowAnimation from '@/components/ArrowAnimation';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { prefersReducedMotion } from '@/lib/utils';
import Lightbox from './Lightbox';
import ProjectPagination from './ProjectPagination';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ACTION_LINK_CLASSES =
    'chip h-10 gap-2 px-4 text-sm font-medium uppercase tracking-wider transition-colors hover:border-primary hover:text-primary';

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeImage, setActiveImage] = useState<number | null>(null);

    // Fade the content in on page load.
    useGSAP(
        () => {
            if (!containerRef.current) return;

            if (prefersReducedMotion()) {
                gsap.set('.fade-in-later', { autoAlpha: 1, y: 0 });
                return;
            }

            gsap.set('.fade-in-later', {
                autoAlpha: 0,
                y: 30,
            });
            const tl = gsap.timeline({
                delay: 0.5,
            });

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
            });
        },
        { scope: containerRef },
    );

    // Blur the info block and shrink it while the gallery scrolls over it.
    useGSAP(
        () => {
            if (window.innerWidth < 992 || prefersReducedMotion()) return;

            gsap.to('#info', {
                filter: 'blur(3px)',
                autoAlpha: 0,
                scale: 0.9,
                scrollTrigger: {
                    trigger: '#info',
                    start: 'bottom bottom',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    // Subtle parallax on the gallery images.
    useGSAP(
        () => {
            if (prefersReducedMotion()) return;

            const images =
                containerRef.current?.querySelectorAll<HTMLElement>(
                    '.gallery-image',
                );

            images?.forEach((image) => {
                gsap.fromTo(
                    image,
                    { yPercent: -6 },
                    {
                        yPercent: 6,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: image.parentElement,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        },
                    },
                );
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-24 pb-14">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="mb-12 inline-flex gap-2 items-center group h-12"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>

                <div
                    className="top-0 min-h-[calc(100svh-100px)] flex"
                    id="info"
                >
                    <div className="relative w-full">
                        <div className="mx-auto mb-10 max-w-[635px]">
                            <p className="fade-in-later mb-6">
                                <span
                                    className="comic-caption text-base"
                                    style={{ rotate: '-1.5deg' }}
                                >
                                    Selected project
                                </span>
                            </p>
                            <h1 className="fade-in-later comic-title text-5xl leading-none md:text-[72px]">
                                {project.title}
                            </h1>

                            {(project.liveUrl || project.sourceCode) && (
                                <div className="fade-in-later mt-6 flex flex-wrap gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className={ACTION_LINK_CLASSES}
                                        >
                                            <ExternalLink size={16} />
                                            Live site
                                        </a>
                                    )}
                                    {project.sourceCode && (
                                        <a
                                            href={project.sourceCode}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className={ACTION_LINK_CLASSES}
                                        >
                                            <Github size={16} />
                                            Source code
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
                            <div className="fade-in-later">
                                <p className="mb-3 font-display text-lg tracking-wider text-primary">
                                    Year
                                </p>

                                <div className="text-lg">{project.year}</div>
                            </div>
                            <div className="fade-in-later">
                                <p className="mb-3 font-display text-lg tracking-wider text-primary">
                                    Tech &amp; Technique
                                </p>

                                <ul className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <li key={tech} className="chip">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="fade-in-later">
                                <p className="mb-3 font-display text-lg tracking-wider text-primary">
                                    Description
                                </p>

                                <div className="text-lg markdown-text">
                                    {parse(project.description)}
                                </div>
                            </div>
                            {project.role && (
                                <div className="fade-in-later">
                                    <p className="mb-3 font-display text-lg tracking-wider text-primary">
                                        My Role
                                    </p>

                                    <div className="text-lg markdown-text">
                                        {parse(project.role)}
                                    </div>
                                </div>
                            )}
                        </div>

                        <ArrowAnimation />
                    </div>
                </div>

                <div
                    className="fade-in-later relative flex flex-col gap-8 max-w-[800px] mx-auto"
                    id="images"
                >
                    {project.images.map((image, i) => (
                        <figure
                            key={image}
                            className="group relative w-full aspect-[750/400] overflow-hidden rounded-md border-[3px] border-paper bg-card shadow-comic-primary"
                        >
                            <Image
                                src={image}
                                alt={`${project.title} screenshot ${i + 1}`}
                                fill
                                sizes="(max-width: 880px) 100vw, 800px"
                                className="gallery-image object-cover object-top scale-[1.15]"
                            />
                            <button
                                type="button"
                                onClick={() => setActiveImage(i)}
                                aria-label={`View ${project.title} screenshot ${i + 1} at full size`}
                                className="absolute inset-0 z-[1] flex items-start justify-end p-4 text-foreground outline-none"
                            >
                                <span className="inline-flex size-11 items-center justify-center rounded-sm border-[3px] border-ink bg-paper text-ink shadow-comic-primary-sm transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-primary">
                                    <Maximize2 size={18} />
                                </span>
                            </button>
                        </figure>
                    ))}
                </div>

                <ProjectPagination slug={project.slug} />
            </div>

            <Lightbox
                images={project.images}
                title={project.title}
                index={activeImage}
                onClose={() => setActiveImage(null)}
                onNavigate={setActiveImage}
            />
        </section>
    );
};

export default ProjectDetails;
