import { useState } from "react";

export default function Shop({ panier, setPanier }) {

  const [counts, setCounts] = useState({});

  const plus = (id, price) => {
    setCounts(prev => {
      const newCount = (prev[id] || 0) + 1;
      return { ...prev, [id]: newCount };
    });
  };

  const moin = (id) => {
    setCounts(prev => {
      if (!prev[id] || prev[id] === 0) return prev;
      return { ...prev, [id]: prev[id] - 1 };
    });
  };


  const totalGeneral = panier.reduce((acc, item) => {
    const count = counts[item.id] || 0;
    return acc + count * item.price;
  }, 0);




const supprimer = (id)=>{
  const newPanier = panier.filter(item =>item.id !== id);
  setPanier(newPanier);
  setCounts(prev =>{
    const copy = {...prev};
    delete copy[id];
    return copy;
  });

};

  return (
    <div className="shop">

      <div className="left">
        <div className="produitShop">

          {panier.length === 0 ? (
            <p>Panier vide</p>
          ) : (
            panier.map((item) => {

              const count = counts[item.id] || 0;
              const total = count * item.price || item.price;

              return (
                <div key={item.id} className="shops">

                  <div className="shop-card">
                    <div className="image-Article">
                      <img src={item.image} width="150" />
                    </div>

                    <div className="title-Article">
                      <h3>{item.title}</h3>
                      <button className="btn-supprimer" onClick={()=>supprimer(item.id)}>Supprimer</button>
                    </div>
                  </div>

                  <div className="prix">
                    <span>QUANTITY</span>

                    <div className="count">
                      <span className="moin" onClick={() => moin(item.id)}>-</span>
                     <strong> {count}</strong>
                      <span className="plus" onClick={() => plus(item.id, item.price)}>+</span>
                    </div>

                    <button className="mad">
                      MAD {count === 0 ? item.price : total}
                    </button>
                  </div>

                </div>
              );
            })
          )}

        </div>
      </div>

    

      <div className="money">
        <div className="mones">
          <p className="title_sum">ORDER SUMMARY</p>
          <div className="sum">
            <h2>Total :</h2>
          <h2>{totalGeneral} MAD</h2>
          </div>
          <hr />

          <button className="check">PROCEED TO CHECKOUT</button>
          <hr />

          <p className="shopping">Continue shopping</p>
        </div>
      </div>

    </div>
  );
}
