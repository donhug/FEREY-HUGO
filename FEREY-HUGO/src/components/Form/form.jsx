import './form.css'

function Form(props) {
    return (
        <div>
            <form id="form">
                <div className="form-contact">
                    <label htmlFor="name">{props.nom} :</label>
                    <input type="text" name="name" id="name"/>

                    <label htmlFor="mail">{props.mail} :</label>
                    <input type="text" name="mail" id="mail"/>

                    <label htmlFor="texte">{props.msg} :</label>
                    <textarea
                        name="texte">
			</textarea>
                </div>
            </form>
        </div>
    )
}

export default Form