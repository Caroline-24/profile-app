import person1 from "../assets/person1.png"
import '../styles/Card.css';

function Card1() {
    const name = "Sam"
    const role = "Web Developer"

    return (
        <div className="card">
            <img src={person1} alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default Card1;