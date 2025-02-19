
import React from "react";
import Street from '../images/Street.webp';
import Landscape from '../images/Landscape.webp';
import Product from '../images/Product.webp';
import Other from '../images/Other.webp';
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";

const disableRightClick = (e) => e.preventDefault();

const Content = () => {
    return (
        <>
            <div className="Work">
                <div className="text">
                    <h1>
                        Works
                    </h1>
                                      
                
                </div>
            </div>

           
                <div className="row">
                
                        
                        <div className="card"><Link to={'/Street'}> <LazyLoad height={200} offset={100} placeholder={<Placeholder />}>
                                                        
                                <img src={Street} alt={Street} onContextMenu={disableRightClick}></img></LazyLoad>
                            
                            <div class='text-on-image'>
                            
                                <h5> STREET </h5>
             
                            </div>
  
                            </Link></div>
                        
                        <div className="card"><Link to={'/Landscape'}> <LazyLoad height={200} offset={100} placeholder={<Placeholder />}>
                                                        
                                <img src={Landscape} alt={Landscape} onContextMenu={disableRightClick}></img></LazyLoad>

                            
                            <div class='text-on-image'>
                                <h5> LANDSCAPE </h5>
             
                            </div>
  
                            </Link></div>

                        <div className="card"><Link to={'/Product'}> <LazyLoad height={200} offset={100} placeholder={<Placeholder />}>
                                                        
                                <img src={Product} alt={Product} onContextMenu={disableRightClick}></img></LazyLoad>

                            
                            <div class='text-on-image'>
                                <h5> PRODUCT </h5>
             
                            </div>
  
                            </Link></div>

                        <div className="card"><Link to={'/Other'}> <LazyLoad height={200} offset={100} placeholder={<Placeholder />}>
                                                        
                                <img src={Other} alt={Other} onContextMenu={disableRightClick}></img></LazyLoad>

                            
                            <div class='text-on-image'>
                                <h5> OTHERS </h5>
             
                            </div>
  
                            </Link></div>

                    
                </div>
    
        </>
    );
};

const Placeholder = () => <div style={{ height: 200, background: "#f0f0f0" }} />;

export default Content;
