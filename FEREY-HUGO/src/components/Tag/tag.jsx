import './tag.css'

function Tag(props) {
    return (
        <div className="tag">
            <p>{props.txt}</p>
        </div>
    )
}
export default Tag