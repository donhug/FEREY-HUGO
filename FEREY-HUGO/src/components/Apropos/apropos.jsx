import './appropos.css'
import Tag from "../../components/Tag/tag.jsx"

function Apropos() {
    const skills = ["HTML/CSS", "JavaScript", "React", "GitHub", "Figma", "Accessibilité"]
    return (
        <section className="about">
            <div className="about-title">
                <p>Qui suis-je</p>
                <h2>À Propos</h2>
            </div>
            <div className="about-main">
                <div className="about-txt">
                    <p>
                        Je m’appelle <span className="name">Hugo</span>, actuellement en formation
                        d’<span className="forma">intégrateur web</span>  chez OpenClassrooms après une
                        reconversion via France Travail.
                    </p>
                    <p>
                        Passionné par l’informatique depuis longtemps, je me suis orienté vers le développement web,
                        principalement côté front-end avec HTML,
                        CSS, JavaScript et React.
                    </p>
                    <p>
                        Curieux et motivé, je cherche à renforcer mes compétences à travers des projets concrets.
                    </p>

                </div>
                <div className="about-tag">
                    {skills.map((skill, index) =>(
                        <Tag
                            key={index}
                            txt={skill}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}
export default Apropos