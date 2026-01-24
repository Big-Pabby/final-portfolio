'use client';

import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import StickyEmail from './StickyEmail';

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
            <Navbar />
            <main>{children}</main>
            {/*  */}

            <CustomCursor />
            <Preloader />
            <ScrollProgressIndicator />
            <ParticleBackground />
            <StickyEmail />
        </ReactLenis>
    );
}
<Footer />;
