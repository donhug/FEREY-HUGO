import './Projet.css'
import {useParams} from "react-router-dom"
import projets from '../../data/projet.json'
import Carrousel from "../../components/Carrousel/carrousel.jsx";

function Projet(){
    const {id} = useParams();
    const projet = projets.find((projet) => projet.id === id)
    return (
        <>
            <Carrousel
                images={projet.images}
            />
        </>
    )
}
export default Projet;