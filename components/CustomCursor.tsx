'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { hasFinePointer } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

const INTERACTIVE_SELECTOR =
    'a, button, [role="button"], input, textarea, select, label, summary';

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP(
        () => {
            const cursor = svgRef.current;
            if (!cursor || !hasFinePointer()) return;

            gsap.set(cursor, { transformOrigin: 'top left' });

            const xTo = gsap.quickTo(cursor, 'x', {
                duration: 0.25,
                ease: 'power2.out',
            });
            const yTo = gsap.quickTo(cursor, 'y', {
                duration: 0.25,
                ease: 'power2.out',
            });

            let isVisible = false;

            const show = () => {
                if (isVisible) return;
                isVisible = true;
                gsap.to(cursor, { opacity: 1, duration: 0.2 });
            };

            const hide = () => {
                isVisible = false;
                gsap.to(cursor, { opacity: 0, duration: 0.2 });
            };

            const handleMouseMove = (e: MouseEvent) => {
                xTo(e.clientX);
                yTo(e.clientY);
                show();
            };

            // Grow the cursor over interactive elements.
            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as Element | null;
                const interactive = target?.closest?.(INTERACTIVE_SELECTOR);
                gsap.to(cursor, {
                    scale: interactive ? 1.5 : 1,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            };

            window.addEventListener('mousemove', handleMouseMove, {
                passive: true,
            });
            document.addEventListener('mouseover', handleMouseOver, {
                passive: true,
            });
            document.documentElement.addEventListener('mouseleave', hide);
            document.documentElement.addEventListener('mouseenter', show);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseover', handleMouseOver);
                document.documentElement.removeEventListener('mouseleave', hide);
                document.documentElement.removeEventListener('mouseenter', show);
            };
        },
        { scope: svgRef },
    );

    return (
        <svg
            width="27"
            height="30"
            viewBox="0 0 27 30"
            className="hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none"
            fill="none"
            id="cursor"
            strokeWidth="2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
        >
            <path
                d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                className="fill-primary stroke-ink"
            />
        </svg>
    );
};

export default CustomCursor;
