import './FourthSection.scss';
import React, { useRef } from 'react';
import emailjs from "emailjs-com"
import sendCheck from "../../images/sendCheck.png"

function FourthSection({ lenguage }) {

    const [sended, setSended] = React.useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hlax61j', 'template_p0jf8oh', form.current, 'XCOICgrPZ1Kale0_2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        form.current.reset()

        setSended(true)

    };

    return (
        <section className="FourthSection">
            {lenguage ? <><h2 className="FourthSection_title">CONTACT</h2><form className="FourthSection_formContainer" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input className="FourthSection_formContainer-top" placeholder='Contact Email' type="text" name="user_email" />
                <label>Email</label>
                <input className="FourthSection_formContainer-middle" placeholder='Subject' name="user_subject" />
                <label>Message</label>
                <textarea className="FourthSection_formContainer-bottom" placeholder='Content' name="message" />
                {sended ? <img className="FourthSection_send" src={sendCheck} /> : <input className="FourthSection_button" type="submit" value="Send" />}
            </form><span /></> :
                <>
                    <h2 className="FourthSection_title">CONTACTO</h2><form className="FourthSection_formContainer" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input className="FourthSection_formContainer-top" placeholder='Email De Contacto' type="text" name="user_email" />
                        <label>Email</label>
                        <input className="FourthSection_formContainer-middle" placeholder='Asunto' name="user_subject" />
                        <label>Message</label>
                        <textarea className="FourthSection_formContainer-bottom" placeholder='Contenido' name="message" />
                        {sended ? <img className="FourthSection_send" src={sendCheck} /> : <input className="FourthSection_button" type="submit" value="ENVIAR" />}
                    </form><span />
                </>}
        </section >
    );
}
export default FourthSection;