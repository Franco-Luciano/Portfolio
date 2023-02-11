import './FourthSection.scss';
import React from 'react';
function FourthSection({ lenguage }) {
    return (
        <section className="FourthSection">
            {lenguage ? <><h2 className="FourthSection_title">CONTACT</h2><form className="FourthSection_formContainer">
                <input className="FourthSection_formContainer-top" placeholder='Contact Email'></input>
                <input className="FourthSection_formContainer-middle" placeholder='Subject'></input>
                <textarea className="FourthSection_formContainer-bottom" placeholder='Content'></textarea>
            </form><button className="FourthSection_button">SEND</button></> : <><h2 className="FourthSection_title">CONTACTO</h2><form className="FourthSection_formContainer">
                <input className="FourthSection_formContainer-top" placeholder='Email de contacto'></input>
                <input className="FourthSection_formContainer-middle" placeholder='Asunto'></input>
                <textarea className="FourthSection_formContainer-bottom" placeholder='Contenido'></textarea>
            </form><button className="FourthSection_button">ENVIAR</button></>}
        </section >
    );
}
export default FourthSection;