import './card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt=""/>
            </div>
            <div className="card-info">
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
                <ul>
                    {props.tags.map((tags, index) => (
                        <li key={index}>{tags}</li>
                    ))}
                </ul>
                <div className="card-git">
                    <a href={props.github} target="_blank">
                        <i className="fa-brands fa-github"></i>
                         github
                    </a>
                    {props.live &&(
                        <a href={props.live}>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            live
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;