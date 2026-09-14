import { ArrowLeft, ArrowRight } from 'lucide-react';
import TransitionLink from '@/components/TransitionLink';
import { PROJECTS } from '@/lib/data';

interface Props {
    slug: string;
}

/** Previous / next links so visitors can browse projects without going back home. */
const ProjectPagination = ({ slug }: Props) => {
    const index = PROJECTS.findIndex((project) => project.slug === slug);
    if (index === -1 || PROJECTS.length < 2) return null;

    const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(index + 1) % PROJECTS.length];

    return (
        <nav
            aria-label="More projects"
            className="mx-auto mt-24 grid max-w-[800px] border-t pt-10 sm:grid-cols-2"
        >
            <TransitionLink
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-3"
            >
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowLeft
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Previous project
                </span>
                <span className="font-display text-3xl leading-none transition-colors group-hover:text-primary sm:text-4xl">
                    {prev.title}
                </span>
            </TransitionLink>

            <TransitionLink
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-3 sm:items-end sm:text-right"
            >
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    Next project
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
                <span className="font-display text-3xl leading-none transition-colors group-hover:text-primary sm:text-4xl">
                    {next.title}
                </span>
            </TransitionLink>
        </nav>
    );
};

export default ProjectPagination;
