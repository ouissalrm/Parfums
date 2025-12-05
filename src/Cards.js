import './Cardss.css';
import { useNavigate } from "react-router-dom";
import React from "react";
export default function Cards({products,panier ,setPanier}){
    const navigate = useNavigate();

  const ajouterPanier = () => {
    setPanier([...panier, products]); 
    navigate("/Shop"); 
  };
    return(
         <>
<div className="card1">
     <img src={products.image} alt={products.title} />
            <h3>{products.title} </h3>
            <p>{products.description} </p>
            <span>  {products.price}  MAD </span><br></br>
            <button onClick={ajouterPanier}>Ajouter au panier</button>
</div></>
    )
} 