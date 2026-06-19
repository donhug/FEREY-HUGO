import './projetsection.css'

function Projetsection({titre, children}) {
    return (
            <div className="projetsection">
                <h3>{titre}</h3>

                <div className="projetsection-txt">
                    {children}
                </div>
            </div>
    )
}
export default Projetsection