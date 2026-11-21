import type { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import Editor from '@/components/editor/Editor';
import { Bullet, H1, H2, L, Para } from '@/components/editor/tokens';
import { PROJECTS, WORK_HABITS } from '@/lib/data';

export const metadata: Metadata = {
    title: 'How I work',
    description:
        'Three habits Victor Adekunle brings to every project, and the work that shows them.',
    alternates: { canonical: '/how-i-work' },
};

/** how-i-work.md: three habits, each backed by projects that show it. */
export default function HowIWorkPage() {
    return (
        <Editor variant="markdown">
            <H1>How I work</H1>
            <L />
            <Para>
                Three habits I bring to every project, and the work that shows
                them.
            </Para>
            {WORK_HABITS.map((habit, index) => (
                <Fragment key={habit.title}>
                    <L />
                    <H2>
                        <span className="font-mono text-primary">
                            {String(index + 1).padStart(2, '0')}.
                        </span>{' '}
                        {habit.title}
                    </H2>
                    <L />
                    <Para>{habit.body}</Para>
                    <L />
                    {habit.proof.map(({ slug, line }) => {
                        const project = PROJECTS.find((item) => item.slug === slug);
                        if (!project) return null;

                        return (
                            <Bullet key={slug}>
                                <Link
                                    href={`/projects/${slug}`}
                                    className="link font-semibold text-foreground"
                                >
                                    {project.title}
                                </Link>
                                {': '}
                                {line}
                            </Bullet>
                        );
                    })}
                </Fragment>
            ))}
            <L />
        </Editor>
    );
}
