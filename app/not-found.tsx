import type { Metadata } from 'next';
import Button from '@/components/Button';
import Starburst from '@/components/Starburst';

export const metadata: Metadata = {
    title: 'Page not found',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <section className="container flex min-h-[calc(100svh-80px)] flex-col items-center justify-center py-20 text-center">
            <Starburst className="mb-8 size-40" tilt={-8}>
                <span className="text-4xl">404!</span>
            </Starburst>
            <h1 className="comic-title text-6xl leading-none sm:text-8xl">
                Page not found
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
            </p>
            <div className="mt-10">
                <Button as="link" href="/" variant="primary">
                    Back home
                </Button>
            </div>
        </section>
    );
}
