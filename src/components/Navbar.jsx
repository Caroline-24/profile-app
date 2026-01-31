import styles from './Navbar.module.css';

function Navbar({ toggleTheme, theme }) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>ProfileApp</h1>

                <nav>
                    <ul className={styles.links}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#profiles">Cards</a></li>
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