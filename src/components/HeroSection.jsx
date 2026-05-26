export default function HeroSection() {
    return (
        <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url(/Images/IMG_8568.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) brightness(0.5)',
                    zIndex: -1,
                }}
            />

            <div className="hero-content">
                <div className="hero-bottom-left">
                    <h1 className="display-title hero-title">
                        <span>Scalar</span>
                        <span>Bane</span>
                    </h1>
                    <div className="hero-tagline">
                        Afrotech // Trance
                    </div>
                </div>

                <div className="hero-bottom-right">
                    <p className="hero-quote">
                        "I conduct the music, You complete the circuit"
                    </p>
                </div>
            </div>
        </section>
    );
}
