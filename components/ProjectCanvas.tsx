'use client';
import Link from 'next/link';
import { getRoleTitle } from '@/lib/utils';
import { IProject } from '@/types';
import {
    ArrowUpRight,
    Code2,
    FileCode2,
    Hand,
    Minus,
    Plus,
    RotateCcw,
} from 'lucide-react';
import Image from 'next/image';
import {
    KeyboardEvent,
    PointerEvent,
    useRef,
    useState,
} from 'react';

interface Props {
    projects: IProject[];
}

const ProjectCanvas = ({ projects }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const drag = useRef<{
        pointerId: number;
        startX: number;
        startY: number;
        panX: number;
        panY: number;
    } | null>(null);

    const activeProject = projects[activeIndex];
    if (!activeProject) return null;

    const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
        if (
            event.button !== 0 ||
            (event.target instanceof Element && event.target.closest('button'))
        ) {
            return;
        }

        setIsPanning(true);
        drag.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            panX: pan.x,
            panY: pan.y,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (drag.current?.pointerId !== event.pointerId) return;
        setPan({
            x: drag.current.panX + event.clientX - drag.current.startX,
            y: drag.current.panY + event.clientY - drag.current.startY,
        });
    };

    const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
        if (drag.current?.pointerId !== event.pointerId) return;
        drag.current = null;
        setIsPanning(false);
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
    };

    const onCanvasKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const offsets: Record<string, { x: number; y: number }> = {
            ArrowUp: { x: 0, y: 36 },
            ArrowDown: { x: 0, y: -36 },
            ArrowLeft: { x: 36, y: 0 },
            ArrowRight: { x: -36, y: 0 },
        };
        const offset = offsets[event.key];
        if (!offset) return;
        event.preventDefault();
        setPan((current) => ({
            x: current.x + offset.x,
            y: current.y + offset.y,
        }));
    };

    const changeZoom = (amount: number) =>
        setZoom((current) =>
            Math.min(1.25, Math.max(0.65, Math.round((current + amount) * 100) / 100)),
        );

    const resetCanvas = () => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
    };

    return (
        <div className="figma-workspace">
            <header className="figma-toolbar">
                <div className="flex items-center gap-2">
                    <span className="grid size-7 place-items-center rounded-md bg-primary/10 text-primary">
                        <Code2 size={15} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-medium">
                        selected-work.fig
                    </span>
                    <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
                        VIEW ONLY
                    </span>
                </div>
                <p className="hidden items-center gap-2 font-mono text-[10px] text-muted-foreground sm:flex">
                    <Hand size={13} aria-hidden="true" />
                    Drag canvas to pan
                </p>
            </header>

            <div className="figma-layout">
                <aside className="figma-layers" aria-label="Project layers">
                    <p className="figma-panel-title">Layers</p>
                    <ul>
                        {projects.map((project, index) => (
                            <li key={project.slug}>
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-current={
                                        index === activeIndex ? 'true' : undefined
                                    }
                                    className={`figma-layer ${index === activeIndex ? 'figma-layer--active' : ''}`}
                                >
                                    <FileCode2
                                        size={13}
                                        aria-hidden="true"
                                    />
                                    <span className="truncate">
                                        {project.slug}.frame
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="figma-layer-hint">
                        Select a frame to inspect its build.
                    </p>
                </aside>

                <div
                    className="figma-canvas"
                    role="region"
                    aria-label="Project canvas. Drag to pan, use arrow keys to move the canvas."
                    tabIndex={0}
                    onKeyDown={onCanvasKeyDown}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                    data-panning={isPanning}
                >
                    <div
                        className="figma-board"
                        style={{
                            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                        }}
                    >
                        {projects.map((project, index) => (
                            <button
                                type="button"
                                key={project.slug}
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={index === activeIndex}
                                className={`figma-artboard ${index === activeIndex ? 'figma-artboard--active' : ''}`}
                            >
                                <span className="figma-artboard__preview">
                                    <Image
                                        src={project.thumbnail}
                                        alt={`${project.title} project preview`}
                                        fill
                                        sizes="(max-width: 768px) 80vw, 360px"
                                        className="object-cover object-top"
                                        draggable={false}
                                    />
                                    <span className="figma-artboard__index">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </span>
                                <span className="figma-artboard__caption">
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm font-medium text-foreground">
                                            {project.title}
                                        </span>
                                        <span className="mt-1 block truncate font-mono text-[10px] text-muted-foreground">
                                            {project.category}
                                        </span>
                                    </span>
                                    <span className="font-mono text-[10px] text-muted-foreground">
                                        {project.year}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>
                    <div
                        className="figma-zoom"
                        aria-label="Canvas zoom controls"
                    >
                        <button
                            type="button"
                            onClick={() => changeZoom(-0.1)}
                            aria-label="Zoom out"
                            disabled={zoom <= 0.65}
                        >
                            <Minus size={14} aria-hidden="true" />
                        </button>
                        <span aria-live="polite">
                            {Math.round(zoom * 100)}%
                        </span>
                        <button
                            type="button"
                            onClick={() => changeZoom(0.1)}
                            aria-label="Zoom in"
                            disabled={zoom >= 1.25}
                        >
                            <Plus size={14} aria-hidden="true" />
                        </button>
                        <span className="figma-zoom__divider" />
                        <button
                            type="button"
                            onClick={resetCanvas}
                            aria-label="Reset canvas view"
                            title="Reset canvas view"
                        >
                            <RotateCcw size={13} aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <aside className="figma-inspector" aria-live="polite">
                    <p className="figma-panel-title">Code inspector</p>
                    <div className="figma-inspector__file">
                        <FileCode2
                            size={14}
                            className="text-primary"
                            aria-hidden="true"
                        />
                        <span>{activeProject.slug}.tsx</span>
                    </div>

                    <p className="mt-4 text-lg font-semibold leading-tight">
                        {activeProject.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {activeProject.summary}
                    </p>

                    <dl className="mt-5 space-y-3 border-t border-border pt-4 font-mono text-[10px]">
                        <div className="flex justify-between gap-3">
                            <dt className="text-muted-foreground">role</dt>
                            <dd className="text-right text-foreground">
                                {getRoleTitle(activeProject.role)}
                            </dd>
                        </div>
                        <div className="flex justify-between gap-3">
                            <dt className="text-muted-foreground">year</dt>
                            <dd className="text-foreground">
                                {activeProject.year}
                            </dd>
                        </div>
                        <div className="flex justify-between gap-3">
                            <dt className="text-muted-foreground">status</dt>
                            <dd className="text-primary">
                                {activeProject.status || 'Shipped'}
                            </dd>
                        </div>
                    </dl>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {activeProject.techStack.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="rounded border border-border bg-background px-2 py-1 font-mono text-[9px] text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={`/projects/${activeProject.slug}`}
                        className="mt-6 inline-flex h-10 w-full items-center justify-between rounded-lg border border-primary/30 bg-primary/10 px-3 font-mono text-xs font-medium text-primary transition-colors hover:bg-primary/15"
                    >
                        Open case study
                        <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                </aside>
            </div>
            <footer className="figma-statusbar">
                <span>{projects.length} frames</span>
                <span className="hidden sm:inline">Prototype links enabled</span>
                <span>{Math.round(zoom * 100)}%</span>
            </footer>
        </div>
    );
};

export default ProjectCanvas;
