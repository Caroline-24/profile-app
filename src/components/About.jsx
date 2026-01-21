import '../styles/About.css'

function About() {
    const title = "Profile App"
    const section1 = "About"
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

    return (
        <section id="about" className="about">
            <h2>{title}</h2>
            <h3>{section1}</h3>
            <p>{description}</p>
        </section>
    )
}

export default About;