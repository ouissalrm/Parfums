import React from "react";
import './Home.css';
import Card from "./Card";
import ChanelImage from './Chanel Coco Mademoiselle (2).png';
import GucciBloom from './Gucci.png';
import TomFordOudWood from  './tom ford oud wood.png';


export default function Home({panier, setPanier}){

   
    return(
      <div>
          <div className="home">
           <div className="title">
             <h1>Welcome to Parfuméa</h1>
            <p>
           Discover the harmony between art and fragrance. Inspired by Andalusian , each perfume is a journey through elegance, culture, and passion a refined expression of beauty that lingers in every drop.</p>
           <div className="buttons">
             <button className="button2"> Shop Now  </button>
            <button className="button1">Browse Categorie</button>
           </div>
        
           </div>
        </div>
<section>
<h1>Parfums vedettes</h1>

<p>
Découvrez nos parfums les plus convoités</p>

   </section>
<div className="cards">
       <Card title="Chanel Coco Mademoiselle" desc="Parfum féminin luxueux mêlant fleurs et patchouli avec une touche de vanille douce" price={250} panier={panier} setPanier={setPanier} image={ChanelImage} />
       <Card title="Gucci Bloom" desc="Parfum féminin délicat aux senteurs de jasmin et fleurs blanches rafraîchissantes." price={300} panier={panier} setPanier={setPanier} image={GucciBloom} />
     <Card title="Tom Ford Oud Wood" desc="Parfum de luxe unisexe aux senteurs chaudes de bois de oud, musc et ambre." price={550} panier={panier} setPanier={setPanier} image={TomFordOudWood} />
</div>
       
      </div>
    )
}