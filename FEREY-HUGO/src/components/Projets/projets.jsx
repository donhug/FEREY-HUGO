import './projet.css'
import projets from '../../data/projet.json'
import Card from "../../components/Card/card.jsx";

function Projets() {
    return (
        <section className="content" id="projets">
            <div className="content-title">
                <p>ce que j'ai réalisé</p>
                <h2>PROJETS</h2>
            </div>
            {projets.map((projet) => (
                <Card
                    id={projet.id}
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
    )
}

export default Projets;