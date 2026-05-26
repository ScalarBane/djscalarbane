export default function Navbar({ onBookings }) {
    return (
        <nav>
            <div className="logo">
                <img
                    src="/Images/logo.jpeg"
                    alt="SCALARBANE Logo"
                    style={{ height: '2rem', width: 'auto' }}
                />
            </div>
            <a
                href="#contact"
                className="nav-pill"
                onClick={(e) => {
                    e.preventDefault();
                    onBookings();
                }}
            >
                Bookings
            </a>
        </nav>
    );
}
