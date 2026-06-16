import './technos.css'
import technos from '../../data/technologie.json'
import Competence from "../../components/Competence/competence.jsx";

function Technos() {
    return (
        <section className="section-technos" id="section-technos">
            <div className="section-inner">
                <div className="technos-title">
                    <p>technologies acquises</p>
                    <h2>Compétences</h2>
                </div>
                <div className="technos-banner">
                    <div className="technos-tags">
                        {[...technos, ...technos].map((technos, index) => (
                            <Competence
                                key={`${technos.id}-${index}`}
                                label={technos.label}
                                icon={technos.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Technos;