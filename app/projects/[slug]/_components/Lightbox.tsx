'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Props {
    images: string[];
    title: string;
    /** Index of the open image, or null when closed. */
    index: number | null;
    onClose: () => void;
    onNavigate: (_index: number) => void;
}

/**
 * Full-size, scrollable viewer for project screenshots.
 * Supports Escape / arrow keys, click-outside to close and locks page scroll.
 */
const Lightbox = ({ images, title, index, onClose, onNavigate }: Props) => {
    const lenis = useLenis();
    const dialogRef = useRef<HTMLDivElement>(null);
    const isOpen = index !== null;
    const count = images.length;

    const goPrev = useCallback(() => {
        if (index === null) return;
        onNavigate((index - 1 + count) % count);
    }, [index, count, onNavigate]);

    const goNext = useCallback(() => {
        if (index === null) return;
        onNavigate((index + 1) % count);
    }, [index, count, onNavigate]);

    useEffect(() => {
        if (!isOpen) return;

        lenis?.stop();
        dialogRef.current?.focus({ preventScroll: true });

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            lenis?.start();
        };
    }, [isOpen, lenis, onClose, goPrev, goNext]);

    // Reset the scroll position when switching images.
    useEffect(() => {
        dialogRef.current?.scrollTo({ top: 0 });
    }, [index]);

    if (index === null) return null;

    const stop = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshots`}
            tabIndex={-1}
            data-lenis-prevent
            onClick={onClose}
            className="fixed inset-0 z-[60] overflow-y-auto bg-background/95 backdrop-blur-sm outline-none"
        >
            <div className="sticky top-0 z-[1] flex items-center justify-between bg-gradient-to-b from-background via-background/80 to-transparent px-4 py-3 sm:px-6">
                <p className="text-sm text-muted-foreground">
                    <span className="text-foreground">{index + 1}</span> /{' '}
                    {count}
                </p>
                <div className="flex items-center gap-2" onClick={stop}>
                    {count > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                aria-label="Previous screenshot"
                                className="icon-btn"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="Next screenshot"
                                className="icon-btn"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </>
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="icon-btn"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            <div
                className="mx-auto w-full max-w-[1000px] px-4 pb-16 sm:px-6"
                onClick={stop}
            >
                <div className="relative overflow-hidden rounded-lg border border-border/60 bg-background-light">
                    <span
                        className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground"
                        aria-hidden="true"
                    >
                        Loading…
                    </span>
                    <Image
                        key={images[index]}
                        src={images[index]}
                        alt={`${title} screenshot ${index + 1}`}
                        width={1200}
                        height={800}
                        sizes="(max-width: 1000px) 100vw, 1000px"
                        priority
                        className="relative h-auto w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
