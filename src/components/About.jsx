import styles from './About.module.css';

function About({ theme }) {
    return (
        <section className={styles.about}>
            <h2>Profile App</h2>
            <h3>About</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </section>
    );
}

export default About;