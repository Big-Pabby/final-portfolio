import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter }: Props) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // Kill any running icon animation when the component unmounts.
    useGSAP(
        () => () => {
            timelineRef.current?.kill();
        },
        { scope: externalLinkSVGRef },
    );

    const handleMouseEnter = () => {
        onMouseEnter(project.slug);

        const svg = externalLinkSVGRef.current;
        if (!svg) return;

        const box = svg.querySelector<SVGPathElement>('.ext-box');
        const line = svg.querySelector<SVGPathElement>('.ext-line');
        const curb = svg.querySelector<SVGPathElement>('.ext-curb');
        if (!box || !line || !curb) return;

        timelineRef.current?.kill();

        [box, line, curb].forEach((path) => {
            const length = path.getTotalLength();
            gsap.set(path, {
                opacity: 0,
                strokeDasharray: length,
                strokeDashoffset: length,
            });
        });

        timelineRef.current = gsap
            .timeline({ repeat: -1, repeatDelay: 1 })
            .to(svg, { autoAlpha: 1 })
            .to(box, { opacity: 1, strokeDashoffset: 0 })
            .to(line, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
            .to(curb, { opacity: 1, strokeDashoffset: 0 })
            .to(svg, { autoAlpha: 0 }, '+=1');
    };

    const handleMouseLeave = () => {
        timelineRef.current?.kill();
        timelineRef.current = null;

        if (externalLinkSVGRef.current) {
            gsap.set(externalLinkSVGRef.current, { autoAlpha: 0 });
        }
    };

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item group block leading-none py-6 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label={`View project: ${project.title}`}
        >
            {selectedProject === null && (
                <div className="relative mb-6 aspect-[3/2] w-full overflow-hidden rounded-md border-[3px] border-paper bg-card shadow-comic-primary">
                    <Image
                        src={project.thumbnail}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top"
                    />
                </div>
            )}
            <div className="flex gap-2 md:gap-5">
                <div className="pt-2 font-display text-xl tracking-wide text-primary">
                    #{(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="grow">
                    <h4 className="text-4xl xs:text-6xl flex gap-4 font-display transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                        {project.title}
                        <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                ref={externalLinkSVGRef}
                            >
                                <path
                                    className="ext-box"
                                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                ></path>
                                <path className="ext-line" d="M10 14 21 3"></path>
                                <path className="ext-curb" d="M15 3h6v6"></path>
                            </svg>
                        </span>
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
                        {project.techStack
                            .slice(0, 3)
                            .map((tech, idx, stackArr) => (
                                <div
                                    className="gap-3 flex items-center"
                                    key={tech}
                                >
                                    <span>{tech}</span>
                                    {idx !== stackArr.length - 1 && (
                                        <span className="inline-block size-2 rounded-full bg-primary"></span>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
                <span className="hidden md:block shrink-0 self-start font-display text-xl tracking-wide text-muted-foreground">
                    {project.year}
                </span>
            </div>
        </TransitionLink>
    );
};

export default Project;
