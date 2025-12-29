import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props){
    const navigate = useNavigate();

    const ajouterPanier = () => {
        const item = {
            id: `${props.title.replace(/\s+/g,'-')}-${Date.now()}`,
            title: props.title,
            description: props.desc,
            price: props.price,
            image: props.image,
        };
        props.setPanier([...props.panier, item]);
        navigate("/Shop");
    };

    return(
        <div className="card">
             <img  src={props.image} alt={props.title}/>
            <h3>{props.title} </h3>
            <p>{props.desc} </p>
            <span> MAD {props.price} </span><br></br>
            <button onClick={ajouterPanier}>Ajouter au panier</button>


        </div>
    )
}