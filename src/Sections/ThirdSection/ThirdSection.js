import './ThirdSection.scss';
import React, { useState } from 'react';
import DownArrow from "../../images/DownArrow.gif"
import ToolSquare from '../../Components/ToolSquare/ToolSquare';
import data from "../../information.json"
function ThirdSection({ lenguage }) {
    const information = data.Franco.tools.lenguages
    return (
        <section className="ThirdSection">
            {lenguage ? <h2 className="ThirdSection-title">TOOLS<br /> AND COMPANIES</h2> : <h2 className="ThirdSection-title">HERRAMIENTAS<br /> Y EMPRESAS</h2>}
            <div className="ThirdSection-middleContainer">
                {information.map((language, index) => (language[index + 1].type == "lenguage" ? <ToolSquare imageHeight={language[index + 1].image.height} imageWidth={language[index + 1].image.width} fontSize={language[index + 1].fontSize} image={language[index + 1].image.path} type={language[index + 1].type} color={language[index + 1].color} lenguage={language[index + 1].name} /> : ""))}
                <div className="ThirdSection-middleDown"></div>
                {information.map((language, index) => (language[index + 1].type == "company" ? <ToolSquare imageHeight={language[index + 1].image.height} imageWidth={language[index + 1].image.width} fontSize={language[index + 1].fontSize} image={language[index + 1].image.path} type={language[index + 1].type} color={language[index + 1].color} lenguage={language[index + 1].name} /> : ""))}
            </div>
            <img className="ThirdSection_downArrow" src={DownArrow} />
        </section >
    );
}
export default ThirdSection;