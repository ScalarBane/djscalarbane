const labels = ['Home', 'Bio', 'Video', 'Gallery', 'Live', 'Contact'];

export default function VerticalNav({ currentPanel, onNavigate }) {
    return (
        <div className="vertical-nav">
            {labels.map((label, i) => (
                <button
                    key={label}
                    className={`nav-dot${i === currentPanel ? ' active' : ''}`}
                    data-label={label}
                    onClick={() => onNavigate(i)}
                    aria-label={label}
                />
            ))}
        </div>
    );
}
