import './clink.css'

function Clink(props){
    return (
        <div className="main">
            <a href={props.link} target="_blank" rel="noreferrer">
                <i className={props.icon}></i>
                <p>
                {props.name}
                </p>
            </a>
        </div>
    )
}
export default Clink