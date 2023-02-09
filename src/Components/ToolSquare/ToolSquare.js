import './ToolSquare.scss';
import React from 'react';
function ToolSquare({ lenguage, color, type, image, fontSize, imageHeight, imageWidth }) {
    return (
        <div className="ToolSquare">
            {type === "lenguage" ? <div style={{ backgroundColor: `${color}` }} className="ToolSquare-container">
                <img style={{ width: `${imageWidth}`, height: `${imageHeight}` }} className="ToolSquare-container_image" src={`../../images/${image}.png`} />
                <p style={{ fontSize: `${fontSize}` }} className="ToolSquare-container_text">{lenguage}</p>
            </div> :
                <div style={{ backgroundColor: `${color}` }} className="ToolSquare-containerBig">
                    <img style={{ width: `${imageWidth}`, height: `${imageHeight}` }} className="ToolSquare-containerBig_image" src={`../../images/${image}.png`} />
                    <p style={{ fontSize: `${fontSize}` }} className="ToolSquare-containerBig_text">{lenguage}</p>
                </div>}
        </div >
    );
}
export default ToolSquare;
