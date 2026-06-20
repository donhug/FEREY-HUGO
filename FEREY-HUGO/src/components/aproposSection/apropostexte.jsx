import './apropostexte.css'

function Apropostxt(props) {
    return (
        <div className="apropossection">
            <h3>{props.titre}</h3>

            <div className="apropossection-txt">
                {props.texte}
            </div>
        </div>
    )
}
export default Apropostxt