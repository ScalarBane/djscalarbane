export default function TrackRow({ number, title, genre }) {
    return (
        <div className="track-row">
            <span style={{ color: 'var(--text-secondary)' }}>{number}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
                {title}
            </span>
            <span
                style={{
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                }}
            >
                {genre}
            </span>
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid white',
                    borderRadius: '50%',
                }}
            />
        </div>
    );
}
