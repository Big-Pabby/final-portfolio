import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Editor from '@/components/editor/Editor';
import { C, F, K, L, N, P, S } from '@/components/editor/tokens';
import LocalTime from '@/components/LocalTime';
import { GENERAL_INFO } from '@/lib/data';

export const metadata: Metadata = {
    title: 'About me',
    description:
        'Victor Adekunle is a software engineer working across the stack, from React, Next.js, Vue and React Native to Node.js, Express and PostgreSQL.',
    alternates: { canonical: '/about' },
};

const list = (items: string[]): ReactNode =>
    items.map((item, index) => (
        <span key={item}>
            {index > 0 && ', '}
            <S>&apos;{item}&apos;</S>
        </span>
    ));

const Field = ({ name, children }: { name: string; children: ReactNode }) => (
    <L indent={1}>
        <P>{name}</P>: {children},
    </L>
);

/** about.ts: my bio as a doc comment, and the facts as a typed object. */
export default function AboutPage() {
    return (
        <Editor>
            <L>
                <C>{'/**'}</C>
            </L>
            <L>
                <h1 className="syn-c inline">{' * About me'}</h1>
            </L>
            <L>
                <C>{' *'}</C>
            </L>
            <L>
                <span className="text-foreground/85">
                    <C>{' * '}</C>
                    I’m a software engineer who loves building impactful,
                    user-focused products that help change lives. I work across
                    the stack — from polished frontends in React, Next.js, Vue,
                    Nuxt, and React Native to the APIs that power them with
                    Node.js, Express, PostgreSQL, and Prisma. I also build
                    AI-driven features, and I care deeply about performance,
                    clean architecture, and scalable systems.
                </span>
            </L>
            <L>
                <C>{' *'}</C>
            </L>
            <L>
                <span className="text-foreground/85">
                    <C>{' * '}</C>
                    Beyond code, I’m deeply inspired by storytelling and
                    creativity. When I’m not building products, you’ll probably
                    find me reading manga and manhwa, watching anime, or
                    grinding battle royale games. I enjoy the mix of strategy,
                    creativity, and fast decision-making—whether it’s in code,
                    stories, or games.
                </span>
            </L>
            <L>
                <C>{' */'}</C>
            </L>
            <L>
                <K>export const</K> <F>victor</F>: <F>Engineer</F> = {'{'}
            </L>
            <Field name="name">
                <S>&apos;{GENERAL_INFO.name}&apos;</S>
            </Field>
            <Field name="role">
                <S>&apos;{GENERAL_INFO.role}&apos;</S>
            </Field>
            <L indent={1}>
                <P>location</P>: <S>&apos;{GENERAL_INFO.location}&apos;</S>,{' '}
                <C>
                    {'// '}
                    <LocalTime /> right now
                </C>
            </L>
            <L indent={1}>
                <P>available</P>: <N>{GENERAL_INFO.availability ? 'true' : 'false'}</N>,
                {GENERAL_INFO.availability && (
                    <C>{` // ${GENERAL_INFO.availability.toLowerCase()}`}</C>
                )}
            </L>
            <Field name="builds">[{list(['web', 'mobile', 'AI'])}]</Field>
            <Field name="frontend">
                [{list(['React', 'Next.js', 'Vue', 'Nuxt', 'React Native'])}]
            </Field>
            <Field name="backend">
                [{list(['Node.js', 'Express', 'PostgreSQL', 'Prisma'])}]
            </Field>
            <Field name="caresAbout">
                [{list(['performance', 'clean architecture', 'scalable systems'])}]
            </Field>
            <Field name="offTheClock">
                [{list(['manga & manhwa', 'anime', 'battle royale games'])}]
            </Field>
            <L>{'};'}</L>
            <L />
        </Editor>
    );
}
