import { Download, Play } from 'lucide-react';
import CopyEmailButton from '@/components/editor/CopyEmailButton';
import Editor from '@/components/editor/Editor';
import { C, F, K, L, P, S } from '@/components/editor/tokens';
import { MAILTO, SOCIAL_LABELS } from '@/components/ide/commands';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
    title: 'Contact',
    description:
        'Get in touch with Victor Adekunle: email, GitHub, LinkedIn, X and a CV to download.',
    path: '/contact',
});

/** contact.sh: every way to reach me, as a script you can "run". */
export default function ContactPage() {
    return (
        <Editor>
            <L>
                <C>#!/usr/bin/env bash</C>
            </L>
            <L>
                <h1 className="syn-c inline"># Let&apos;s build it.</h1>
            </L>
            <L>
                <C>
                    # I&apos;m always open to discussing new products, ideas, or
                    opportunities. Drop me a line and I&apos;ll get back to you
                    soon.
                </C>
            </L>
            <L />
            <L>
                <P>EMAIL</P>=
                <a className="link break-all" href={MAILTO}>
                    <S>&quot;{GENERAL_INFO.email}&quot;</S>
                </a>
            </L>
            {SOCIAL_LINKS.map((link) => (
                <L key={link.name}>
                    <P>{(SOCIAL_LABELS[link.name] ?? link.name).toUpperCase()}</P>=
                    <a
                        className="link break-all"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${SOCIAL_LABELS[link.name] ?? link.name} (opens in a new tab)`}
                    >
                        <S>&quot;{link.url}&quot;</S>
                    </a>
                </L>
            ))}
            <L>
                <P>CV</P>=
                <a className="link break-all" href={GENERAL_INFO.resume} download>
                    <S>&quot;{GENERAL_INFO.resume.replace(/^\//, './')}&quot;</S>
                </a>
            </L>
            <L />
            <L>
                <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <a href={MAILTO} className="code-lens">
                        <Play size={13} aria-hidden="true" />
                        Run say_hi
                    </a>
                    <CopyEmailButton />
                    <a href={GENERAL_INFO.resume} download className="code-lens">
                        <Download size={13} aria-hidden="true" />
                        Download CV
                    </a>
                </span>
            </L>
            <L>
                <F>say_hi</F>() {'{'}
            </L>
            <L indent={1}>
                <K>open</K> <S>&quot;mailto:$EMAIL&quot;</S>
            </L>
            <L>{'}'}</L>
            <L />
            <L>
                <F>say_hi</F>
            </L>
            <L />
        </Editor>
    );
}
