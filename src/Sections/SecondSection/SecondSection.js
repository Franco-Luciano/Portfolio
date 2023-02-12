import './SecondSection.scss';
import React, { useState } from 'react';
import data from "../../information.json"
import DownArrow from "../../images/DownArrow.gif"
import ProfilePicture from "../../images/ProfilePicture.png"
import TextArrow from "../../images/TextContinue.png"

function SecondSection({ lenguage }) {
    const descriptionEnglish = data.Franco.descriptionEnglish
    const descriptionSpanish = data.Franco.descriptionSpanish
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleScroll = e => {
        const downElement = e.target;
        if (downElement.scrollHeight - downElement.scrollTop === downElement.clientHeight) {
            setIsAtBottom(true);
        } else {
            setIsAtBottom(false);
        }
    };

    return (
        <section className="SecondSection">
            <h2 className="SecondSection-title">{lenguage ? "About me" : "Sobre mí"}</h2>
            <div className="SecondSection-container">
                <div className="SecondSection-container_top">
                    <div className="SecondSection-container_top-left">
                        <img src={ProfilePicture} className="SecondSection-container_top-left_image"></img>
                        <div className="SecondSection-container_top-left-information">
                            <h2 className="SecondSection-container_top-left-information_name" >Franco Carlomagno</h2>
                            <h4 className="SecondSection-container_top-left-information_alias" >{lenguage ? "“The developer”" : "“El desarrollador”"}</h4>
                            <h3 className="SecondSection-container_top-left-information_number" >+34 615 036 581</h3>
                            <h3 className="SecondSection-container_top-left-information_email" >francolucianocarlomagno@gmail.com</h3>
                        </div>
                    </div>
                    <div className="SecondSection-container_top-right">
                        <h3 className="SecondSection-container_top-right_age">22 años</h3>
                        <h3 className="SecondSection-container_top-right_nationaliti">Argentino - italiano</h3>
                    </div>
                </div>
                <div className="SecondSection-container_bottom">
                    <div onScroll={handleScroll} className="SecondSection-container_bottom-textContainer">
                        <p className="SecondSection-container_bottom-textContainer-description" style={{ whiteSpace: 'pre-wrap' }}>{lenguage ? descriptionEnglish : descriptionSpanish}</p>
                    </div>
                    {!isAtBottom ? <img src={TextArrow} className="SecondSection-container_bottom-arrow SecondSection-container_bottom-arrow-animate-arrow" /> : <span style={{
                        width: "15px",
                        height: "17px",
                        display: "block",
                        marginTop: "10px"

                    }} />}
                </div>
                <hr className="SecondSection_bottomBorder" />
            </div>
            <img className="SecondSection_downArrow" src={DownArrow} />
        </section >
    );
}
export default SecondSection;
