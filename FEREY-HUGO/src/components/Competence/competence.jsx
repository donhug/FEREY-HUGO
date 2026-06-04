import './competence.css'

function Competence(props) {
    return (
        <div className="competence">
            <div className="competence-img">
                <img src={props.icon} alt=""/>
            </div>
            <div className="competence-title">
                <h3>
                    {props.label}
                </h3>
            </div>

        </div>
    )
}
export default Competence