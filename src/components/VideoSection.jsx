import { useState } from 'react';

const sets = [
    { id: 'TmW8V6cKw80', label: 'Afrotech Set', url: 'https://www.youtube.com/watch?v=TmW8V6cKw80' },
    { id: '9O_G4kYyX2U', label: 'Trance Set', url: 'https://www.youtube.com/watch?v=9O_G4kYyX2U' },
];

const reels = [
    { id: 'DXzgy4MMJJ5', label: 'Live Reel 01' },
    { id: 'DU0N3r_DCN0', label: 'Live Reel 02' },
];

function YouTubeCard({ id, label, url }) {
    const [playing, setPlaying] = useState(false);
    const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

    if (playing) {
        return (
            <div>
                <span className="section-label" style={{ fontSize: '0.6rem', marginBottom: '0.75rem', display: 'block' }}>
                    {label}
                </span>
                <div className="video-embed-wrapper">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
                        title={label}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
        );
    }

    return (
        <div>
            <span className="section-label" style={{ fontSize: '0.6rem', marginBottom: '0.75rem', display: 'block' }}>
                {label}
            </span>
            <div className="video-thumb" onClick={() => setPlaying(true)}>
                <img src={thumb} alt={label} />
                <div className="video-thumb-overlay">
                    <div className="play-btn" />
                </div>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="watch-on-yt">
                ↗ Watch on YouTube
            </a>
        </div>
    );
}

export default function VideoSection() {
    const [tab, setTab] = useState('videos');

    return (
        <section style={{ height: 'auto', minHeight: '100vh', overflow: 'visible' }}>
            <div className="section-header">
                <span className="section-label">02 — Live Sets</span>
            </div>

            <div className="tab-nav">
                <button className={`tab-btn${tab === 'videos' ? ' active' : ''}`} onClick={() => setTab('videos')}>
                    Videos
                </button>
                <button className={`tab-btn${tab === 'reels' ? ' active' : ''}`} onClick={() => setTab('reels')}>
                    Reels
                </button>
            </div>

            {tab === 'videos' && (
                <div className="video-grid">
                    {sets.map((v) => <YouTubeCard key={v.id} {...v} />)}
                </div>
            )}

            {tab === 'reels' && (
                <div className="reels-row">
                    {reels.map((r) => (
                        <div key={r.id}>
                            <span className="section-label" style={{ fontSize: '0.6rem', marginBottom: '0.75rem', display: 'block' }}>
                                {r.label}
                            </span>
                            <div className="reel-embed-wrapper">
                                <iframe
                                    src={`https://www.instagram.com/reel/${r.id}/embed/`}
                                    title={r.label}
                                    allowFullScreen
                                    scrolling="no"
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
