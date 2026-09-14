'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Reveal the page after every navigation. The pathname dependency
    // guarantees the reveal replays even if this template instance is reused.
    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.to('.page-transition--inner', {
                yPercent: 0,
                duration: 0.2,
            })
                .to('.page-transition--inner', {
                    yPercent: -100,
                    duration: 0.2,
                })
                .to('.page-transition', {
                    yPercent: -100,
                });
        },
        { dependencies: [pathname] },
    );

    return (
        <div>
            <div
                className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]"
                aria-hidden="true"
            >
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
            </div>

            {children}
        </div>
    );
}
