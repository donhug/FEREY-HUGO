import './appropos.css'
import Tag from "../../components/Tag/tag.jsx"
import Apropostxt from "../aproposSection/apropostexte.jsx";

function Apropos() {
    return (
        <section className="section-about" id="section-about">
            <div className="section-inner">
                <div className="about-title">
                    <p>Qui suis-je</p>
                    <h2>À Propos</h2>
                </div>
                <div className="about-main">
                    <Apropostxt
                        titre="Qui suis-je"
                        texte=<>Bonjour, je suis <span className="fort">Hugo Ferey</span>, intégrateur web en formation, curieux d'aller toujours
                        plus loin vers le développement front-end.</>
                    />
                    <Apropostxt
                        titre="Mon parcours"
                        texte="Après un Bac Pro Systèmes Numériques, je visais initialement un BTS SIO. Mon parcours a pris une autre direction, et c'est via France Travail, en partenariat avec le Crédit Agricole, que j'ai découvert la formation d'intégrateur web chez OpenClassrooms. Ce qui devait être une opportunité professionnelle s'est progressivement transformé en une vraie passion. Aujourd'hui en fin de formation, j'ai hâte de continuer à apprendre et à développer mes propres projets."
                    />
                    <Apropostxt
                        titre="Ma stack"
                        texte="Je suis à l'aise avec HTML, CSS et JavaScript, et je continue à approfondir React ainsi que la gestion d'état avec Redux, notamment à travers ArgentBank, une application bancaire où j'ai dû structurer un state global complexe et sécuriser l'authentification."
                    />
                    <Apropostxt
                        titre="Projets clés"
                        texte="Je suis particulièrement fier de deux projets : Sophie Bluel, mon premier pas en JavaScript, où j'ai appris à manipuler une API REST pour ajouter et supprimer du contenu dynamiquement. Et ArgentBank, une application bancaire en React où j'ai dû structurer Redux pour gérer l'authentification et la modification de profil, un défi technique que je continue d'approfondir avec le temps."
                    />
                    <Apropostxt
                        titre="Ma façon de travailler"
                        texte="Mon approche est avant tout pratique : je préfère comprendre les bases solidement, puis apprendre en manipulant, en me trompant et en recommençant jusqu'à bien saisir le sujet. J'attache aussi une grande importance aux détails, qu'il s'agisse d'accessibilité, de performance ou de la qualité du code."
                    />
                    <Apropostxt
                        titre="Et après?"
                        texte="Je suis aujourd'hui ouvert à un premier poste, qui me permettrait de continuer à progresser en développement front-end, idéalement au sein d'une équipe où je pourrais apprendre au contact de profils plus expérimentés tout en continuant à explorer mes propres projets de mon côté. À court terme, je garde aussi un vif intérêt pour la cybersécurité, un domaine vers lequel j'aimerais évoluer au fil de mon parcours."
                    />
                </div>
            </div>

        </section>
    )
}
export default Apropos