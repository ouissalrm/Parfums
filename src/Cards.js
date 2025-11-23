import './Cardss.css';
import React from "react";
export default function Cards({products}){
    return(
         <>
<div className="card1">
     <img src={products.image} alt={products.title} />
            <h3>{products.title} </h3>
            <p>{products.description} </p>
            <span>  {products.price}  MAD </span><br></br>
            <button>Ajouter au panier</button>
</div></>
    )
} 