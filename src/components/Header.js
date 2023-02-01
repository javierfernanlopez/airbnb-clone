import React from "react";
import logo from "../images/airbnb1.png";
import "../css/header.css"

function Header(){
    return(
        <header>
            <nav>
                <img src={logo} alt="Airbnb logo" width={"100px"} className="nav--logo"/>
            </nav>


        </header>
    )
}

export default Header;