import React from "react";

function Card(props) {
    return (

        <div className="card col-3">
            <img className="card-img-top" src={props.data.fields.image} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.data.fields.title}</h5>
                <p className="card-text">{props.data.fields.description}</p>
            
            </div>
        </div>


    )
}

export default Card;