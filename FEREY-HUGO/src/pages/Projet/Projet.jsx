import './Projet.css'
import {useParams} from "react-router-dom"
import projets from '../../data/projet.json'
import Carrousel from "../../components/Carrousel/carrousel.jsx";
import Tag from "../../components/Tag/tag.jsx";
import Erreur from "../Erreur/Erreur.jsx";
import Projetsection from "../../components/ProjetSection/projetsection.jsx"
import ProjetText from "../../components/ProjetTexte/projetText.jsx"
import ProjetGit from "../../components/ProjetGit/projetGit.jsx";

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
                            <ProjetText projet={projet} />
                            <Projetsection titre="Technologies utilisées">
                                <div className="projet-tags">
                                    {projet.tags.map((tag, index) => (
                                        <Tag
                                            key={index}
                                            txt={tag}
                                        />
                                    ))}
                                </div>
                            </Projetsection>
                            <ProjetGit projet={projet} />
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Projet;
