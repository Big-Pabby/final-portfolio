import type { Metadata } from 'next';
import Link from 'next/link';
import Editor from '@/components/editor/Editor';
import { C, F, K, L, N, P, S } from '@/components/editor/tokens';
import ProjectCanvas from '@/components/ProjectCanvas';
import { PROJECTS } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Selected work',
    description:
        'Products Victor Adekunle has built with teams and on his own, across web, mobile and AI.',
    alternates: { canonical: '/projects' },
};

const FEATURED = PROJECTS.filter((project) => project.featured);
const MORE = PROJECTS.filter((project) => !project.featured);

/** projects/selected-work.fig: featured work on a canvas, then the rest as code. */
export default function ProjectsPage() {
    return (
        <>
            <div className="p-4 md:p-6">
                <h1 className="sr-only">Selected work</h1>
                <ProjectCanvas projects={FEATURED} />
            </div>

            {MORE.length > 0 && (
                <Editor>
                    <L>
                        <h2 className="syn-c inline">
                            {'// More projects I’ve worked on.'}
                        </h2>
                    </L>
                    <L>
                        <K>export const</K> <F>alsoShipped</F> = [
                    </L>
                    {MORE.map((project) => (
                        <L indent={1} key={project.slug}>
                            {'{ '}
                            <P>title</P>:{' '}
                            <Link href={`/projects/${project.slug}`} className="link">
                                <S>&apos;{project.title}&apos;</S>
                            </Link>
                            , <P>category</P>: <S>&apos;{project.category}&apos;</S>,{' '}
                            <P>year</P>: <N>{project.year}</N>
                            {' },'}
                        </L>
                    ))}
                    <L>];</L>
                    <L>
                        <C>{'// Each title opens its case study.'}</C>
                    </L>
                    <L />
                </Editor>
            )}
        </>
    );
}
