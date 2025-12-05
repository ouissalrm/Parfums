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
                <span className="moin">-</span> 1 <span className="plus">+</span>
            </div>
            <button className="mad">MAD {item.price} </button>
       
            </div>



            </div>
        ))
      )}</div>
      </div>

<div className="money">
  <div className="mones">
    <h1>ORDER SUMMARY</h1>
    <p>Total : </p> <h2>800 MAD</h2><hr></hr>
    <button>PROCEED TO CHECKOUT </button><hr></hr>
    <p>continue shoppnig</p>
  </div>
</div>



    </div>
  );
}
