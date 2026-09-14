'use client';
import React, { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const bar = scrollBarRef.current;
            if (!bar) return;

            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollable = scrollHeight - clientHeight;
            const progress =
                scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;

            bar.style.transform = `translateY(-${(1 - progress) * 100}%)`;
        };

        const schedule = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, []);

    return (
        <div
            className="max-md:hidden fixed top-[50svh] right-[2%] -translate-y-1/2 w-2 h-[110px] rounded-full border-2 border-paper/60 bg-card overflow-hidden"
            aria-hidden="true"
        >
            <div
                className="w-full bg-primary rounded-full h-full"
                ref={scrollBarRef}
            ></div>
        </div>
    );
};

export default ScrollProgressIndicator;
