import type { Metadata } from 'next';
import { Fragment } from 'react';
import Editor from '@/components/editor/Editor';
import { C, L, N, P, S } from '@/components/editor/tokens';
import { MY_EXPERIENCE } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'The teams Victor Adekunle has built with.',
    alternates: { canonical: '/experience' },
};

/** experience.yml: the teams I've built with, newest first. */
export default function ExperiencePage() {
    return (
        <Editor>
            <L>
                <h1 className="syn-c inline"># Experience: the teams I’ve built with.</h1>
            </L>
            <L />
            <L>
                <P>experience</P>:
            </L>
            {MY_EXPERIENCE.map((job, index) => {
                const isCurrent = /present/i.test(job.duration);

                return (
                    <Fragment key={`${job.company}-${index}`}>
                        <L indent={1}>
                            - <P>title</P>:{' '}
                            <h2 className="inline font-bold text-foreground">
                                {job.title}
                            </h2>
                        </L>
                        <L indent={2}>
                            <P>company</P>: <S>{job.company}</S>
                        </L>
                        <L indent={2}>
                            <P>period</P>: {job.duration}
                        </L>
                        <L indent={2}>
                            <P>current</P>: <N>{isCurrent ? 'true' : 'false'}</N>
                            {isCurrent && <C>{'  # working here now'}</C>}
                        </L>
                        <L />
                    </Fragment>
                );
            })}
        </Editor>
    );
}
