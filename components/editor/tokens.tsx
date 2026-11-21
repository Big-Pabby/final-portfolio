import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Children = { children?: ReactNode };

/**
 * One numbered line of a file. `indent` is in levels (two characters each)
 * and is applied as padding, so a wrapped line keeps its indentation.
 */
export const L = ({
    children,
    indent = 0,
    className,
}: Children & { indent?: number; className?: string }) => (
    <div className={cn('editor-line', className)}>
        <div style={{ '--indent': indent } as CSSProperties}>
            {children ?? ' '}
        </div>
    </div>
);

// Syntax colours: keyword, string, number/boolean, function/type, property, comment.
export const K = ({ children }: Children) => <span className="syn-k">{children}</span>;
export const S = ({ children }: Children) => <span className="syn-s">{children}</span>;
export const N = ({ children }: Children) => <span className="syn-n">{children}</span>;
export const F = ({ children }: Children) => <span className="syn-f">{children}</span>;
export const P = ({ children }: Children) => <span className="syn-p">{children}</span>;
export const C = ({ children }: Children) => <span className="syn-c">{children}</span>;

// Markdown lines: real headings and lists, with the syntax marks left visible.
export const H1 = ({ children }: Children) => (
    <L>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl md:leading-tight">
            <span className="md-mark"># </span>
            {children}
        </h1>
    </L>
);

export const H2 = ({ children }: Children) => (
    <L>
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            <span className="md-mark">## </span>
            {children}
        </h2>
    </L>
);

export const H3 = ({ children }: Children) => (
    <L>
        <h3 className="font-semibold">
            <span className="md-mark">### </span>
            {children}
        </h3>
    </L>
);

export const Para = ({ children, className }: Children & { className?: string }) => (
    <L>
        <p className={cn('max-w-[72ch] text-foreground/85', className)}>{children}</p>
    </L>
);

export const Bullet = ({ children }: Children) => (
    <L>
        <p className="flex max-w-[72ch] gap-2 text-foreground/85">
            <span className="md-mark mt-[0.3em]">-</span>
            <span className="min-w-0">{children}</span>
        </p>
    </L>
);

export const Quote = ({ children }: Children) => (
    <L>
        <p className="flex max-w-[72ch] gap-2 text-muted-foreground">
            <span className="md-mark mt-[0.3em]">&gt;</span>
            <span className="min-w-0">{children}</span>
        </p>
    </L>
);
