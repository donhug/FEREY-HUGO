import './Projet.css'
import {useParams} from "react-router-dom"
import projets from '../../data/projet.json'
import Carrousel from "../../components/Carrousel/carrousel.jsx";
import Tag from "../../components/Tag/tag.jsx";

function Projet(){
    const {id} = useParams();
    const projet = projets.find((projet) => projet.id === id)
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
                            <div className="projet-description">
                                <p>
                                    {projet.description.long}
                                </p>
                            </div>
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