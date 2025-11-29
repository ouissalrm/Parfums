import React from "react";
import './Home.css';
import Card from "./Card";
import ChanelImage from './Chanel Coco Mademoiselle (2).png';
import GucciBloom from './Gucci.png';
import TomFordOudWood from  './tom ford oud wood.png';


export default function Home(){

   
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
       <Card title="Chanel Coco Mademoiselle" desc="Parfum féminin luxueux mêlant fleurs et patchouli avec une touche de vanille douce" prix="250 DH" image={ChanelImage} />
       <Card title="Gucci Bloom" desc="Parfum féminin délicat aux senteurs de jasmin et fleurs blanches rafraîchissantes." prix="300 DH" image={GucciBloom} />
     <Card title="Tom Ford Oud Wood" desc="Parfum de luxe unisexe aux senteurs chaudes de bois de oud, musc et ambre." prix="550 DH" image={TomFordOudWood} />
</div>
       
      </div>
    )
}