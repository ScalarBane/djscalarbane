const images = [
    '/Images/IMG_8546.jpg',
    '/Images/IMG_8565.jpg',
    '/Images/IMG_8568.jpg',
];

export default function GallerySection() {
    return (
        <section>
            <div className="section-header">
                <span className="section-label">03 — Visual Gallery</span>
            </div>
            <div className="gallery-grid">
                {images.map((src, i) => (
                    <div key={i}>
                        <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}
