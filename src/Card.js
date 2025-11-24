import React from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { BiSolidStar, BiStar } from 'react-icons/bi';
import './Card.css';

export default function Card(props) {
    const handleAddToCart = () => {
        console.log('Added to cart:', props.title);
        // Add your cart logic here
    };

    return (
        <div className="card">
            <div className="card-image-container">
                <img src={props.image} alt={props.title || "Product"} />
            </div>

            <div className="card-content">
                <div className="card-rating">
                    <BiSolidStar className="star filled" />
                    <BiSolidStar className="star filled" />
                    <BiSolidStar className="star filled" />
                    <BiSolidStar className="star filled" />
                    <BiStar className="star" />
                    <span className="rating-count">(4.0)</span>
                </div>

                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.desc}</p>

                <div className="card-footer">
                    <div className="price-section">
                        <span className="current-price">{props.prix}</span>
                        <span className="currency">MAD</span>
                    </div>

                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                        <FiShoppingCart className="cart-icon" />
                        <span>Ajouter</span>
                    </button>
                </div>
            </div>
        </div>
    );
}