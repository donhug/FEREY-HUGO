import './Erreur.css'
import {Link} from 'react-router-dom'


function Erreur() {
    return (
        <>
            <section className="erreur">
                <div className="section-inner">
                    <div className="erreur-main">
                        <div className="erreur-404">
                            <h1>404</h1>
                            <p>
                                OULA! la page n'existe pas.
                            </p>
                        </div>
                        <div className="erreur-retour">
                            <Link to="/" className="erreur-lien">
                                RETOURNER SUR LA PAGE D'ACCUEIL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Erreur;
