export default function ContactSection() {
    return (
        <section>
            <div className="section-header">
                <span className="section-label">05 — Contact & Booking</span>
            </div>
            <div className="contact-grid">
                <div>
                    <span className="section-label" style={{ fontSize: '0.6rem' }}>Management</span>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                        Fiona Mbaya
                    </p>
                    <a href="tel:+254725768747" className="contact-link" style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.75rem' }}>
                        +254 725 768 747
                    </a>
                    <a href="mailto:djscalarbane@gmail.com" className="contact-link" style={{ fontSize: '1.2rem' }}>
                        djscalarbane@gmail.com
                    </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <span className="section-label" style={{ fontSize: '0.6rem' }}>Artist</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a
                                href="https://instagram.com/scalarbane"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                                style={{ fontSize: '1.2rem' }}
                            >
                                instagram.com/scalarbane
                            </a>
                            <a
                                href="https://youtube.com/scalarbane"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                                style={{ fontSize: '1.2rem' }}
                            >
                                youtube.com/scalarbane
                            </a>
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <span className="section-label" style={{ fontSize: '0.6rem' }}>Availability</span>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                                Available for bookings across Nairobi and selected events.
                            </p>
                        </div>
                    </div>

                    <footer style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', fontSize: '0.6rem', color: '#444' }}>
                        © 2025 SCALARBANE AUDIO.
                    </footer>
                </div>
            </div>
        </section>
    );
}
