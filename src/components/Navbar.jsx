import '../styles/Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">
                <h1 className="logo">ProfileApp</h1>
            
                <nav>
                    <ul  classname="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#Cards">Cards</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;