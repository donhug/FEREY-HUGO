import './Accueil.css'

import Hero from "../../components/Hero/hero.jsx";
import Projets from "../../components/Projets/projets.jsx";
import Technos from "../../components/technos/technos.jsx";
import Apropos from "../../components/Apropos/apropos.jsx";
import Contact from "../../components/Contact/contact.jsx";

function Accueil() {

    return (
        <>
            <Hero/>
            <Projets/>
            <Technos/>
            <Apropos/>
            <Contact/>
        </>
    )
}

export default Accueil;