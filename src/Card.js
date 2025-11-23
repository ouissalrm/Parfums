import React from "react";

export default function Card(props){
    return(
        <div className="card">
             <img  src={props.image} alt="i"/>
            <h3>{props.title} </h3>
            <p>{props.desc} </p>
            <span> MAD {props.prix} </span><br></br>
            <button>Ajouter au panier</button>


        </div>
    )
}