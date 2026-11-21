import type { Metadata } from 'next';
import Link from 'next/link';
import Editor from '@/components/editor/Editor';
import { C, F, K, L, S } from '@/components/editor/tokens';

export const metadata: Metadata = {
    title: 'Page not found',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <Editor>
            <L>
                <h1 className="syn-c inline">{'// 404: this file doesn’t exist, or it has moved.'}</h1>
            </L>
            <L />
            <L>
                <K>throw new</K> <F>Error</F>(<S>&apos;File not found&apos;</S>);
            </L>
            <L />
            <L>
                <C>{'// Try '}</C>
                <Link href="/" className="link">
                    README.md
                </Link>
                <C>{', or press Ctrl + K to search every file.'}</C>
            </L>
            <L />
        </Editor>
    );
}
