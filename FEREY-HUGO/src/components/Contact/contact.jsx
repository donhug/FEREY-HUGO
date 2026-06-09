import './contact.css'
import Clink from "../Clink/clink.jsx";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-title">
                <p>Vous voulez prendre</p>
                <h2>Contact</h2>
            </div>
            <div className="contact-main">
                <div className="contact-link">
                    <Clink
                        link="mailto:ferey.hugo@gmail.com"
                        icon="fa-solid fa-envelope"
                        name="M'envoyer un mail"
                    />
                    <Clink
                        link="https://github.com/donhug"
                        icon="fa-brands fa-github"
                        name="GitHub"
                    />
                    <Clink
                        link=""
                        icon="fa-brands fa-linkedin"
                        name="LinkedIn"
                    />
                </div>
            </div>

        </section>
    )
}

export default Contact;