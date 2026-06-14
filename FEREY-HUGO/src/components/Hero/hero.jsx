import './hero.css'
import Button from "../Button/button.jsx";

function Hero() {
    return (
        <section>
            <div className="section-inner">
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
                            Formé au Front-end.
                        </p>
                    </div>
                    <div className="hero-btn">
                        <Button
                            href="#contact"
                            txt='Me contacter'
                        />
                        <Button
                            href="#projets"
                            txt='Voir mes projets'
                        />
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Hero;