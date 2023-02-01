import React from "react";
import "../css/card.css";

import star from "../images/Star1.png"


function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} alt=""  className="div--photo"/>
                <div className="reviews">
                    <img src={star} alt="" className="star"/>
                    <p className="mark">{props.mark}</p>
                    <p className="number-reviews">{props.reviews}</p>
                    <p className="country">{props.country}</p>
                </div>
                <div className="description">
                    {props.description}
                </div>
                <div className="price">
                    <h5>From {props.price} </h5>
                    <p> / person</p>
                </div>
            </div>
        </>
    )
}

export default Card;