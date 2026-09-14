import Link from 'next/link';
import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { Variant } from '@/types';
import { cn } from '@/lib/utils';

const Child = ({ icon }: { icon?: boolean }) => (
    <span className="flex items-center justify-center gap-3">
        <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
        {!icon && 'Processing...'}
    </span>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
    as?: 'link' | 'button';
    loading?: boolean;
    icon?: boolean;
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: Variant;
} & (ComponentProps<typeof Link> | ButtonProps);

const EXTERNAL_HREF = /^(https?:|mailto:|tel:)/i;

const VARIANT_CLASSES: Record<Variant, string> = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    success: 'bg-green-500 text-white',
    warning: 'bg-orange-500 text-white',
    danger: 'bg-accent text-accent-foreground',
    info: 'bg-blue-500 text-white',
    light: 'bg-paper text-ink',
    dark: 'bg-ink text-paper',
    link: 'text-foreground hover:text-primary',
    'no-color': '',
};

const Button = ({
    loading,
    variant = 'primary',
    className,
    children,
    as = 'link',
    icon = false,
    ...rest
}: Props) => {
    const isComic = variant !== 'link' && variant !== 'no-color';

    const buttonClasses = cn(
        'group relative inline-flex h-12 items-center justify-center gap-2 px-7 font-display text-xl uppercase tracking-wider outline-none transition-[box-shadow,background-color,color] duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        // Comic button: ink outline + hard paper shadow that grows on hover and sinks on press.
        isComic &&
            'comic-btn rounded-sm border-[3px] border-ink shadow-comic hover:shadow-comic-lg active:shadow-comic-sm',
        VARIANT_CLASSES[variant],
        icon && 'min-w-12 aspect-square px-0',
        className,
    );

    const content = <span>{loading ? <Child icon={icon} /> : children}</span>;

    if (as === 'link') {
        const props = rest as ComponentProps<typeof Link>;
        const href = props.href?.toString() || '#';

        if (props.target === '_blank' || EXTERNAL_HREF.test(href)) {
            return (
                <a className={buttonClasses} {...props} href={href}>
                    {content}
                </a>
            );
        }

        return (
            <Link className={buttonClasses} {...props} href={href}>
                {content}
            </Link>
        );
    }

    const props = rest as ButtonProps;

    return (
        <button className={buttonClasses} type="button" {...props}>
            {content}
        </button>
    );
};

export default Button;
