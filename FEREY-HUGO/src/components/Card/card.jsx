import './card.css'
import {Link} from 'react-router-dom'

function Card(props) {
    return (
        <div className="card">
            <Link to={`/Projet/${props.id}`} className="card-main">
                <div className="card-img">
                    <img src={props.img} alt={`image de couverture du projet ${props.title}`} />
                </div>

                <div className="card-info">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>

                    <ul>
                        {props.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default Card;