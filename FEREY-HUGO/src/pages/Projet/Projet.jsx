import './Projet.css'
import {useParams} from "react-router-dom"
import projets from '../../data/projet.json'
import Carrousel from "../../components/Carrousel/carrousel.jsx";
import Tag from "../../components/Tag/tag.jsx";
import Erreur from "../Erreur/Erreur.jsx";
import Projetsection from "../../components/ProjetSection/projetsection.jsx"

function Projet(){
    const {id} = useParams();
    const projet = projets.find((projet) => projet.id === id)
    if (projet === undefined) return ( <Erreur/> )

    return (
        <>
            <section className="projet-main">
                <div className="section-inner">
                    <div className="projet-titre">
                        <h1>{projet.title}</h1>
                    </div>
                    <div className="projet-desktop">
                        <div className="projet-carrousel">
                            <Carrousel
                                images={projet.images}
                            />
                        </div>

                        <div className="projet-info">
                            <div className="projet-tags">
                                {projet.tags.map((tag, index) => (
                                    <Tag
                                        key={index}
                                        txt={tag}
                                    />
                                ))}
                            </div>

                            <Projetsection titre="Contexte" texte={projet.description.contexte} />
                            <Projetsection titre="Objectifs" texte={projet.description.objectifs} />
                            <Projetsection titre="Comptétences développées" texte={projet.description.competences} />
                            <Projetsection titre="Résultats" texte={projet.description.resultats} />
                            <Projetsection titre="Perspective d'amélioration" texte={projet.description.amelioration} />

                            <div className="projet-git">
                                <a href={projet.github} target="_blank" rel="noreferrer" className="github-hover">
                                    <i className="fa-brands fa-github"></i>
                                    github
                                </a>

                                {projet.live && (
                                    <a href={projet.live} target="_blank" rel="noreferrer" className="github-hover">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
export default Projet;
