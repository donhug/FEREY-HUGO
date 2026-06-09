import './card.css'
import {Link} from 'react-router-dom'

function Card(props) {
    return (
        <div className="card">
            <Link to={`/Projet/${props.id}`} className="card-main">
                <div className="card-img">
                    <img src={props.img} alt="" />
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

            <div className="card-git">
                <a href={props.github} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                    github
                </a>

                {props.live && (
                    <a href={props.live} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        live
                    </a>
                )}
            </div>
        </div>
    )
}

export default Card;