import about1 from './about1.png'
import about2 from './About2.jpeg'
import React from "react";
export default function About(){
    return(
        <div>
           <div className="OurStory">
            <h2>Our Story</h2>
         <p> At Parfuméa, we believe that a fragrance is far more than just a scent; it is an emotion
             that stirs the soul, a memory that lingers, and a form of art that tells a story. Our journey began with a simple yet profound vision: to create refined perfumes that harmoniously blend authenticity, elegance, and modern creativity. Every fragrance we craft is carefully composed,
             selecting only the finest ingredients to ensure a unique and unforgettable experience.
             
             
              Through our dedication and passion, we strive to offer scents that not only captivate the senses but also inspire and connect with the heart of everyone who encounters them.</p>
           </div>



           <div className="OurVision">
            <img src={about1} style={{width:"46%"}} alt="image" />
            <p>Every Parfuméa fragrance is born from moments that leave a lasting imprint  emotions, memories, and experiences that shape who we are. Each scent is carefully crafted using thoughtfully selected notes, chosen for their depth, elegance, and ability to evoke feeling.
Our dedicated team blends passion with expertise, working meticulously to ensure every detail reflects excellence. We source high-quality ingredients from the finest origins around the world, honoring both artistry and authenticity in every bottle.
With Parfuméa, every fragrance becomes more than a scent  it becomes a story you carry with you</p>
           </div>
           <div className="OurCraftsmanship">
            <p>Quality is at the heart of everything we create.
Every Parfuméa perfume goes through a carefully structured journey  from the first spark of inspiration to the final drop inside the bottle. Each formula is crafted with precision, then tested at every stage to ensure it meets the highest standards of purity, longevity, and excellence.
Our bottles are more than containers; they are artistic pieces designed with a modern, refined touch that reflects the elegance, personality, and identity of our brand.
At Parfuméa, quality isn't just a feature  it is a promise woven into every detail</p>
                <img src={about2} style={{width:"46%"}} alt="image" />
           </div>

           <div className="Values">
           
             <div className="Creativity">
            <h3>Creativity</h3>
            <p>Each perfume is designed with a unique artistic touch, blending notes that inspire emotion and elevate the senses</p>
            </div>
             <div className="Excellence">
            <h3>Excellence</h3>
            <p>We deliver outstanding customer care and meticulous attention to detail, providing an exceptional experience from start to finish</p>
            </div>
             <div className="Quality">
            <h3>Quality</h3>
            <p>We are committed to offering fragrances crafted with the finest ingredients and refined expertise, ensuring premium quality in every bottle.</p>
            </div>

           </div>
        </div>
    )
}