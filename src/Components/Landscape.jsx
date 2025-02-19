import React from "react";
import Adyapith from '../images/Landscape.webp';
import Road from '../images/Landscape/Road.webp';
import Valley from '../images/Landscape/Valley.webp';
import Silk from '../images/Landscape/Silk.webp';
//import Boat from '../images/Landscape/Boat.webp';
import Love from '../images/Landscape/Love.webp';

const Landscape = () => {
    return (
        <>
        
        <div className="Gal">
        <h1>Landscape Shots</h1>
        <div className="photos">
            
            <div className="Frame">
            <img src={Adyapith} alt={Adyapith} ></img>
            </div>

            <div className="Frame">
            <img src={Silk} alt={Silk} ></img>
            </div>

            <div className="Frame">
            <img src={Love} alt={Love}  ></img>
            </div>

            <div className="Frame">
            <img src={Valley} alt={Valley} ></img>
            </div>

            <div className="Frame">
            <img src={Road} alt={Road} ></img>
            </div>

        </div>
        </div>

        </>

    )
}

export default Landscape;