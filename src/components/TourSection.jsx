import TourRow from './TourRow';

const dates = [
    { date: 'OCT 14', venue: 'Fabric // Room 2', city: 'London, UK' },
    { date: 'NOV 02', venue: 'Berghain // Panorama Bar', city: 'Berlin, DE' },
    { date: 'DEC 10', venue: 'Watergate', city: 'Berlin, DE' },
];

export default function TourSection() {
    return (
        <section>
            <div className="section-header">
                <span className="section-label">04 — Tour Dates</span>
            </div>
            <div className="tour-list">
                {dates.map((d) => (
                    <TourRow key={d.date} {...d} />
                ))}
            </div>
        </section>
    );
}
