import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const alt = `${SITE_NAME} - Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const YELLOW = '#ffd60a';
const BLUE = '#1a80ff';
const INK = '#0a0a0a';
const PAPER = '#fafafa';

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 64,
                    background:
                        'radial-gradient(circle at 90% 0%, rgba(26,128,255,0.35) 0%, rgba(11,15,26,1) 55%)',
                    backgroundColor: '#0b0f1a',
                    color: PAPER,
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            padding: '10px 18px',
                            background: YELLOW,
                            color: INK,
                            border: `4px solid ${INK}`,
                            boxShadow: `6px 6px 0 ${PAPER}`,
                            fontSize: 26,
                            fontWeight: 800,
                            letterSpacing: 2,
                            textTransform: 'uppercase',
                        }}
                    >
                        Portfolio
                    </div>
                    <div style={{ fontSize: 26, color: '#a3a9b8' }}>
                        {SITE_URL.replace(/^https?:\/\//, '')}
                    </div>
                </div>

                <div
                    style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
                >
                    <div
                        style={{
                            fontSize: 108,
                            fontWeight: 900,
                            lineHeight: 1,
                            letterSpacing: -3,
                            textShadow: `7px 7px 0 ${YELLOW}`,
                        }}
                    >
                        {SITE_NAME}
                    </div>
                    <div
                        style={{
                            fontSize: 44,
                            fontWeight: 800,
                            color: YELLOW,
                            textShadow: `4px 4px 0 ${BLUE}`,
                        }}
                    >
                        Software Engineer
                    </div>
                    <div
                        style={{
                            fontSize: 28,
                            color: '#a3a9b8',
                            maxWidth: 900,
                            lineHeight: 1.4,
                        }}
                    >
                        Building fast, scalable, user-focused products across
                        web, mobile, and AI.
                    </div>
                </div>

                <div style={{ display: 'flex', fontSize: 24, color: '#a3a9b8' }}>
                    React / Next.js / Vue / Nuxt / React Native / Node.js /
                    PostgreSQL
                </div>
            </div>
        ),
        { ...size },
    );
}
