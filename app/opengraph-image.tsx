import { ImageResponse } from 'next/og';
import { GENERAL_INFO } from '@/lib/data';
import { SHARE_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

export const alt = SHARE_IMAGE.alt;
export const size = { width: SHARE_IMAGE.width, height: SHARE_IMAGE.height };
export const contentType = 'image/png';

// The site's night theme (see app/globals.css).
const BG = '#080d17';
const PANEL = '#0e1420';
const BORDER = '#202b3c';
const TEXT = '#e7edf5';
const MUTED = '#8a9bb8';
const CYAN = '#1fd5f9';
const KEYWORD = '#c792ea';
const STRING = '#c3e88d';
const FUNC = '#82aaff';

const STACK = ['React', 'Next.js', 'Vue', 'React Native', 'Node.js', 'PostgreSQL'];
const TABS = ['README.md', 'about.ts', 'stack.json', 'contact.sh'];

const Line = ({ n, children }: { n: number; children?: React.ReactNode }) => (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: 44 }}>
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: 70,
                paddingRight: 28,
                fontSize: 20,
                color: '#4a5870',
            }}
        >
            {n}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
    </div>
);

/** The share image: the site's README.md tab, as it looks in the editor. */
export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: BG,
                    color: TEXT,
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Title bar */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: 60,
                        padding: '0 28px',
                        backgroundColor: PANEL,
                        borderBottom: `2px solid ${BORDER}`,
                    }}
                >
                    <div style={{ display: 'flex', fontSize: 26, fontWeight: 800 }}>
                        VA<span style={{ color: CYAN }}>.</span>
                    </div>
                    <div style={{ display: 'flex', fontSize: 22, color: MUTED }}>
                        {SITE_URL.replace(/^https?:\/\//, '')}
                    </div>
                </div>

                {/* Tabs */}
                <div
                    style={{
                        display: 'flex',
                        height: 56,
                        backgroundColor: PANEL,
                        borderBottom: `2px solid ${BORDER}`,
                    }}
                >
                    {TABS.map((tab, index) => (
                        <div
                            key={tab}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 30px',
                                fontSize: 22,
                                color: index === 0 ? TEXT : MUTED,
                                backgroundColor: index === 0 ? BG : PANEL,
                                borderTop: `4px solid ${index === 0 ? CYAN : PANEL}`,
                                borderRight: `2px solid ${BORDER}`,
                            }}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* README.md */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Line n={1}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                fontSize: 92,
                                fontWeight: 900,
                                letterSpacing: -3,
                                lineHeight: 1.15,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 54,
                                    fontWeight: 400,
                                    color: '#4a5870',
                                    marginRight: 22,
                                    letterSpacing: 0,
                                }}
                            >
                                #
                            </span>
                            {SITE_NAME}
                        </div>
                    </Line>
                    <Line n={2}>
                        <div style={{ display: 'flex', fontSize: 34, color: CYAN }}>
                            <span style={{ color: '#4a5870', marginRight: 16 }}>
                                &gt;
                            </span>
                            {GENERAL_INFO.role} · {GENERAL_INFO.location}
                        </div>
                    </Line>
                    <Line n={3} />
                    <Line n={4}>
                        <div style={{ display: 'flex', fontSize: 28, color: TEXT }}>
                            Building fast, scalable, user-focused products across
                            web, mobile, and AI.
                        </div>
                    </Line>
                    <Line n={5} />
                    <Line n={6}>
                        <div style={{ display: 'flex', fontSize: 24 }}>
                            <span style={{ color: KEYWORD, marginRight: 10 }}>
                                const
                            </span>
                            <span style={{ color: FUNC, marginRight: 10 }}>
                                stack
                            </span>
                            <span style={{ marginRight: 10 }}>= [</span>
                            {STACK.map((item, index) => (
                                <span key={item} style={{ display: 'flex' }}>
                                    <span style={{ color: STRING }}>
                                        &apos;{item}&apos;
                                    </span>
                                    {index < STACK.length - 1 && (
                                        <span style={{ marginRight: 8 }}>,</span>
                                    )}
                                </span>
                            ))}
                            <span>];</span>
                        </div>
                    </Line>
                </div>

                {/* Status bar */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: 44,
                        padding: '0 28px',
                        backgroundColor: CYAN,
                        color: '#0a0a0a',
                        fontSize: 20,
                        fontWeight: 600,
                    }}
                >
                    <div style={{ display: 'flex' }}>main</div>
                    <div style={{ display: 'flex' }}>Markdown · UTF-8</div>
                </div>
            </div>
        ),
        { ...size },
    );
}
