'use client';

import { ReactNode, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import StickyEmail from './StickyEmail';

gsap.registerPlugin(ScrollTrigger);

/**
 * Keeps GSAP's ScrollTrigger in sync with Lenis and smooth-scrolls to
 * `#hash` targets after client-side navigation (e.g. "/#about-me" opened
 * from a project page).
 */
const ScrollManager = () => {
    const lenis = useLenis();
    const pathname = usePathname();

    useEffect(() => {
        if (!lenis) return;

        const update = () => ScrollTrigger.update();
        lenis.on('scroll', update);

        return () => {
            lenis.off('scroll', update);
        };
    }, [lenis]);

    useEffect(() => {
        if (!lenis) return;

        const id = window.location.hash.slice(1);
        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;

        // Let the page transition reveal the new page before scrolling.
        const timer = window.setTimeout(() => {
            lenis.scrollTo(target, { offset: -24, force: true });
        }, 600);

        return () => window.clearTimeout(timer);
    }, [lenis, pathname]);

    return null;
};

interface RootClientWrapperProps {
    children: ReactNode;
}

export default function RootClientWrapper({
    children,
}: RootClientWrapperProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.4,
            }}
        >
            <ScrollManager />
            <Navbar />
            <main id="main">{children}</main>
            <Footer />

            <CustomCursor />
            <Preloader />
            <ScrollProgressIndicator />
            <ParticleBackground />
            <StickyEmail />
        </ReactLenis>
    );
}
