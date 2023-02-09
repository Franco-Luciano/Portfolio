import './FirstSection.scss';
import DotsTyping from "../../images/DotsTyping.gif"
import DownArrow from "../../images/DownArrow.gif"
import React from 'react';
function FirstSection({ lenguage }) {
    return (
        <section className="FirstSection">
            {lenguage ? <><span className="FirstSection_top" /><div className='FirstSection-downContainer'>
                <h2 className='FirstSection-downContainer_textOne'>Hi! this is my<span className='FirstSection-downContainer_textOne-colored'> checkpoint</span></h2>
                <h2 className='FirstSection-downContainer_textTwo'>my name is</h2>
                <h2 className='FirstSection-downContainer_textThree'>franco</h2>
                <hr className='FirstSection-downContainer_line'></hr>
                <h2 className='FirstSection-downContainer_textFour'>front-end developer</h2>
                <div className='FirstSection-downContainer-container_image'>
                    <div className="FirstSection-downContainer-container_dialogue">
                        <p>Rest here weary traveler</p>
                        <img src={DotsTyping} />
                    </div>
                </div>
            </div></> : <><span className="FirstSection_top" /><div className='FirstSection-downContainer'>
                <h2 className='FirstSection-downContainer_textOne'>Hola! este es mi<span className='FirstSection-downContainer_textOne-colored'> checkpoint</span></h2>
                <h2 className='FirstSection-downContainer_textTwo'>mi nombre es</h2>
                <h2 className='FirstSection-downContainer_textThree'>franco</h2>
                <hr className='FirstSection-downContainer_line'></hr>
                <h2 className='FirstSection-downContainer_textFour'>front-end developer</h2>
                <div className='FirstSection-downContainer-container_image'>
                    <div className="FirstSection-downContainer-container_dialogue">
                        <p>Descansa aquí, viajero exhausto</p>
                        <img src={DotsTyping} />
                    </div>
                </div>
            </div></>
            }
            <img className="FirstSection_downArrow" src={DownArrow} />
        </section>
    );
}
export default FirstSection;
