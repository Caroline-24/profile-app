import person2 from "../assets/person2.png"
import '../styles/Card.css';

function Card2() {
    const name = "Caroline"
    const role = "Web Developer"

    return (
        <div className="card">
            <img src={person2} alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default Card2;