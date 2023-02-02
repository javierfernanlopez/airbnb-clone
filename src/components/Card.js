import React from "react";
import "../css/card.css";



function Card(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOL DOUT"
    }else if (props.item.location === 'Online'){
        badgeText = "ONLINE"
    }
    
    return (
        <>
   
                <div className="card">
                {badgeText && <div className="soldout">{badgeText}</div>}
                    <img src={props.item.coverImg} alt="" className="div--photo"/>
                    <div className="reviews">
                        <img src="../images/Star1.png" alt="" className="star"/>
                        <p className="mark">{props.item.stats.rating}</p>
                        <p className="number-reviews">({props.item.stats.reviewCount}) · </p>
                        <p className="country">{props.item.location}</p>
                    </div>
                    <div className="description">
                        {props.item.title}
                    </div>
                    <div className="price">
                        <h5>From ${props.item.price} </h5>
                        <p> / person</p>
                    </div>
                </div>

        </>
    )
}

export default Card;