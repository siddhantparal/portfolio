
import React from "react";
import Self from '../images/Self.webp';
import Content from "./Content"


import whatsapp from '../images/whatsapp.png';
import instagram from '../images/instagram.png';
import mail from '../images/mail.png';

const disableRightClick = (e) => e.preventDefault();
const Introduction = () => {
    return (
        <>
        <div >
            <div className="introduction">
                <div className="text">
                    <h3>
                        Introduction
                    </h3>
                    <p>
                    Kolkata based photographer.
                    </p>
                    <p>
                     What else can I say....
                     </p>
                     <p></p>

                     <div className="icons">

            <div className="round">
            <a href="tel:+918335820651"><img src={whatsapp} alt={whatsapp} height={'35px'} ></img></a>
            </div>

            <div className="round">
            <a href="https://www.instagram.com/siddhantparal/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt={instagram} height={'35px'} ></img></a>
            
            </div>

            <div className="round">
            <a href="mailto:siddhant.paral@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt={mail} height={'35px'} ></img></a>
            </div>

            </div>
                     
                </div>
                
                <div className="hcard">
                    
                    

                        <div className="image">
                            <img src={Self} alt={Self} onContextMenu={disableRightClick}></img>
                        </div>

                    
                    
                </div>
                
                
         
                
            </div>
            <hr></hr>

            <Content/>          
            </div>   
        </>
    );
};

export default Introduction;
