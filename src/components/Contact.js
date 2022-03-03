import React from "react"
import emailjs from "emailjs-com"

function Contact() {


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, e.target, process.env.REACT_APP_USERID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="main--contact" id="contact">
            <h2>Me contacter</h2>
            <form className="main--form" onSubmit={sendEmail}>
                <input className="main--form__input" type="text" placeholder="Votre nom" name="name" />
                <input className="main--form__input" type="email" placeholder="Votre email" name="email" />
                <input className="main--form__input" type="text" placeholder="Objet" name="subject" />
                <textarea className="main--form__input" type="text" cols="30" rows="12" placeholder="Votre message" name="message" />
                <button className="main--form__button">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact