import './button.css'

function Button(props) {
    return (
        <button className="btn">{props.txt}</button>
    )
}

export default Button