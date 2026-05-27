import './Accueil.css'
import projets from '../../data/projet.json'
import Hero from "../../components/Hero/hero.jsx";
import Card from "../../components/Card/card.jsx";

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
                {projets.map((projet, index) => (
                    <Card
                        key={projet.id}
                        className={index % 2 === 0 ? 'pair' : 'impair'}
                        img={projet.thumbnail}
                        title={projet.title}
                        description={projet.description.short}
                        tags={projet.tags}
                        github={projet.github}
                        live={projet.live}
                    />
                ))}
            </section>
        </>
    )
}

export default Accueil;