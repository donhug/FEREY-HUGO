import './Accueil.css'
import projets from '../../data/projet.json'
import technos from '../../data/technologie.json'
import Hero from "../../components/Hero/hero.jsx";
import Card from "../../components/Card/card.jsx";
import Competence from "../../components/Competence/competence.jsx";

function Accueil() {
    return (
        <>
            <section className="hero">
                <Hero/>
            </section>

            <section className="content">
                <div className="content-title">
                    <p>ce que j'ai réaliser</p>
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
                {technos.map((technos) => (
                    <Competence
                        key={technos.id}
                        label={technos.label}
                        icon={technos.icon}
                    />
                ))}
            </section>
        </>
    )
}

export default Accueil;