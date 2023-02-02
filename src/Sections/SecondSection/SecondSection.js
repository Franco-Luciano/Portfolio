import './SecondSection.scss';
import React from 'react';
function SecondSection({ lenguage }) {
    return (
        <section className="SecondSection">
            <h2 className="SecondSection-title">Sobre mí</h2>
            <div className='SecondSection-leftContainer'></div>
            <div className='SecondSection-rightContainer'></div>
        </section>
    );
}
export default SecondSection;
