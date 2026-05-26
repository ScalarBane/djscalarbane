export default function BioSection() {
    return (
        <section>
            <div className="section-header">
                <span className="section-label">01 — Biography</span>
                <h2 style={{ fontSize: '2.5rem', maxWidth: '1000px', lineHeight: 1.4 }}>
                    One set. Multiple electronic worlds. All high energy.
                </h2>
            </div>
            <div className="bio-grid">
                <p>
                    Scalarbane is a DJ/producer built for crowds that want more than one
                    thing from a night out. His Afrotech sets are unrelenting — full-throttle
                    from the first beat, engineered to keep dancefloors locked in. His Trance
                    sets take the opposite path: a deliberate build into pure euphoria,
                    carrying audiences through sounds they've never heard but can't stop
                    moving to. In a single night, he takes the floor across multiple
                    electronic worlds without ever losing it. Having performed at large-scale
                    club events across Nairobi, Scalarbane consistently delivers something
                    the crowd didn't expect — but came back for.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src="/Images/logo.jpeg"
                        alt="Scalarbane"
                        style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }}
                    />
                </div>
            </div>
        </section>
    );
}
