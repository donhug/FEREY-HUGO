import './projetsection.css'

function Projetsection({titre, children}) {
    return (
            <div className="projetsection">
                <h2>{titre}</h2>

                <div className="projetsection-txt">
                    {children}
                </div>
            </div>
    )
}
export default Projetsection