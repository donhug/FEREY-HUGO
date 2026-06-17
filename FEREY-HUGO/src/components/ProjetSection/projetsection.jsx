import './projetsection.css'

function Projetsection(props) {
    return (
        <>
            <div className="projetsection">
                <h3>{props.titre}</h3>

                <div className="projetsection-txt">
                    <p>
                        {props.texte}
                    </p>
                </div>
            </div>

        </>
    )
}
export default Projetsection