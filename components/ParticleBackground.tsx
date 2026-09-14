'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

const PARTICLE_COUNT = 80;

const ParticleBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const particles =
                containerRef.current?.querySelectorAll<HTMLElement>(
                    '.particle',
                );
            if (!particles?.length) return;

            const reduceMotion = prefersReducedMotion();

            particles.forEach((particle) => {
                const size = Math.random() * 3 + 1;

                gsap.set(particle, {
                    width: size,
                    height: size,
                    opacity: Math.random() * 0.8 + 0.1,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                });

                if (reduceMotion) return;

                gsap.to(particle, {
                    y: window.innerHeight,
                    duration: Math.random() * 10 + 10,
                    opacity: 0,
                    repeat: -1,
                    ease: 'none',
                });
            });
        },
        { scope: containerRef },
    );

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        >
            {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
                <span
                    key={i}
                    className="particle absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
