export default function Shop({ panier }) {
  return (
    <div className="shop">


      <div className="left">
       <div className="produitShop">
         {panier.length === 0 ? (
        <p>Panier vide</p>
      ) : (
        panier.map((item, index) => (
         <div className="shops">


             <div key={index} className="shop-card">

           <div className="image-Article">
             <img src={item.image} width="150" />
            </div>


            <div className="title-Article">
                <h3>{item.title}</h3>
                <button className="btn-supprimer">Supprimer</button>
            </div>
          </div>

          <div className="prix">
            <span>
                QUANTITY
            </span>
            <div className="count">
                <span>-</span> 1 <span>+</span>
            </div>
            <button className="mad">MAD {item.price} </button>
       
            </div>



            </div>
        ))
      )}</div>
      </div>

<div className="money">
    summary
</div>



    </div>
  );
}
