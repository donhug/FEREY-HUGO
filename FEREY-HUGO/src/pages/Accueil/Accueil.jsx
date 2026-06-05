import './Accueil.css'
import projets from '../../data/projet.json'
import technos from '../../data/technologie.json'
import Hero from "../../components/Hero/hero.jsx";
import Card from "../../components/Card/card.jsx";
import Competence from "../../components/Competence/competence.jsx";
import Tag from "../../components/Tag/tag.jsx"

function Accueil() {
    const skills = ["HTML/CSS", "JavaScript", "React", "Git", "Figma", "Accessibilité"]
    return (
        <>
            <section className="hero">
                <Hero/>
            </section>

            <section className="content">
                <div className="content-title">
                    <p>ce que j'ai réalisé</p>
                    <h2>PROJETS</h2>
                </div>
                {projets.map((projet) => (
                    <Card
                        key={projet.id}
                        img={projet.thumbnail}
                        title={projet.title}
                        description={projet.description.short}
                        tags={projet.tags}
                        github={projet.github}
                        live={projet.live}
                    />
                ))}
            </section>
            <section className="technos">
                <div className="technos-title">
                    <p>technologies acquises</p>
                    <h2>Compétences</h2>
                </div>
                <div className="technos-banner">
                    <div className="technos-tags">
                        {[...technos, ...technos].map((technos, index) => (
                            <Competence
                                key={technos.id}
                                label={technos.label}
                                icon={technos.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about-title">
                    <p>technologies acquises</p>
                    <h2>Compétences</h2>
                </div>
                <div className="about-main">
                    <div className="about-txt">

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
        </>
    )
}

export default Accueil;