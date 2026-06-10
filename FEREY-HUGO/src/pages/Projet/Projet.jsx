import './Projet.css'
import {useParams} from "react-router-dom"
import projets from '../../data/projet.json'
import Carrousel from "../../components/Carrousel/carrousel.jsx";

function Projet(){
    const {id} = useParams();
    const projet = projets.find((projet) => projet.id === id)
    return (
        <>
            <div className="main">
                <div className="title">
                    <h1>{projet.title}</h1>
                </div>

                <Carrousel
                    images={projet.images}
                />
            </div>
        </>
    )
}
export default Projet;