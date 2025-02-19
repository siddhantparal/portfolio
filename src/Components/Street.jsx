import React from "react";
import Adyapith from '../images/Street.webp';
import Cycle from '../images/Street/Cycle.webp';
import Goli from '../images/Street/Goli.webp';
import Market from '../images/Street/Market.webp';
import Victoria from '../images/Street/Victoria.webp';
import Raincoat from '../images/Street/Raincoat.webp';
import Bridge from '../images/Street/Bridge.webp';
import Bus from '../images/Street/Bus.webp';
import Fire from '../images/Street/Fire.webp';
import Std from '../images/Street/Std.webp';
import Maidan from '../images/Street/Maidan.webp';

const Street = () => {
    return (
        <>
        
        <div className="Gal">
        <h1>Street Shots</h1>
        <div className="photos">
            
            <div className="Frame">
            <img src={Adyapith} alt={Adyapith} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Bridge} alt={Bridge} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Cycle} alt={Cycle} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Goli} alt={Goli} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Maidan} alt={Maidan} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Raincoat} alt={Raincoat} height={'450px'} ></img>
            </div>

            <div className="Frame">
            <img src={Victoria} alt={Victoria} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Fire} alt={Fire} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Market} alt={Market} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Std} alt={Std} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Bus} alt={Bus} height={'450px'}></img>
            </div>
        </div>
        </div>

        </>

    )
}

export default Street;