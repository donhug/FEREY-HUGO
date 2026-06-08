import './contact.css'
import Form from "../../components/Form/form.jsx"
import Clink from "../Clink/clink.jsx";

function Contact(props) {
    return (
        <section className="contact">
            <div className="contact-title">
                <p>Vous voulez prendre</p>
                <h2>Contact</h2>
            </div>
            <div className="contact-main">
                <div className="contact-form">
                    <Form
                        nom="NOM"
                        mail="MAIL"
                        msg="MESSAGE"
                    />
                </div>
                <div className="contact-link">
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