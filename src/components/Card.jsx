import person1 from "../assets/person1.png"
import '../styles/Card.css';

const Card = (props) => {

    return (
        <div className="card">
            <div className="top">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="bottom">
                <p>{props.name}</p>
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default Card;