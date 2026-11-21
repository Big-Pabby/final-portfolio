'use client';
import { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { useIde } from '@/components/ide/IdeProvider';
import { cn } from '@/lib/utils';

interface Props {
    /** Markdown files read as prose; everything else is monospaced code. */
    variant?: 'code' | 'markdown';
    children: ReactNode;
}

/**
 * The open file. Its lines are <L> elements (see ./tokens); clicking one
 * marks it as the current line and reports it to the status bar.
 */
const Editor = ({ variant = 'code', children }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { cursorLine, setCursorLine } = useIde();

    useEffect(() => {
        const lines = ref.current?.querySelectorAll(':scope > .editor-line');
        lines?.forEach((line, index) => {
            if (index + 1 === cursorLine) line.setAttribute('data-active', 'true');
            else line.removeAttribute('data-active');
        });
    }, [cursorLine]);

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        const line = (e.target as HTMLElement).closest('.editor-line');
        if (!line || !ref.current) return;

        const lines = [...ref.current.querySelectorAll(':scope > .editor-line')];
        setCursorLine(lines.indexOf(line) + 1);
    };

    return (
        <div
            ref={ref}
            className={cn('editor', variant === 'markdown' && 'editor--md')}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Editor;
