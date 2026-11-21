import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import Editor from '@/components/editor/Editor';
import { H1, L, Para, Quote } from '@/components/editor/tokens';
import { TESTIMONIALS } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Testimonials',
    description: 'What the people Victor Adekunle has worked with say.',
    alternates: { canonical: '/testimonials' },
};

/** testimonials.md: only exists once TESTIMONIALS in lib/data.ts has quotes. */
export default function TestimonialsPage() {
    if (TESTIMONIALS.length === 0) notFound();

    return (
        <Editor variant="markdown">
            <H1>In their words</H1>
            <L />
            <Para>What the people I’ve worked with say.</Para>
            {TESTIMONIALS.map((testimonial) => (
                <Fragment key={testimonial.name}>
                    <L />
                    <Quote>
                        <span className="text-foreground">{testimonial.quote}</span>
                    </Quote>
                    <Quote>
                        <span className="font-semibold text-foreground">
                            {testimonial.name}
                        </span>
                        , {testimonial.role} · {testimonial.company}
                        {testimonial.url && (
                            <>
                                {' · '}
                                <a
                                    href={testimonial.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                    aria-label={`${testimonial.name}’s profile (opens in a new tab)`}
                                >
                                    profile
                                </a>
                            </>
                        )}
                    </Quote>
                </Fragment>
            ))}
            <L />
        </Editor>
    );
}
