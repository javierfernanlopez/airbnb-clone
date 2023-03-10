import React from "react";
import "../css/hero.css";


function Hero(){
    return(
        <>
            <div className="photos">
                <img src="../images/Group77.png" alt="Photos" width={"80%"} className="div--photos"/>
            </div>
            <div className="tittles">
                <h1>Online Experiences</h1>
                <h4>Join unique interactive activities led
                 by one-of-a-kind hosts—all without leaving home.</h4>
            </div>
        </>
    )
}

export default Hero;