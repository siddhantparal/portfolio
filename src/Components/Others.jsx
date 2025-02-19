import React from "react";
import Adyapith from '../images/Other.webp';
import Bird from '../images/Others/Bird.webp';
import Leaves from '../images/Others/Leaves.webp';
import Kite from '../images/Others/Kite.webp';
import Cats from '../images/Others/Cats.webp';
import Tree from '../images/Others/Tree.webp';


const Others = () => {
    return (
        <>
        
        <div className="Gal">
        <h1>Others Shots</h1>
        <div className="photos">
            
            <div className="Frame">
            <img src={Adyapith} alt={Adyapith} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Kite} alt={Kite} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Bird} alt={Bird} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Leaves} alt={Leaves} height={'450px'}></img>
            </div>          

            <div className="Frame">
            <img src={Cats} alt={Cats} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Tree} alt={Tree} height={'450px'}></img>
            </div>
        </div>
        </div>

        </>

    )
}

export default Others;