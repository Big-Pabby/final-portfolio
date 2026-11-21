import Image from 'next/image';
import { Fragment } from 'react';
import Editor from '@/components/editor/Editor';
import { L, P, S } from '@/components/editor/tokens';
import { MY_STACK } from '@/lib/data';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
    title: 'My stack',
    description:
        'The tools Victor Adekunle reaches for, front to back: React, Next.js, Vue, Nuxt, TypeScript, Node.js, Express, PostgreSQL and more.',
    path: '/stack',
});

const GROUPS = Object.entries(MY_STACK);

/** stack.json: the tools I reach for, grouped, with each tool's logo. */
export default function StackPage() {
    return (
        <Editor>
            <h1 className="sr-only">My stack</h1>
            <L>{'{'}</L>
            {GROUPS.map(([group, items], groupIndex) => (
                <Fragment key={group}>
                    <L indent={1}>
                        <h2 className="inline">
                            <P>&quot;{group}&quot;</P>
                        </h2>
                        : [
                    </L>
                    {items.map((item, index) => (
                        <L indent={2} key={item.name}>
                            <span className="inline-flex items-center gap-2.5">
                                <span className="grid size-6 shrink-0 place-items-center rounded bg-paper">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="size-4 object-contain"
                                    />
                                </span>
                                <span>
                                    <S>&quot;{item.name}&quot;</S>
                                    {index < items.length - 1 && ','}
                                </span>
                            </span>
                        </L>
                    ))}
                    <L indent={1}>]{groupIndex < GROUPS.length - 1 && ','}</L>
                </Fragment>
            ))}
            <L>{'}'}</L>
            <L />
        </Editor>
    );
}
