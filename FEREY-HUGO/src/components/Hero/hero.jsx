import './hero.css'
import Button from "../Button/button.jsx";

function Hero() {
    return (
        <section className="section-hero">
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
                            Je conçois et intègre des interfaces web soignées, accessibles et performantes.
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