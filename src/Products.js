import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import './Cardss.css';
export default function Products(){

    //state pour produit
  const [parfum , setlisteproduit] = useState([])

//GET API
 const getparfums = ()=> fetch('/parfums.json')
.then(Response=>Response.json())
.then(Response=>(setlisteproduit(Response)))

//resultat 
const resultat = parfum.map((index,key)=>(
    <Cards products={index} key={key} />
))

//compenentDidMount
useEffect(()=>{
 getparfums();
},[])

    return(
        <div>
           
        <div className="cardss">{resultat} </div>
        </div>
    )
}