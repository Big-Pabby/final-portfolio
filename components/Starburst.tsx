import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

// 16-point comic "burst" polygon, computed once.
const POINTS = Array.from({ length: 32 }, (_, i) => {
    const angle = (i * Math.PI) / 16;
    const radius = i % 2 === 0 ? 50 : 39;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
}).join(' ');

interface Props {
    children: ReactNode;
    className?: string;
    /** Tilt in degrees, applied with the CSS `rotate` property so GSAP transforms stay intact. */
    tilt?: number;
    style?: CSSProperties;
}

/** Yellow comic starburst badge with an ink outline and hard shadow. */
const Starburst = ({ children, className, tilt = -8, style }: Props) => {
    return (
        <div
            className={cn(
                'relative inline-grid size-32 place-items-center',
                className,
            )}
            style={{ rotate: `${tilt}deg`, ...style }}
        >
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full drop-shadow-[4px_4px_0_hsl(var(--ink))]"
                aria-hidden="true"
            >
                <polygon
                    points={POINTS}
                    className="fill-primary stroke-ink"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="relative px-4 text-center font-display text-lg uppercase leading-none tracking-wide text-ink">
                {children}
            </span>
        </div>
    );
};

export default Starburst;
