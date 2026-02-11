import styles from './Navbar.module.css';
import { Link } from "react-router-dom"

function Navbar({ toggleTheme, theme }) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>ProfileApp</h1>

                <nav>
                    <ul className={styles.links}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/fetched-profiles">Cards</Link></li>
                        <li><Link to="/add-profile">Add Profile</Link></li>
                    </ul>
                </nav>

                <button className={styles.toggle} onClick={toggleTheme}>
                    {theme ==="light" ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </header>
    );
}

export default Navbar;