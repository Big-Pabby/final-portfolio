'use client';
import { Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { H2, L } from '@/components/editor/tokens';
import Lightbox from './Lightbox';

interface Props {
    title: string;
    images: string[];
}

/** The "Screenshots" section of a project file; each image opens full size. */
const ProjectGallery = ({ title, images }: Props) => {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    if (images.length === 0) return null;

    return (
        <>
            <H2>Screenshots</H2>
            <L />
            <L>
                <ul className="grid max-w-[980px] gap-4 sm:grid-cols-2">
                    {images.map((image, index) => (
                        <li
                            key={image}
                            className={index === 0 ? 'sm:col-span-2' : undefined}
                        >
                            <figure className="group overflow-hidden rounded-md border bg-card">
                                <figcaption className="md-mark block truncate border-b px-3 py-1.5">
                                    ![{title} screenshot {index + 1}](
                                    {image.split('/').pop()})
                                </figcaption>
                                <button
                                    type="button"
                                    onClick={() => setActiveImage(index)}
                                    aria-label={`View ${title} screenshot ${index + 1} at full size`}
                                    className="relative block aspect-[16/9] w-full"
                                >
                                    <Image
                                        src={image}
                                        alt={`${title} screenshot ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 980px"
                                        className="object-cover object-top"
                                    />
                                    <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-md bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                                        <Maximize2 size={15} aria-hidden="true" />
                                    </span>
                                </button>
                            </figure>
                        </li>
                    ))}
                </ul>
            </L>
            <L />

            <Lightbox
                images={images}
                title={title}
                index={activeImage}
                onClose={() => setActiveImage(null)}
                onNavigate={setActiveImage}
            />
        </>
    );
};

export default ProjectGallery;
