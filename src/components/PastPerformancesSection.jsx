const venues = [
    { name: 'Koda', city: 'Nairobi', ig: 'https://www.instagram.com/kodanairobi' },
    { name: 'Muze', city: 'Nairobi', ig: 'https://www.instagram.com/muzeclub' },
    { name: 'Soho', city: 'Nairobi', ig: 'https://www.instagram.com/soho_254' },
    { name: 'Alchemist', city: 'Nairobi', ig: 'https://www.instagram.com/alchemist254' },
    { name: 'Masshouse', city: 'Nairobi', ig: 'https://www.instagram.com/masshouse_live' },
];

export default function PastPerformancesSection() {
    return (
        <section>
            <div className="section-header">
                <span className="section-label">04 — Past Performances</span>
            </div>
            <div>
                {venues.map((v) => (
                    <div key={v.name} className="tour-row">
                        <span className="venue-name">
                            {v.name}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                {v.city}
                            </span>
                            <a
                                href={v.ig}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'color 0.3s, border-color 0.3s' }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.borderBottomColor = 'var(--accent-cyan)'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
                            >
                                ↗ Instagram
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
