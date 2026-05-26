export default function TourRow({ date, venue, city }) {
    return (
        <div className="tour-row">
            <span className="tour-date">{date}</span>
            <span style={{ flexGrow: 1, color: 'var(--text-secondary)' }}>
                {venue}
            </span>
            <span>{city}</span>
        </div>
    );
}
