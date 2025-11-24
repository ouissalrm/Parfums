import './Cardss.css';
import React, { useState } from "react";
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { BiSolidStar, BiStar } from 'react-icons/bi';

export default function Cards({ products }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleAddToCart = () => {
        console.log('Added to cart:', products.title);
        
    };

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleQuickView = () => {
        console.log('Quick view:', products.title);
        
    };

    return (
        <div className="card1">
            <div className="card-image-container">
                <img src={products.image} alt={products.title} />
                <div className="card-overlay">
                    <button 
                        className="icon-btn quick-view-btn" 
                        onClick={handleQuickView}
                        title="Aperçu rapide"
                    >
                        <FiEye />
                    </button>
                </div>
                <button 
                    className={`icon-btn wishlist-btn ${isLiked ? 'liked' : ''}`}
                    onClick={handleToggleLike}
                    title="Ajouter aux favoris"
                >
                    <FiHeart />
                </button>
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

                <h3 className="card-title">{products.title}</h3>
                <p className="card-description">{products.description}</p>

                <div className="card-footer">
                    <div className="price-section">
                        <span className="current-price">{products.price} MAD</span>
                        
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