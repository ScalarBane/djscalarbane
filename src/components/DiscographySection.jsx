import TrackRow from './TrackRow';

const tracks = [
    { number: '01', title: 'Midnight in Lagos', genre: 'Afrotech / 124 BPM' },
    { number: '02', title: 'Cybernetic Soul', genre: 'Trance / 128 BPM' },
    { number: '03', title: 'Algorithm of God', genre: 'Trance / 132 BPM' },
    { number: '04', title: 'Sub-Saharan Echo', genre: 'Afrotech / 122 BPM' },
];

export default function DiscographySection() {
    return (
        <section>
            <div className="section-header">
                <span className="section-label">02 — Discography</span>
            </div>
            <div className="track-list">
                {tracks.map((t) => (
                    <TrackRow key={t.number} {...t} />
                ))}
            </div>
        </section>
    );
}
