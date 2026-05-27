import './hero.css'
import Button from "../Button/button.jsx";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-title">
                <div className="hero-dispo">
                    <span className="glass-badge "><span className="glass-badge__dot"></span></span>
                    <p>DISPONIBLE</p>
                </div>
                <h1>
                    Bonjour je suis HUGO. <br/>
                    <span className="title-color">Integrateur Web</span>
                </h1>
                <p>
                    je conçois et intègre des interfaces web soignées, accéssibles et performante.
                    Formé au Front-end et au Back-end.
                </p>
            </div>
            <div className="hero-btn">
                <Button
                    txt='Me contacter'
                />
                <Button
                    txt='Voir mes projets'
                />
                </div>
        </div>
    )
}

export default Hero;