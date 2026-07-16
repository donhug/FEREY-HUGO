import Projetsection from "../ProjetSection/projetsection.jsx";

function ProjetText ({projet}){
    const sections =[
        {titre:"Contexte", key:"contexte" },
        {titre:"Objectifs", key:"objectifs" },
        {titre:"Comptétences développées", key:"competences" },
        {titre:"Résultats", key:"resultats" },
        {titre:"Perspective d'amélioration", key:"amelioration" }
    ]

    return(
        <>
            {sections.map((section) => (
                <Projetsection key={section.key} titre={section.titre}>
                    <p>{projet.description[section.key]}</p>
                </Projetsection>
            ))}
        </>

    )
}
export default ProjetText;
